import {Command, flags} from '@oclif/command'
import {IncomingWebhook} from '@slack/webhook'
import cli from 'cli-ux'
import {readFileSync} from 'fs'
import {compile, parse} from 'handlebars'

import {createEnvironmentFlags} from '../utils'

interface TemplateParamDefinition {
  [key: string]: string
}

const slackEnvironmentVariables = createEnvironmentFlags([
  ['slack_webhook_url', 'SLACK_WEBHOOK_URL'],
])

export default class Slack extends Command {
  static description = `Send notification to slack

  # Configure

  1. Register an app https://api.slack.com/apps (activate Webhooks with "Post to specific channels in Slack" permissions)
  2. Connect app to the channel
  3. Copy Webhook URL and put it to config/.slackrc file as SLACK_WEBHOOK_URL variable
  4. Import .slackrc to your shell
  `

  static args = []

  static flags = {
    help: flags.help({char: 'h'}),
    ...slackEnvironmentVariables,
  }

  async run() {
    const {flags} = this.parse(Slack)

    const template = readFileSync('../../../docs/templates/slack.html.hbs', 'utf-8')

    const templateAst = parse(template)
    const params: TemplateParamDefinition = {}
    await templateAst.body.reduce((promise: Promise<string>, statement) => {
      if (statement.type !== 'MustacheStatement') {
        return promise
      }

      return promise
        .then(() => cli.prompt(`What is the value of "${statement.path.original}"`))
        .then((value: string) => params[statement.path.original] = value)
    }, Promise.resolve(''))

    const source = compile(template)

    this.log('- The following message will be sent: -')
    this.log(source(params))
    const needToContinue = await cli.prompt('Continue? Yes/no', {required: false, default: 'yes'})
    const continueOptions = ['y', 'yes']
    if (continueOptions.includes(needToContinue.toLowerCase())) {
      const webhook = new IncomingWebhook(flags.slack_webhook_url as string)
      await webhook.send(source(params))

      this.log('The message has been sent successfully!')
    }
  }
}
