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

### Configure your Slack
1. We will send you the webhook URL on the workshop which is connected to our [Slack Node-Edu Channel](https://join.slack.com/t/note-edu/shared_invite/enQtNzM5NDU3MDUzMDE0LWQwNjFmZDc0NzYwOTBhZDczNDUwZTM0ZDM2NGZhOTNlOWVlMWM4M2I1YmQyOWZiNWMzMGY0ODRmOWVmYzZiNDg). Alternatively you can create you own Slack webhook:
    1. Register an app https://api.slack.com/apps (activate Webhooks with "Post to specific channels in Slack" permissions)
    2. Connect the app to any channel
1. Copy Webhook URL and put it to `config/.slackrc` file as `SLACK_WEBHOOK_URL` environment variable
1. Import `.slackrc` to your shell with `source`

### Write the command
```ts
# Require an IncomingWebhook class from the @slack/webhook
# Create a new instance of IncomingWebhook with a SLACK_WEBHOOK_URL argument from process.env (which was created in the previous section)
# In the "run" function call the "send" method with an object containing "text" property with your text. Please bear in mind that this is an async function
# If your text has been sent lets extract process.env and use the oclif flags instead:
# Use https://oclif.io/docs/flags for a command input environment variable arguments
static flags = {
  url: flags.string({
    env: 'SLACK_WEBHOOK_URL',
    required: true,
  }),
}
```

---

## Demo

Duration: 2

### my-oclif-cli slack "Hello World!"
