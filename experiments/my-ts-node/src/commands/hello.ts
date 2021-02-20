import {Command, flags} from '@oclif/command'
import {join} from "path"
import {watch} from "fs"
const tsc = require('typescript')

const oldHook = require.extensions['.js']
require.extensions['.ts'] = function (module, file) {
  const oldCompile = module._compile
  module._compile = function (code, file) {
    code = "console.log('---');\n" + tsc.transpileModule(code, { compilerOptions: {} }).outputText
    module._compile = oldCompile
    module._compile(code, file)
  }
  oldHook(module, file)
}

export default class Hello extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ my-ts-node hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    // name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    watch: flags.boolean({char: 'w'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Hello)

    // const name = flags.name ?? 'world'
    // this.log(`hello ${name} from ./src/commands/hello.ts`)
    if (!args.file) {
      this.log("error")
    }

    const path = join(process.cwd(), args.file)
    if (flags.watch) {
      watch(path, () => {
        delete require.cache[require.resolve(path)]
        require(path)
      })
    }

    require(path)
  }
}
