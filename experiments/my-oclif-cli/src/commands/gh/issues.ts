import {Command, flags} from '@oclif/command'
import Octokit = require('@octokit/rest')
import chalk from 'chalk'
import cli from 'cli-ux'

export default class GhIssues extends Command {
  static description = 'Get a list of issues'

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

  static flags = {
    help: flags.help({
      char: 'h'
    }),
    githubPersonalToken: flags.string({
      description: 'Environment variable GITHUB_PERSONAL_TOKEN',
      env: 'GITHUB_PERSONAL_TOKEN',
      required: true
    })
  }

  async run() {
    const {args, flags} = this.parse(GhIssues)

    cli.action.start('Getting a list of issues')

    const octokit = new Octokit({
      auth: flags.githubPersonalToken,
    })

    // https://github.com/octokit/graphql.js can be used
    const {data: issues} = await octokit.issues.listForRepo({
      owner: args.owner,
      repo: args.repo,
    })

    cli.action.stop()

    cli.table(issues, {
      number: {},
      title: {},
      assignee: {
        get: row => row.assignee ? row.assignee.login : null,
      },
      state: {
        get: row => row.state === 'open' ? chalk.green('open') : chalk.red('closed'),
      },
      html_url: {
        header: 'Link'
      },
    })
  }
}
