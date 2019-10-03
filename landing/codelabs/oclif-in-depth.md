summary: oclif in Depth
id: oclif-in-depth
categories: codelab,markdown
status: Published 
authors: Alex
Feedback Link: https://alex.io

# `oclif` in Depth

---

## Features
Duration: 1

[![node](assets/oclif.png)](https://oclif.io/)
#### Arguments are declared on the command level, parsed by `oclif` and used for documentation generation

- `yargs`, `nops`, or `minimist` alternative libraries

- **Flags** change a format of an executed command `npm i --verbose`
- **Options** add customisation `git log --abbrev-commit --pretty=oneline -n 50`
- **Arguments** command operation targets `npm install yargs`

---

## Also Input
Duration: 1

- **Environment Variables**

```bash
LOG_LEVEL=debug note
```

```ts
import {flags} from '@oclif/command'

export default class Example extends Command {
  static flags = {
    logLevel: flags.string({
      description: `Environment variable 'LOG_LEVEL'.\nIt CAN NOT be passed as a flag`,
      env: 'LOG_LEVEL',
    })
  }
}
```

- **Standard Input**

---

## Practice - Arguments
Duration: 1

#### Add filter flag to find only open issues

```bash
note manage:github:issues list --status=open
## ||
Duration: 1
## note manage:github:issues list -s open
Duration: 1

ID    Title                     Description         Status
---------------------------------------------------------------
31    New CLI Issue Sprint      Task create         Open
      Change Command            sprint change 
                                by template        
```

#### [Command Flags - `oclif` official documentation](https://oclif.io/docs/flags)

---

## Practice - Flags
Duration: 1

#### Add `--json` flag to show issues list as `JavaScript` object

```bash
note manage:github:issues list --status=open --json

{
  id: 31,
  title: 'New CLI Issue Sprint Change Command',
  description: 'Task create sprint change by template',
  status: 'open' ## green
}
```

#### [TypeSript Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

---

### Additional Practice Exercise - Columns

#### Add format flag to specify lists columns

```bash
note manage:github:issues list --columns=id,title,status --json --status=open
## ||
Duration: 1
## note manage:github:issues list -c id,title,status
Duration: 1

{
  id: 31,
  title: 'New CLI Issue Sprint Change Command',
  status: 'open' ## green
}
```

---

## Abstractions
Duration: 1

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

---

## Practice - Commands VS Plugins
Duration: 1

- `Command` is a granular functionality
- `Plugin` is a pack of `commands` grouped by any semantic reason

#### Move `Github` commands and logic into a new plugin

```bash
oclif plugin test

     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │   Time to build a oclif  │
   `---------´   │  plugin! Version: 1.13.6 │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? npm package name test
? description
? author Alex Korzhikov @korzio
? version 0.0.0
? license MIT
? Select a package manager npm
? TypeScript Yes
? Use tslint (linter for TypeScript) Yes
? Use mocha (testing framework) Yes
```

---

## Hooks
Duration: 1

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
Duration: 1

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
note manage:github:issue start
## after the issue start command is finished
## the notify hook sends slack message
```