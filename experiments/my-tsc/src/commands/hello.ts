import {Command, flags} from '@oclif/command'
import { join, dirname } from 'path'
import { watch } from 'fs'
const tsc = require('typescript')

const oldHook = require.extensions['.js']

require.extensions['.ts'] = function (module, file) {
  const oldCompile = (module as any)._compile as Function
  Object.assign(module, {
    _compile: function (code: string, file: string) {
      code = 'console.log("---");' + tsc.transpileModule(code, { compilerOptions: {} }).outputText
      Object.assign(module, {
        _compile: oldCompile
      })
      
      oldCompile.call(module, code, file)
    }
  });
  oldHook(module, file)
}

export default class Hello extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ my-tsc hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    watch: flags.boolean({char: 'w'}),
    debug: flags.boolean(),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Hello)
    let filePath = join(process.cwd(), args.file)
    const fileDirPath = dirname(filePath)

    if (flags.watch) {
      watch(fileDirPath, (eventType, filename) => {
        delete require.cache[filePath]
        delete require.cache[join(fileDirPath, filename)]
        require(filePath)
      })
    }

    require(filePath)
  }
}
