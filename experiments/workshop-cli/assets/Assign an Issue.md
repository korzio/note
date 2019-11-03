## Practice - Assign an Issue
Duration: 20

#### Develop a command [to change assignee](https://octokit.github.io/rest.js/#octokit-routes-issues-update)

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

`4.` Do not forget to communicate back the success message. todo:pavlik use default oclif logger 

```js
console.log(`Assignee of the issue #${issueNumber} has been successfully changed to "${assignee}"!`)
```

![spoiler alert](assets/spoiler-alert.jpg)

### [Change an assignee code](https://github.com/korzio/note/blob/master/experiments/my-oclif-cli/src/commands/gh/assignee.ts)
   
