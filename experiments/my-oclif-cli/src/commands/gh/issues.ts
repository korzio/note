import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import chalk from 'chalk'
import Octokit = require('@octokit/rest')

export default class GhIssues extends Command {
  static description = 'Get the list of the issues of korzio/note repo'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  // args owner and repo?
  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(GhIssues)

    cli.action.start('Getting the list of the issues');

    // curl -u "paulcodiny:TOKEN_GOES_HERE" https://api.github.com/repos/korzio/note/issues
    const octokit = new Octokit({
      auth: process.env.GITHUB_PERSONAL_TOKEN,
    });

    const { data: issues } = await octokit.issues.listForRepo({
      owner: 'korzio',
      repo: 'note',
    });

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
