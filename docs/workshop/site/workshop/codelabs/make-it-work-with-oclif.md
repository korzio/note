summary: Make it Work with oclif
id: make-it-work-with-oclif
categories: codelab,markdown
status: Published 
authors: Alex
Feedback Link: https://github.com/korzio/note/issues/new

# Make it Work with oclif

---

## [![node](assets/oclif.png)](https://oclif.io/)
Duration: 1

### *Heroku, SalesForce* framework to build CLIs

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

---

## oclif Main Concepts
Duration: 1

- Extend `Command` class

```ts
import { Command, flags } from '@oclif/command'

export class MyCommand extends Command {
  static description = 'description of this example command'

  static flags = {
    help: flags.help({char: 'h'}),
    name: flags.string({char: 'n', description: 'name to print'}),
  }

  async run() {
    const { flags } = this.parse(MyCommand)

    console.log('running my command')
  }
}
```

---

## Practice - Configure `oclif` project
Duration: 5

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
Duration: 5

### Make a command [to send](https://www.npmjs.com/package/@slack/webhook) Hello World notification to `slack` 

```bash
npm install @slack/webhook
npx oclif command slack
my-oclif-cli slack "Hello from @username"
```

### `@slack/webhook` usage

```ts
const { IncomingWebhook } = require('@slack/webhook')
const url = process.env.SLACK_WEBHOOK_URL
 
const webhook = new IncomingWebhook(url)
 
// Send the notification
(async () => {
  await webhook.send({
    text: `Hello from ${process.env.USER}`,
  })
})()
```

### Environment variables in oclif

```ts
static flags = {
  url: flags.string({
    env: 'SLACK_WEBHOOK_URL',
    required: true,
  }),
}
```

```bash
export SLACK_WEBHOOK_URL=https://hooks.slack.com/services/todo
```

Use [oclif flags](https://oclif.io/docs/flags) for a command input environment variable arguments

### Configure your Slack

1. Register an app https://api.slack.com/apps (activate Webhooks with "Post to specific channels in Slack" permissions)
2. Connect app to the channel
3. Copy Webhook URL and put it to `config/.slackrc` file as `SLACK_WEBHOOK_URL` environment variable
4. Import `.slackrc` to your shell with `source`

---

## Demo
Duration: 2

### my-oclif-cli slack "Hello World!"
