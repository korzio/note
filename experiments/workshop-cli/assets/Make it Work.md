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
  - Our Slack (preferable)
    1. Open the [link to Slack webhook](https://bit.ly/37eqCFs) in a new tab. Please note, that the page shows an error. That is expected since this is an actual WebHook which expects some params.
    2. Copy the URL of the page from point 1. We did not paste the WebHook link directly to the workshop because Slack immediately disables it once it gets public or, in other words, added to the workshop on GitHub.
  - Your Slack (only if you are sure)
    1. Register an app https://api.slack.com/apps (activate Webhooks with "Post to specific channels in Slack" permissions)
    2. Connect the app to any channel

`2.` Put the Webhook URL to `config/.slackrc` file as `SLACK_WEBHOOK_URL` environment variable

```bash
export SLACK_WEBHOOK_URL=___WEBHOOK_GOES_HERE___
# or
export SLACK_WEBHOOK_URL=$(echo "aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVEwwMzg2V1BOL0JRMzRWREhQVy9DTjg3d2NVYlE4YTkyMmhaZjBaeEgwMVM=" | base64 --decode)
# or 
export SLACK_WEBHOOK_URL=$(workshop slack)
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
await webhook.send({ text: args.text })
```

![spoiler alert](assets/spoiler-alert.jpg)

### [Send Slack message code](https://github.com/korzio/note/blob/master/experiments/my-oclif-cli/src/commands/slack.ts)

```
my-oclif-cli slack "Hello World!"
```
