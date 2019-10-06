summary: Make it Shine
id: make-it-shine
categories: codelab,markdown
status: Published 
authors: Alex
Feedback Link: https://github.com/korzio/note/issues/new

# Make it Shine

---

## Effects
Duration: 1

### Beautify Input and Output

`listr` - terminal task list
![listr](assets/listr.gif)

- Effects
  - `progress` show status
  - `figlet` ASCII output

- Decoration
  - `chalk, colors` for colors
  - `clui` output tables, status, charts
  - `cli-table` print table data

- Utilities
  - `clear` clear terminal
  - `debug` wrap console log

---

## @oclif/cli-ux
Duration: 1

#### oclif utilities for input & output

```ts
import cli from 'cli-ux'
cli.prompt('What is your password?', {type: 'mask'})
```

#### Features

- `url(), open()` for urls
- `action()` immersive logs
- `table(), tree()` to print lists and structures

---

## Practice - List Github repository issues
Duration: 15

#### Make a command to list Github tasks 

Use [`@oclif/cli-ux`](https://www.npmjs.com/package/cli-ux) or any other tools to

- show a spinner while loading information,
- print the list,
- colors for printing open & closed issues.

```bash
note manage:github:issues
...Loading...
ID    Title                     Description         Status
---------------------------------------------------------------
31    New CLI Issue Sprint      Task create         Open
      Change Command            sprint change 
                                by template        
7     Sprint 7 Change                               In Progress
```

Use [`@octokit/rest`](https://www.npmjs.com/package/@octokit/rest) for `Github` requests

```ts
import Octokit = require('@octokit/rest')

const { data: issues } = await octokit.issues.listForRepo({
  owner: args.owner,
  repo: args.repo,
})
```

![github](assets/github.png)

### Configure your Github list command

1. Create Personal token https://github.com/settings/tokens
2. Add it to config file `.githubrc`
4. https://octokit.github.io/rest.js/#authentication
5. Get list of the issues https://octokit.github.io/rest.js/

---

## Additional Practice - Start Working on an Issue
Duration: 10

#### Develop a command to start working on an issue

Use `@oclif/cli-ux` - `prompt()` functionality and GraphQL `Github` interface with [`@octokit/graphql`](https://www.npmjs.com/package/@octokit/graphql).

```bash
note manage:github:issues:start
Which issue you want to pick up?
41
Do you want to start working on the issue?
Y
Updated the issue #41 with "In Progress" status
```

![github](assets/github.png)

> The [Apollo-Codegen](https://github.com/apollographql/apollo-codegen) tool can help with generating types from requests.
