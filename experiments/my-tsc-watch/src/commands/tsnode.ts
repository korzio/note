import {Command, flags} from '@oclif/command'
import { watch } from 'fs'
import { resolve } from 'path'
const tsc = require('typescript')
const { join } = require('path')

const oldHook = require.extensions['.js']
require.extensions['.ts'] = function (module, file) {
  const oldCompile = module._compile
  module._compile = function (code, file) {
    code = 'console.log("---");\n' + tsc.transpileModule(code, { compilerOptions: {} }).outputText
    module._compile = oldCompile
    module._compile(code, file)
  }
  oldHook(module, file)
}

export default class Hello extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ my-tsc-watch hello
hello world from ./src/hello.ts!
`,
  ]

  static args = [{name: 'file'}]

  static flags = {
    watch: flags.boolean({char: 'w'}),
  }

  async run() {
    const {args, flags} = this.parse(Hello)
    const filePath = join(process.cwd(), args.file)

    if (flags.watch) {
      watch(filePath, () => {
        delete require.cache[resolve(filePath)]
        require(filePath)
      })
    }

    require(filePath)
  }
}
