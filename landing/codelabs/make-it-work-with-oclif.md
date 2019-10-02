summary: Make it Work with oclif
id: make-it-work-with-oclif
categories: codelab,markdown
status: Published 
authors: Alex
Feedback Link: https://alex.io

# Make it Work with oclif

---

[![node](assets/oclif.png)](https://oclif.io/)
  
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
Duration: 1

[Note - Project Management as CLI](https://github.com/korzio/note)

> Educational Open Source Project to practice with JavaScript, TypeScript, Node, oclif, Git, Web Components, and Project Management

| ![JS](assets/icons/trim/js.png) | ![Node](assets/icons/trim/node.png) | ![oclif](assets/oclif.png) | ![TypeScript](assets/ts.png) |
|:----:|:----:|:----:|:----:|:----:|:----:|
  
```bash
npx oclif multi my-oclif-cli
cd my-oclif-cli
npm install -g .
my-oclif-cli hello
```

---

## Practice - Make it Work
Duration: 1

### Make a command [to send](https://www.npmjs.com/package/@slack/webhook) Hello World notification to `slack` 

```bash
npm install @slack/webhook
npx oclif command slack
my-oclif-cli slack "Hello from @username"
```

```ts
const { IncomingWebhook } = require('@slack/webhook')
const url = process.env.SLACK_WEBHOOK_URL
 
const webhook = new IncomingWebhook(url)
 
// Send the notification
(async () => {
  await webhook.send({
    text: 'I\'ve got news for you...',
  })
})()
```

```bash
export SLACK_WEBHOOK_URL=https://hooks.slack.com/services/todo
```

---

## Feedback
Duration: 1

## Please share your feedback on Mastering CLI in TypeScript workshop

https://forms.gle/UZMRgpKLz2fuHBSe6

---

## Demo
Duration: 1

## my-oclif-cli slack "Hello World!"

---

## Libraries
Duration: 1

- Decoration
  - `chalk` colors
  - `clui` output tables, status, charts
  - `progress` show status
  - `cli-table` print table data
  - `figlet` ASCII output

- Utilities
  - `clear` clear terminal
  - `cli-ux` oclif utilities for input output
