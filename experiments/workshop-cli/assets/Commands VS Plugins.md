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
