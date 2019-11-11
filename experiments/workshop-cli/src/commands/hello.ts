import {Command} from '@oclif/command'
import Help from '@oclif/plugin-help'

export default class Hello extends Command {
  static description = `Welcome to the Mastering CLI in TypeScript workshop!

Follow the agenda on https://korzio.github.io/
And use CLI commands to pass practical exercises
`

  async run() {
    this.log(Hello.description)
    const {flags, argv} = this.parse(Hello)
    let help = new Help(this.config, {all: flags.all})
    help.showHelp(argv)

    this.log('If you are ready, type "workshop go"')
  }
}
