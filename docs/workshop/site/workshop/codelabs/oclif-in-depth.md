summary: oclif in Depth
id: oclif-in-depth
categories: codelab,markdown
status: Published 
authors: Alex
Feedback Link: https://github.com/korzio/note/issues/new

# `oclif` in Depth

---

## `oclif` Abstractions
Duration: 5

#### Configuration in `package.json` with `oclif` property

```json
"oclif": {
  "commands": "./lib/commands",
  "bin": "my-oclif-cli",
  "plugins": [
    "@oclif/plugin-help"
  ],
  "hooks": {
    "commit": "./lib/hooks/commit/commit"
  }
},
```

#### oclif CLI `manifest` command generates configuration declaration for publish and load details purposes

#### List of useful plugins made by `oclif`, like `plugin-help`, `plugin-autocomplete` or `plugin-plugins`

### Hooks

#### Extending commands like lifecycle callbacks

- `init` - before any command when CLI is initialied,
- `prerun` - after `init` hook, but also before the command,
- `command_not_found` - if a command is not found before the error
- `preupdate`
- `update`
- `plugins:preinstall`

##### Custom hooks can be called programmatically

```ts
await this.config.runHook('custom', { arguments })
```

---

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


---

## Practice - Commands VS Plugins
Duration: 20

- `Command` is a granular functionality
- `Plugin` is a pack of `commands`, `hooks` or other things grouped by semantic reasons

`1.` Move `Github` commands and logic into a new plugin

```bash
oclif plugin manage-github

     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │   Time to build a oclif  │
   `---------´   │  plugin! Version: 1.13.6 │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? npm package name manage-github
? description
? author Alex Korzhikov @korzio
? version 0.0.0
? license MIT
? Select a package manager npm
? TypeScript Yes
? Use tslint (linter for TypeScript) Yes
? Use mocha (testing framework) Yes
```

`2.` Move all the github related project code into a generated plugin

`3.` Update CLI core to be able installing other plugins

Please note - if in the first oclif exercise the CLI was generated as multi, `package.json` should already contain this dependency

```bash
npm i @oclif/plugin-plugins
```

`4.` Test functionality locally by installing the plugin into a core

```bash
my-oclif-cli plugins:link ./manage-github
my-oclif-cli github:assignee
# should still work
```

![spoiler alert](assets/spoiler-alert.jpg)

### [Split project code into plugins](https://github.com/korzio/note/tree/architecture-32/cli)
