import {Command, flags} from '@oclif/command'
import {IncomingWebhook} from '@slack/webhook'
import {renderFile as renderFileCallback} from 'ejs'
import {promisify} from 'util'
import {createEnvironmentFlags} from '../utils'

const renderFile = promisify(renderFileCallback)

const slackEnvironmentVariables = createEnvironmentFlags([
  ['slack_webhook_url', 'SLACK_WEBHOOK_URL'],
])

export default class Slack extends Command {
  static description = 'describe the command here'

  static args = [{
    name: 'template',
    required: false,
    description: 'Template file name to generate Slack message from',
    default: 'status',
  }]

  static flags = {
    help: flags.help({char: 'h'}),
    ...slackEnvironmentVariables,
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  async run() {
    const {args, flags} = this.parse(Slack)

    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/paulcodiny/Projects/clits/experiments/my-oclif-cli/src/commands/slack.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }

    console.log(flags)

    const webhook = new IncomingWebhook(flags.slack_webhook_url as string);
    await webhook.send({
      text: 'I\'ve got news for you...',
    });
  }
}
