import {Command, flags} from '@oclif/command'

export default class Task extends Command {
  static description = 'Go through an agenda markdown list and create tasks from items'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Task)

    readList(args.file)

    const name = flags.name || 'world'
    this.log(`hello ${name}`)
    this.log(`you input file: ${args.file}`)
  }
}
