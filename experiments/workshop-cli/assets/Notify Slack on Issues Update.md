## Practice - Notify Slack on Issues Update
Duration: 20

`1.` Generate a hook to notify slack on issues update

```bash
oclif hook notify --event=notify
cat src/hooks/notify/notify.ts
```

```ts
import {Hook} from '@oclif/config'

const hook: Hook<'notify'> = async function (opts) {
  process.stdout.write(`example hook running ${opts.id}\n`)
}

export default hook
```

`2.` Let's modify `github:assignee` command so it sends a notification to slack

```bash
my-oclif-cli github:assignee
## after the issue start command is finished
## the notify hook sends slack message
```

`3.` We'll need to add a environment variable input flag in the same way we did with slack command itself

```ts
slackWebhookUrl: flags.string({
  env: 'SLACK_WEBHOOK_URL',
  required: true
})
```

`4.` Parse the flag inside the `github:assignee` command

```ts
const {slackWebhookUrl: url} = flags
```

`5.` To execute the hook call the `runHook()` method on a command's context with appropriate arguments

```
this.config.runHook('notify', {url, text})
```

Now oclif should be able to find existing `notify` functionality

![spoiler alert](assets/spoiler-alert.jpg)

### [Notify slack on assignee change code](https://github.com/korzio/note/blob/master/experiments/my-oclif-cli/src/commands/gh/assignee.ts)
