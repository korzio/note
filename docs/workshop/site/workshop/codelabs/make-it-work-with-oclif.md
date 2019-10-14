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

#### Make a command [to send](https://www.npmjs.com/package/@slack/webhook) Hello World notification to `slack` 

```bash
npm install @slack/webhook
npx oclif command slack
my-oclif-cli slack "Hello from @username"
```

#### Configure your Slack
1. We will send you the webhook URL on the workshop which is connected to our [Slack Node-Edu Channel](https://join.slack.com/t/note-edu/shared_invite/enQtNzM5NDU3MDUzMDE0LWQwNjFmZDc0NzYwOTBhZDczNDUwZTM0ZDM2NGZhOTNlOWVlMWM4M2I1YmQyOWZiNWMzMGY0ODRmOWVmYzZiNDg). Alternatively you can create you own Slack webhook:
    1. Register an app https://api.slack.com/apps (activate Webhooks with "Post to specific channels in Slack" permissions)
    2. Connect the app to any channel

1. Copy Webhook URL and put it to `config/.slackrc` file as `SLACK_WEBHOOK_URL` environment variable
    <details>
      <summary>Solution</summary>
    
      ```bash
      export SLACK_WEBHOOK_URL=___WEBHOOK_GOES_HERE___
      ```
    </details>
    
1. Import `.slackrc` to your shell with `source`
    <details>
      <summary>Solution</summary>
    
      ```bash
      source config/.slackrc
      ```
    </details>


#### Install NPM dependencies
```bash
npm i @slack/webhook

```

#### Write the command
1. Require an IncomingWebhook class from the @slack/webhook
    <details>
      <summary>Solution</summary>
    
      ```ts
      import { IncomingWebhook } from '@slack/webhook'
      ```
    </details>

1. Add a definition of the flag to `flags` section
    <details>
      <summary>Solution</summary>
    
      ```ts
      slackWebhookUrl: flags.string({
        env: 'SLACK_WEBHOOK_URL',
        required: true
      })
      ```
    </details>
    
1. In the `run` function of the command create a new instance of IncomingWebhook with a slackWebhookUrl argument
    <details>
      <summary>Solution</summary>
    
      ```ts
      const webhook = new IncomingWebhook(flags.slackWebhookUrl)
      ```
    </details>
    
1. Call the "send" method with an object containing "text" property with your text. Please bear in mind that this is an async function
    <details>
      <summary>Solution</summary>
    
      ```ts
      await webhook.send({ text: 'Hello from @username' })
      ```
    </details>

---

## Demo

Duration: 2

### my-oclif-cli slack "Hello World!"
