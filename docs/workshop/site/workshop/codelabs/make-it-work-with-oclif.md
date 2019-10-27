summary: Make it Work with oclif
id: make-it-work-with-oclif
categories: codelab,markdown
status: Published 
authors: Alex
Feedback Link: https://github.com/korzio/note/issues/new

# Make it Work with oclif

---

## [oclif](https://oclif.io/)
Duration: 5

### *Heroku, SalesForce* framework to build CLIs

![oclif](assets/oclif.png)

### Features

- `TypeScript` (can be `JavaScript`)
- Auto-documentation
- Parse Arguments
  - Flags VS Arguments
- Code generation (with `yeoman`)
  - Single Commands VS Multi Commands
- Project' folders structure
- Hooks - a way to extend commands behavior
- Test & Build & Package

### Command

#### Extend `Command` base class for application's commands


```ts
import { Command } from '@oclif/command'

export class MyCommand extends Command {
  static description = 'description of this example command'

  async run() {
    console.log('running my command')
  }
}
```

### Arguments

#### Arguments are declared on the command level, parsed by `oclif` and used for documentation generation

- `yargs`, `nops`, or `minimist` as alternative libraries

- **Flags** change a format of an executed command `npm i --verbose`
- **Options** add customisation `git log --abbrev-commit --pretty=oneline -n 50`
- **Arguments** command operation targets `npm install yargs`
- **Standard Input**
- **Environment Variables**

```bash
LOG_LEVEL=debug note
```

```ts
import { Command, flags } from '@oclif/command'

export default class MyCommand extends Command {
  static flags = {
    logLevel: flags.string({
      description: `Environment variable 'LOG_LEVEL'.\nIt CAN NOT be passed as a flag`,
      env: 'LOG_LEVEL',
    })
  }

  async run() {
    const { flags: { logLevel } } = this.parse(MyCommand)

    console.log(`running my command with logLevel ${logLevel}`)
  }
}
```

---

## Practice - Configure `oclif` project
Duration: 5

Create a new CLI project with `oclif` generator

```bash
npx oclif multi my-oclif-cli
cd my-oclif-cli
npm install -g .
my-oclif-cli hello
```

[Note - Project Management as CLI](https://github.com/korzio/note)

> Educational Open Source Project to practice with JavaScript, TypeScript, Node, oclif, Git, Web Components, and Project Management

---

## Practice - Make it Work
Duration: 30

### Make a command [to send](https://www.npmjs.com/package/@slack/webhook) Hello World notification to `slack` 

```bash
npm install @slack/webhook
npx oclif command slack
```

### Example of input/output
```bash
my-oclif-cli slack "Hello from @username"
# the message "Hello from @username" appears in the slack channel
```

### Configure your Slack
`1.` How to obtain the WebHook URL for our [Slack Node-Edu Channel](https://join.slack.com/t/note-edu/shared_invite/enQtNzM5NDU3MDUzMDE0LWQwNjFmZDc0NzYwOTBhZDczNDUwZTM0ZDM2NGZhOTNlOWVlMWM4M2I1YmQyOWZiNWMzMGY0ODRmOWVmYzZiNDg):
  1. Open the [link to Slack webhook](https://bit.ly/35zA1Xd) in a new tab. Please note, that the page shows an error. That is expected since this is an actual WebHook which expects some params.
  2. Copy the URL of the page from point 1. We did not paste the WebHook link directly to the workshop because Slack immediately disables it once it gets public or, in other words, added to the workshop on GitHub.

`2.` Put the Webhook URL to `config/.slackrc` file as `SLACK_WEBHOOK_URL` environment variable

```bash
export SLACK_WEBHOOK_URL=___WEBHOOK_GOES_HERE___
```
    
`3.`  Import `.slackrc` to your shell with `source`
    
```bash
source config/.slackrc
```


### Install NPM dependencies
```bash
npm i @slack/webhook
```


### Write the command

`1.` Require an IncomingWebhook class from the `@slack/webhook`
  
```js
import { IncomingWebhook } from '@slack/webhook'
```

`2.` Set a description for your command

```js
static description = 'Send a message to a channel in Slack'
```

`3.` The text should be provided as an argument. So, lets define an argument

```js
static args = [
  {
    name: 'text',
    required: true
  }
]
```

`4.` Add a definition of the flag to `flags` section. You may still keep "help" flag since it's quite useful usually 
    
```js
static flags = {
  help: flags.help({
    char: 'h'
  }),
  slackWebhookUrl: flags.string({
    env: 'SLACK_WEBHOOK_URL',
    required: true
  })
}
```

`5.` In the very beginning of the `run` function lets get our `flags` and `args` from the input with the following line

```js
const { flags, args } = this.parse(Slack)
```
 
    
`6.` Next lets create a new instance of IncomingWebhook with a `slackWebhookUrl` flag
  
```js
const webhook = new IncomingWebhook(flags.slackWebhookUrl)
```
    
`7.`  Call the "send" method with an object containing "text" property with your text. Please bear in mind that this is an async function
```js
await webhook.send({ text: 'Hello from @username' })
```

![spoiler alert](assets/spoiler-alert.jpg)

### [Send Slack message code](https://github.com/korzio/note/blob/master/experiments/my-oclif-cli/src/commands/slack.ts)

### Demo

```
my-oclif-cli slack "Hello World!"
```
