import {Command, flags} from '@oclif/command'
import {cli} from 'cli-ux'
import {renderFile as renderFileCallback} from 'ejs'
import {writeFileSync} from 'fs'
import {basename, join, resolve} from 'path'
import {promisify} from 'util'

import * as markdown from '../../../../markdown'
const renderFile = promisify(renderFileCallback)

const STORY_DIR = '/Users/RD25XO/Developer/experiments/notes/experiments/note-start-educational-project-30-Jun-19/note/docs/stories'
const STORY_TEMPLATE = '/Users/RD25XO/Developer/experiments/notes/experiments/note-start-educational-project-30-Jun-19/note/docs/templates/story.md.ejs'
let meeting: string

const createTask = async (agenda: string) => {
  console.log(`Creating a task for ${agenda} agenda item`)

  const title = await cli.prompt('Please enter the task\'s title')
  const body = await cli.prompt('Please enter the task\'s body')
  const params = {
    agenda,
    body,
    date: new Date(),
    meeting,
    title,
  }

  const story = await renderFile(STORY_TEMPLATE, params)
  const storyName = title.toLowerCase().replace(/[^\w]/g, '-')
  if (await cli.prompt(`Do you want to save the story ${title} with the following content:\n\n${story} \n?`)) {
    writeFileSync(join(STORY_DIR, `${storyName}.md`), story)
    console.log(`The story ${storyName} has been saved`)
  }
}

const process = async ({value: text}, node, done) => {
  cli.action.start(`Let's talk about ${text}!`)
  await cli.wait(5e3)
  cli.action.stop('Oogh, that was a good discussion...')

  let maxTasks = 3
  do {
    const isNewTask = await cli.confirm('Do you want to create a related task?')
    if (!isNewTask) {
      break
    }

    await createTask(text)
  } while (--maxTasks > 0)

  node.checked = true
  return done
}

export default class Meeting extends Command {
  static description = 'Go through an agenda markdown list and create tasks from items'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args} = this.parse(Meeting)
    meeting = basename(args.file)

    this.log(`Going through ${meeting} meeting agenda...`)
    markdown(resolve(args.file), process)
  }
}
