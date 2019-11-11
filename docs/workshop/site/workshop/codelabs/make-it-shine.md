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

## Practice - List Github Repository Issues
Duration: 30

#### Make a command to list Github tasks 

![github](assets/github.png)

Use [@oclif/cli-ux](https://www.npmjs.com/package/cli-ux) or any other tools to

- show a spinner while loading information
- print the list
- colors for printing open & closed issues

```bash
npx oclif command github:issues
```

```bash
my-oclif-cli github:issues
Getting a list of issues... done
Number Title                                      Assignee      State Link                                     
66     workshop CLI                               korzio        open  https://github.com/korzio/note/issues/66 
65     fix: Changed the formatting of exercises   null          open  https://github.com/korzio/note/pull/65   
64     Workshop CLI in TS on Saturday 9am 3 hours korzio        open  https://github.com/korzio/note/issues/64 
63     Add test section and example to workshop   paulcodiny    open  https://github.com/korzio/note/issues/63
...
```

#### Configure an access

`1.`  Create a [Personal token](https://github.com/settings/tokens)

`2.` Add it to the config file `.githubrc` to variable `GITHUB_PERSONAL_TOKEN`

```bash
export GITHUB_PERSONAL_TOKEN=___TOKEN_GOES_HERE___
```

`3.`  Export this variable to the current shell with `source` command

```bash
source config/.githubrc
```
    
`4.`  Use the auth key with [@octokit/rest](https://octokit.github.io/rest.js/)

`5.`  Get the list of [Github issues](https://octokit.github.io/rest.js/#octokit-routes-issues-list-for-repo)


#### Install NPM dependencies

```bash
npm i cli-ux chalk @octokit/rest
```

### Write the code
`1.` Import `cli` from `cli-ux` to use advanced formatting

```js
import cli from 'cli-ux'
```

`2.` Import `chalk` from `chalk` to use colors

```js
import chalk from 'chalk'
```

`3.` Require the Octokit. This library is imported in a specific way

```js
import Octokit = require('@octokit/rest')
```

`4.` Set a description for your command

```js
static description = 'Get a list of issues'
```

`5.` Add arguments: one for an owner and for a repository

```js
static args = [
  {
    name: 'owner',
    required: false,
    description: 'An owner of a repository',
    default: 'korzio',
  },
  {
    name: 'repo',
    required: false,
    description: 'A repository',
    default: 'note',
  },
]
``` 

`6.` Add a `GITHUB_PERSONAL_TOKEN` flag to `flags` definition so oclif will put the environment variable to a flag
    

```js
static flags = {
  help: flags.help({
    char: 'h'
  }),
  githubPersonalToken: flags.string({
    description: `Environment variable GITHUB_PERSONAL_TOKEN`,
    env: 'GITHUB_PERSONAL_TOKEN',
    required: true
  })
}
```
  
`7.` Use `cli.action.start` to show the loader with some useful information what is happening
    
```js
cli.action.start('Getting the list of the issues')
```
    
`8.` Create a new instance of Octokit with an object argument containing the "auth" property with the auth key created in the previous section
    
```js
const octokit = new Octokit({
  auth: flags.githubPersonalToken
})
```
   
`9.` Call the "issues.listForRepo" method with an object argument containing "owner" and "repo" keys. You can pass "korzio" as an owner and "note" as a repository. Documentation of the method https://octokit.github.io/rest.js/#octokit-routes-issues-list-for-repo.
The result of this method is an object containing "data" property
    
```js
const { data: issues } = await octokit.issues.listForRepo({
  owner: 'korzio',
  repo: 'note',
})
```
    
`10.` Stop the loader with `cli.action.stop`
    
```js
cli.action.stop()
```
    
`11.` Show tha table with the "data" as the first argument and the object with table description as the second. You can use columns "number", "title", "assignee" with a getter to get deep property, "state" with a getter to color the resulting state, "html_url" with a different header

```js
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
```

![spoiler alert](assets/spoiler-alert.jpg)

### [Get a list of issues code](https://github.com/korzio/note/blob/master/experiments/my-oclif-cli/src/commands/gh/issues.ts)
   
---

## Additional Practice - Assign yourself on an Issue
Duration: 30

#### Develop a command [to change an assignee](https://octokit.github.io/rest.js/#octokit-routes-issues-update)

Use `@oclif/cli-ux` - `prompt()` functionality.

```bash
my-oclif-cli github:assignee
Do you want to start working on an issue? (Y/n) [y]: y
Which issue you want to pick up? Please provide the ID: 62
What is your GitHub login?: paulcodiny
```

`1.` Ask whether the user wants to start working on an issue. Use capital letter to communicate the default choice even though oclif helps with this

```js
const startWorking = await cli.prompt('Do you want to start working on an issue? (y/N)', {
  required: false,
  default: 'y'
})
```
 
`2.` If the choice is "y" then show additional promts

```js
if (['y', 'yes'].includes(startWorking.toLowerCase())) {
  const issueNumber = await cli.prompt('Which issue you want to pick up? Please provide the Number')
  const assignee = await cli.prompt('What is your GitHub login?')
  
  // ...
}
```

`3.` After the CLI script gathers all required inputs we can perform an update

```js
await octokit.issues.update({
  owner: args.owner,
  repo: args.repo,
  issue_number: issueNumber,
  assignees: [assignee]
})
```

`4.` Do not forget to communicate back the success message.

```js
this.log(`Assignee of the issue #${issueNumber} has been successfully changed to "${assignee}"!`)
```

![spoiler alert](assets/spoiler-alert.jpg)

### [Change an assignee code](https://github.com/korzio/note/blob/master/experiments/my-oclif-cli/src/commands/gh/assignee.ts)
   
