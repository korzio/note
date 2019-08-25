import {Command, flags} from '@oclif/command'
import {renderFile as renderFileCallback} from 'ejs'
import {promisify} from 'util'

const renderFile = promisify(renderFileCallback)

const twitterEnvironmentVariables = [
  ['consumer_key', 'TWITTER_CONSUMER_KEY'],
  ['consumer_secret', 'TWITTER_CONSUMER_SECRET'],
  ['access_token_key', 'TWITTER_ACCESS_TOKEN_KEY'],
  ['access_token_secret', 'TWITTER_ACCESS_TOKEN_SECRET'],
].reduce((memo, [name, envName]) => ({ ...memo, [name]: flags.string({
  description: `Environment variable '${envName}'.\nIt CAN NOT be passed as a flag`,
  env: envName,
})}), {})

export default class Tweet extends Command {
  static description = 'describe the command here'

  static args = [{
    name: 'template',
    required: false,
    description: 'Template file name to generate tweet from',
    default: 'status',
  }]

  static flags = {
    help: flags.help({char: 'h'}),
    ...twitterEnvironmentVariables,
    text: flags.string({
      description: 'Text to tweet',
      required: false
    }),
  }

  async run() {
    const {flags: {text}, args} = this.parse(Tweet)

    // this.log(`flags ${JSON.stringify(flags, null, 2)}`)
    this.log(`args ${JSON.stringify(args, null, 2)}`)

    const tweet = await renderFile(`../../docs/templates/${args.template}.ejs`, {text})
    this.log(`tweet ${tweet}`)
  }
}