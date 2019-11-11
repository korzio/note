import {Command} from '@oclif/command'
import enquirer = require('enquirer')
import {existsSync, readFileSync, writeFileSync} from 'fs'
import marked = require('marked')
import TerminalRenderer = require('marked-terminal')
import {join} from 'path'

export default class Go extends Command {
  static description = 'Practice Exercise'

  static agenda = [
    ['Hello World', 'hello-world-cli-in-node.md'],
    ['Parse arguments', 'hello-world-cli-in-node.md'],
    ['Hello World with TypeScript', 'hello-world-cli-in-node.md'],
    ['Configure oclif project', 'make-it-work-with-oclif.md'],
    ['Make it Work', 'make-it-work-with-oclif.md'],
    ['List Github Issues', 'make-it-shine.md'],
    ['Assign an Issue', 'make-it-shine.md'],
    ['Notify Slack on Issues Update', 'oclif-in-depth.md'],
    ['Commands VS Plugins', 'oclif-in-depth.md'],
  ]

  static assetsPath = join(__dirname, '../../assets')

  stateFile = join(__dirname, 'state')
  get state() {
    if (!existsSync(this.stateFile)) {
      return 0
    }

    const state = readFileSync(this.stateFile, 'utf-8')
    return parseInt(state, 10)
  }

  set state(state: number) {
    writeFileSync(this.stateFile, state)
  }

  async run() {
    let prevFile: string
    const choices = Go.agenda.reduce((memo: Array<string | object>, [name, file]) => {
      if (prevFile && prevFile !== file) {
        memo.push({role: 'separator'})
      }

      memo.push(name)
      prevFile = file

      return memo
    }, [])

    const prompt = new (enquirer as any).Select({
      name: Go.description,
      message: 'Pick your next exercise',
      choices: choices.slice(),
      initial: this.state
    })

    const fileName = await prompt.run()
    this.state = choices.indexOf(fileName)

    const filePath = join(Go.assetsPath, `${fileName}.md`)
    marked.setOptions({
      renderer: new TerminalRenderer({tab: 2})
    })

    const exercise = marked(readFileSync(filePath, 'utf-8'))
    this.log(exercise)
  }
}
