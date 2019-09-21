import {Command, flags} from '@oclif/command'
import Octokit = require('@octokit/rest')
import chalk from 'chalk'
import cli from 'cli-ux'

import {createEnvironmentFlags} from '../../utils'

export default class GhIssues extends Command {
  static description = 'Get the list of the issues of korzio/note repo'

  static flags = {
    help: flags.help({char: 'h'}),
    ...createEnvironmentFlags([
      ['github_personal_token', 'GITHUB_PERSONAL_TOKEN'],
    ]),
  }

  // args owner and repo?
  static args = [
    {
      name: 'owner',
      required: false,
      description: 'An owner of the repository',
      default: 'korzio',
    },
    {
      name: 'repo',
      required: false,
      description: 'A repository',
      default: 'note',
    },
  ]

  async run() {
    const {args, flags} = this.parse(GhIssues)

    cli.action.start('Getting the list of the issues')

    const octokit = new Octokit({
      auth: flags.github_personal_token as string,
    })

    // https://github.com/octokit/graphql.js can be used
    const {data: issues} = await octokit.issues.listForRepo({
      owner: args.owner,
      repo: args.repo,
    })

    cli.action.stop()

    cli.table(issues, {
      title: {

      },
      assignee: {
        get: row => row.assignee ? row.assignee.login : null,
      },
      state: {
        get: row => row.state === 'open' ? chalk.green('open') : chalk.red('closed'),
      },
      url: {
        header: 'Link'
      },
    })
  }
}
