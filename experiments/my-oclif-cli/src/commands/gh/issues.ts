import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import chalk from 'chalk'


// REST
import Octokit = require('@octokit/rest')

// GRAPHQL
import { graphql } from '@octokit/graphql'
import { getIssuesQuery } from './getIssues.graphql'
import { getIssues_repository_issues_edges_node, IssueState } from '../../../graphql'


type Repository = {
  issues: {
    edges: Array<{
      node: getIssues_repository_issues_edges_node
    }>
  }
}

export default class GhIssues extends Command {
  static description = 'Get the list of the issues of korzio/note repo'

  static flags = {
    help: flags.help({
      char: 'h'
    }),
    github_personal_token: flags.string({
      description: `Environment variable 'GITHUB_PERSONAL_TOKEN'.\nIt MUST NOT be passed as a flag`,
      env: 'GITHUB_PERSONAL_TOKEN',
    }),
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
    const { args, flags } = this.parse(GhIssues)

    cli.action.start('Getting the list of the issues')

    // REST

    // const octokit = new Octokit({
    //   auth: flags.github_personal_token,
    // })

    // const { data: issues } = await octokit.issues.listForRepo({
    //   owner: args.owner,
    //   repo: args.repo,
    // })


    // GRAPHQL

    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `token ${flags.github_personal_token}`
      }
    })

    const { repository: { issues: { edges: issueNodes } } } = await graphqlWithAuth(getIssuesQuery, {
      repositoryOwner: args.owner,
      repositoryName: args.repo,
    }) as { repository: Repository }

    const issues: getIssues_repository_issues_edges_node[] = issueNodes.map(({ node }) => ({ ...node }))

    cli.action.stop()

    cli.table(issues, {
      title: {

      },
      assignee: {
        get: row => row.assignees.edges && row.assignees.edges.length && row.assignees.edges[0]
          // row.assignees.edges[0]!.node moved from the previous line with conditions because of the "!" after "edges[0]"
          ? row.assignees.edges[0]!.node && row.assignees.edges[0]!.node.login
          : null,
      },
      state: {
        get: row => row.state === IssueState.OPEN
          ? chalk.green('open')
          : chalk.red('closed'),
      },
      url: {
        header: 'Link'
      },
    })
  }
}
