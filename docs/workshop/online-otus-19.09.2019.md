class: primary
count: false

# Mastering CLI in TypeScript
### by
## [Alex Korzhikov](http://github.com/korzio/)
### & 
## [Pavlik Kiselev](http://github.com/paulcodiny/) 

.right[
  Amsterdam

  16th of September 2019
]

---

# Mastering CLI in TypeScript - Agenda

.right-image[![Node](assets/node.png)]

- CLI in Node
  - CLI Targets
  - Shell
  - Examples - npm, git
  - Basic Principles

- Hello World CLI in Node
  - `package.json`
  - `TypeScript`
  
- Hands-on CLI in Node
  - Tools Overview - [prompt](https://www.npmjs.com/package/prompt) & [Inquirer.js](https://github.com/SBoudrias/Inquirer.js#documentation), `Commander.js`, `Vorpal`, `gluegun`

- Make it Work with `oclif`
  - Configure `oclif` project
  - Develop a command to slack hello world

---

# Goals

.right-image[![Node](assets/node.png)]

<br>

- Understand Basic CLI Concepts

<br>

- Practice coding `JavaScript` & `TypeScript` CLI programs in `Node` 

<br>

- Overview popular `npm` tools, libraries & frameworks for constructing CLIs

<br>

- Make an `oclif` CLI application to send Hello World notification to `slack` 

---

# Who are we?

.right-image.photo[
![Alex](assets/team/alex.jpg)
]

## [Alex Korzhikov](http://github.com/korzio/)
#### `JavaScript, Node, Web Components, TypeScript` 
### @ING @Otus

- Twitter: **[AlexKorzhikov](https://twitter.com/AlexKorzhikov)**  
- Medium: **[korzio](https://medium.com/@korzio)**  
- Github: **[korzio](https://github.com/korzio)**  

---

# Who are we?

.right-image.photo[
![Pavlik](assets/team/pavlik.jpg)
]

## [Pavlik Kiselev](http://github.com/paulcodiny/) 
#### `JavaScript, Serverless, React, GraphQL` 
### @NonDutch

- **[LinkedIn](
https://www.linkedin.com/in/pavlik-kiselev-06993347/)**  
- Github: **[paulcodiny](https://github.com/paulcodiny)**  

---

# Introduction

### A command-line interface or command language interpreter (CLI), is a means of interacting with a computer program where the user (or client) issues commands to the program in the form of lines of text (command lines). A program which handles the interface is called a command language interpreter or shell.

(c) Wiki

---

# Porqué?

### Which CLI program
- Do you like?
- Do you use the most?

.center[
  ![question](assets/question.png)
]

- Why `CLI`?
- Why `JavaScript`?
- Why `Node`?
- Why `TypeScript`?

---

# Why CLI?

### .green[`+`]

- **Tools** for 
  - improving **developer experience** and
  - task automation
- *which allow to gain even more!*
- *That's fun!*

### .red[`-`]?

---

# CLI Targets

- CLI for API
- CLI for Domains
- CLI for Unification

## Why JavaScript?

- JavaScript CLI for JavaScript Tasks
- JavaScript CLI for FrontEnd

```bash
npx cowsay hello cow
 ___________
< hello cow >
 -----------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

---

# Why Node?

### .green[`+`]

- Practice with `JavaScript`
- [Atwood's Law](https://blog.codinghorror.com/the-principle-of-least-power/) - *any application that can be written in JavaScript, will eventually be written in JavaScript*
- Fast and easy to develop
- A rich infrastructure with all kinds of packages and libraries with `npm` 
- Modules & plug'n'play

### .red[`-`]?
- `Node` need to be installed?!

.hidden[

# Question

### > Why force the consumer to have all of node installed on their machine for a simple CLI?

![question](assets/question.png)

- We build for Fronted developers, they have node installed already

- In some environments (browsers, are you crazy?!) `Node` even doesn't need to be installed

Why Node
A common question we’ve heard is: why the migration to Node for our plug-in architecture? We’re still Ruby fans but we also firmly believe in using the right tool for the right job, in this case we felt Node offered some key benefits. When it comes to creating a great CLI experience we wanted no platform (Linux, OS X, Windows) to feel superior to the other, but rather wanted all to have a great and powerful CLI experience should you choose to use it. The Node ecosystem of packages brings broader coverage of cross-platform compatibility, meaning you can simply use many of the packages you’d like to develop plug-ins more quickly and easily while not having to worry about as many compatibility issues.

https://blog.heroku.com/making_cli_plugins_better_with_a_new_architecture
]

---

# [Why TypeScript?](https://itnext.io/why-use-typescript-good-and-bad-reasons-ccd807b292fb)

### .green[`+`]

- Types for unifying protocols and interfaces, checked statically Ahead Of Time
  - According to [To Type or Not to Type: Quantifying Detectable Bugs in JavaScript
  by Zheng Gao, Christian Bird, Christian Bird](http://ttendency.cs.ucl.ac.uk/projects/type_study/documents/type_study.pdf) study, using TypeScript results in 15% decrease of bugs
  - Focus on API, not on implementation details
  
- OOP patterns and abstractions
- IDE help & support for writing code which will save your developers time

### .red[`-`]

- Takes more time to develop and maintain projects

---

# Shell

.hidden[
  http://tldp.org/LDP/Bash-Beginners-Guide/html/
  
  The restricted shell
  - When invoked as rbash or with the --restricted or -r option, the following happens:
  - The cd built-in is disabled.
  - Setting or unsetting SHELL, PATH, ENV or BASH_ENV is not possible.
  - Command names can no longer contain slashes.
  - Filenames containing a slash are not allowed with the . (source) built-in command.
  - The hash built-in does not accept slashes with the -p option.
  - Import of functions at startup is disabled.
  - SHELLOPTS is ignored at startup.
  - Output redirection using >, >|, ><, >&, &> and >> is disabled.
  - The exec built-in is disabled.
  - The -f and -d options are disabled for the enable built-in.
  - A default PATH cannot be specified with the command built-in.
  - Turning off restricted mode is not possible.
  
  After the forking process, the address space of the child process is overwritten with the new process data. This is done through an exec call to the system.
]

> a **program** that takes commands from the keyboard and gives them to the operating system to perform

```bash
cat /etc/shells   # List of shells
cat /etc/passwd   # Default shell
```

### What is your default shell?

- Interactive, non-interactive, login, non-login
- Built-in commands and scripts
- When a program is executed, a Bash process is forked

```bash
htop + bash
```

.hidden[
---

# Windows Specifics
]

---

# Principles Question

.half-image.right-image[
  ![question](assets/question_ru.png)
]

### Which basic principles of designing a `CLI` program you might mention?

---

# Examples

.right-code[![NPM](assets/icons/trim/npm.png)]

### Principles

.right-code.half-images[![git](assets/git.png)]
- Understand what's happening
  - `help`
  - `version`
  - `logs, messages, errors`
- `Do One Thing and Do It Well`

### Top

- `git`
- `npm`

### Generators & Developer Experience

- yeoman
- create-react-app
- angular-cli

---

class: center

# Basic Principles
## Q&A
## -->
## Practice

---

# package.json

```json
{
  "name": "my-hello-world-cli",
  "version": "1.0.0",
  "description": "Hello CLI",
  "main": "server.js",
  "bin": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "man" : "./man/doc.1"
}
```

- `main` - exports
- `bin` - make an executable `symlink` inside `PATH`, `./node_modules/.bin/`
- `url` - [`npm bugs`](https://docs.npmjs.com/files/package.json#bugs) - feedback on a package 🤗

---

# Execution

- `shebang` specifies an interpeter in `*nix` systems

```js
#!/usr/bin/env node
```

- `process.argv` contains arguments which a program is called with

<br>

### What will be an output of running `server.js`?

```javascript
// server.js
console.log(process.argv)
```

```bash
node server.js hello world
```

---

# Practice - Hello World

### Make the Hello World CLI in Node

```bash
mkdir my-hello-world-cli
npm init
echo "console.log('Hello CLI')" > server.js
npm start
npm install --global .
```

---

# Practice - Parse arguments

### Parse arguments to show help message and version

```bash
my-hello-world-cli

Package description
Package version

Usage: 
--help    Help documentation
--version Installed package version
```

---

# Demo 

## Hello World CLI in Node

---

# TypeScript

.right-image[![ts](assets/ts.png)]

> JavaScript that scales.  
> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.  
> Any browser. Any host. Any OS. Open source.

- Anders Hejlsberg, 2012 @ Microsoft

### Tools

- `typescript, tsc` - compile to `JavaScript`
- `tslint` - static code analysis, on a way to `eslint`
- `@types` - types definitions, [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node)
- `ts-node` - on-the-fly TypeScript execution for `Node`

---

# Practice - Hello World with TypeScript

### Make Hello World CLI with TypeScript

```bash
npm install -g typescript
tsc --init
mv server.js server.ts
npm install --save-dev @types/node
tsc
my-hello-world-cli
```

### Troubleshooting

TODO change target or lib (to []) in tsconfg

---

# Tools Overview

### TODO compare table commander / gluegun / ...

| Tool         | Type      | Goal          | Features  |
| ------------ | --------- | ------------- | --------- |
| prompt       | utility   | Command-line prompt | prompt |
| inquirer.js  | utility   | A collection of common interactive command line user interfaces. | error feedback, asking questions, parsing input, validating answers, hierarchical prompts |
| commander.js | toolkit   | The complete solution for node.js command-line interfaces, inspired by Ruby's commander.      |    $1 |
| gluegun      | toolkit | Gluegun is a delightful toolkit for building Node-based command-line interfaces (CLIs) in TypeScript or modern JavaScript      | parameters, patching, filesystem, system, http, prompt, print, semver, strings |
| vorpal       | framework | Vorpal is Node's framework for building interactive CLI applications. Based on commander.js and inquirer.js | required/optional args, prompts, generator, piped commands, persistent command history, auto-gen docs/help, autocomplete |
| oclif        | framework | Framework for building CLIs  | Flag/Argument parsing, prompts, fast, generator, testing helpers, auto-gen docs/help, plugins, hooks, TS, auto-updating installers, autocomplete |

---

# Commander.js

```javascript
var program = require('commander')

program
  .version('0.1.0')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .parse(process.argv)

console.log('you ordered a pizza with:')
if (program.peppers) console.log('  - peppers')
if (program.pineapple) console.log('  - pineapple')
if (program.bbqSauce) console.log('  - bbq')
console.log('  - %s cheese', program.cheese)
```

- Parse arguments
- Modular
- Auto-documentation

---

# Inquirer

### User's input

![Inquirer DEMO Gif](https://github.com/mokkabonna/inquirer-autocomplete-prompt/raw/master/inquirer.gif)

#### Alternatives

- `cli-ux`
- `prompt`

---

# [Vorpal](https://vorpal.js.org/)

.right-code[
- Immersive Experience
- Auto documentation
- Parse arguments
- Input 
- Autocompletion
]

.half-image[
  ![vorpal](assets/vorpal_help.jpg) <br><br>
  ![daffy](assets/daffy_opt.gif)
]

---

# [Gluegun](https://github.com/infinitered/gluegun)

> toolkit for building Node-based command-line interfaces (CLIs) in TypeScript or modern JavaScript

```ts
module.exports = {
  name: 'generate', alias: ['g'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters: { first: project }, strings: { lowerCase, upperFirst },
      template: { generate }, print: { info }, prompt: { ask }
    } = toolbox

    // ask a series of questions
    const { branch } = await ask([{ type: 'input', name: 'branch', message: 'What would be an example for branch naming convention?' }])

    const fileName = 'CONTRIBUTING.md'
    const target = `${lowerCase(project)}/${fileName}`

    await generate({
      template: `${fileName}.ejs`,
      target, props: { project, branch },
    })

    info(`Generated ${fileName} file at ${target}`)
  },
}
```

---

.half-image[
  [![node](assets/oclif.png)](https://oclif.io/)
]

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

# oclif Main Concepts

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

# Practice - Configure `oclif` project

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

# Practice - Make it Work

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

# Feedback

## Please share your feedback on Mastering CLI in TypeScript workshop

https://forms.gle/UZMRgpKLz2fuHBSe6

---

# Demo

## my-oclif-cli slack "Hello World!"

---

# Libraries

- Decoration
  - `chalk` colors
  - `clui` output tables, status, charts
  - `progress` show status
  - `cli-table` print table data
  - `figlet` ASCII output

- Utilities
  - `clear` clear terminal
  - `cli-ux` oclif utilities for input output

---

# Summary

.right-image[![Node](assets/node.png)]

<br>

- Understand Basic CLI Concepts

<br>

- Overviewed different `npm` packages for developing a CLI

<br>

- Practice with CLI in `Node` with `TypeScript` and popular frameworks & libraries

---

# Docs

- [Evolution of the Heroku CLI: 2008-2017](https://blog.heroku.com/evolution-of-heroku-cli-2008-2017)

- [12 Factor CLI Apps - Heroku](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46)

- [Building Great CLI Experiences in Node - Jeff Dickey, Heroku](https://www.youtube.com/watch?v=Izx3-KSuaM8)

- [Build a JavaScript Command Line Interface (CLI) with Node.js — SitePoint](https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/)

---

class: center, middle
# Thank you!
## Questions?

.left[
Twitter: **[AlexKorzhikov](https://twitter.com/AlexKorzhikov)**  
Medium: **[korzio](https://medium.com/@korzio)**  
Github: **[korzio](https://github.com/korzio)**  
]

.right[
**[LinkedIn](
https://www.linkedin.com/in/pavlik-kiselev-06993347/)**  
Github: **[paulcodiny](https://github.com/paulcodiny)**  
]

.hidden[
  > Под Win глобально без /bin/ не ставится, приходится локально
  > Нужно какой-то .cmd создать и параметр bin в `package.json`
  > В win шабанг не работает, надо .cmd делать, лишний шаг
]
