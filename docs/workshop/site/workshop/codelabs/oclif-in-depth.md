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
  "bin": "my-oclif",
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

#### Make a hook to notify slack on issues update

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

```bash
note manage:github:issue
## after the issue start command is finished
## the notify hook sends slack message
```

---

## Practice - Commands VS Plugins
Duration: 20

- `Command` is a granular functionality
- `Plugin` is a pack of `commands` grouped by any semantic reason

#### Move `Github` commands and logic into a new plugin

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

#### Update CLI core to be able installing other plugins

```
npm i @oclif/plugin-plugins
my-oclif-cli plugins:link ./manage-github
```