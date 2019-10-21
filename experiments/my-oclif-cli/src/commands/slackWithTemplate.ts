import {readFileSync} from 'fs';
import {Command, flags} from '@oclif/command'
import {IncomingWebhook} from '@slack/webhook'
import cli from 'cli-ux'
import Handlebars from 'handlebars';

import {createEnvironmentFlags} from '../utils'

interface TemplateParamDefinition {
  [key: string]: string
}

const slackEnvironmentVariables = createEnvironmentFlags([
  ['slack_webhook_url', 'SLACK_WEBHOOK_URL'],
])

export default class SlackWithTemplate extends Command {
  static description = 'describe the command here'

  static args = []

  static flags = {
    help: flags.help({char: 'h'}),
    ...slackEnvironmentVariables,
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  async run() {
    const { flags } = this.parse(Slack)

    const template = readFileSync('./src/templates/slack.html.hbs').toString('utf8')

    const templateAst = Handlebars.parse(template)
    const params: TemplateParamDefinition = {}
    await templateAst.body.reduce((p: Promise<string>, statement) => {
      if (statement.type === 'MustacheStatement') {
        return p
          .then(() => cli.prompt(`What is the value of "${statement.path.original}"`))
          .then((value: string) => params[statement.path.original] = value)
      } else {
        return p;
      }
    }, Promise.resolve())

    const source = Handlebars.compile(template)

    console.log('- The following message will be sent: -')
    console.log(source(params))
    const needToContinue = await cli.prompt('Continue? Yes/no', { required: false, default: 'yes' })
    const continueOptions = ['y', 'yes']
    if (continueOptions.includes(needToContinue.toLowerCase())) {
      const webhook = new IncomingWebhook(flags.slack_webhook_url as string)
      await webhook.send(source(params))

      console.log('The message has been sent successfully!')
    }
  }
}
