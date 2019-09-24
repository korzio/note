import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import chalk from 'chalk'
import { graphql } from '@octokit/graphql'

import { Issue } from './types';

import Octokit = require('@octokit/rest')


import { createEnvironmentFlags } from '../../utils';
import { GraphQlQueryResponseData } from '@octokit/graphql/dist-types/types';
import object from 'cli-ux/lib/styled/object';

const ghIssuesEnvironmentVariables = createEnvironmentFlags([
  ['github_personal_token', 'GITHUB_PERSONAL_TOKEN'],
])

type Repository = GraphQlQueryResponseData & {
  issues: {
    edges: Array<Issue>
  }
}

export default class GhIssues extends Command {
  static description = 'Get the list of the issues of korzio/note repo'

  static flags = {
    help: flags.help({char: 'h'}),
    ...ghIssuesEnvironmentVariables,
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

    cli.action.start('Getting the list of the issues');

    const octokit = new Octokit({
      auth: flags.github_personal_token as string,
    });

    // const { data: issues } = await octokit.issues.listForRepo({
    //   owner: args.owner,
    //   repo: args.repo,
    // });

    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `token ${flags.github_personal_token as string}`
      }
    });
    const { repository: { issues: { edges: issueNodes } } } = await graphqlWithAuth(`
      {
        repository(owner: "${args.owner}", name: "${args.repo}") {
          issues(last: 10) {
            edges {
              node {
                title
                assignees(first: 1) {
                  edges {
                    node {
                      login  
                    }
                  }
                }
                state
                url
              }
            }
          }
        }
      }
    `) as { repository: Repository };

    const issues = issueNodes.map(({ node }) => ({ ...node }))
    // console.log(issues[0].assignee)
    // console.log(issues[0].assignees.edges[0].node.login)
    //
    // return

    cli.action.stop()

    cli.table(issues, {
      title: {

      },
      assignee: {
        get: row => row.assignees.edges.length ? row.assignees.edges[0].node.login : null,
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
