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
Duration: 30

#### Make a command to list Github tasks 

![github](assets/github.png)

Use [`@oclif/cli-ux`](https://www.npmjs.com/package/cli-ux) or any other tools to

- show a spinner while loading information
- print the list
- colors for printing open & closed issues

```bash
npx oclif command manage:github:issues
```

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

#### Configure an access

1. Create a [Personal token](https://github.com/settings/tokens)
1. Add it to the config file `.githubrc`
1. Use the auth key with [@octokit/rest](https://octokit.github.io/rest.js/)
1. Get the list of [Github issues](https://octokit.github.io/rest.js/#octokit-routes-issues-list-for-repo)


#### Write the code
```ts
# Show the loader with some useful information what is happening
# Create a new instance of Octokit with an object argument containing the "auth" property with the auth key created in the previous section
# Call the "issues.listForRepo" method with an object argunent containing "owner" and "repo" keys
# Documentation of the method https://octokit.github.io/rest.js/#octokit-routes-issues-list-for-repo
# The result of this method is an object containing "data" property
# Stop the loader
# Show tha table with the "data" as the first argument and the object with table description as the second
# You can use columns "title", "assignee" with a getter to get deep property, "state" with a getter to color the resulting state, "html_url" with a different header

---

## Additional Practice - Start Working on an Issue
Duration: 30

#### Develop a command [to change assignee](https://octokit.github.io/rest.js/#octokit-routes-issues-add-assigneesf) and [start working on an issue](https://octokit.github.io/rest.js/#octokit-routes-issues-update)

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
