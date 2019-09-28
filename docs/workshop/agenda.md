# About

The agenda for Mastering CLI in TypeScript Workshop

# Agenda

- Introduction
  
- Theory - CLI in Node (10 min)
  - Why CLI?
  - CLI Targets
    - CLI for API
    - CLI for Domains
    - CLI for Unification
    - JavaScript CLI for JavaScript Tasks
    - JavaScript CLI for FrontEnd
  - Why JavaScript?
  - Why Node?
  - [Why TypeScript?](https://itnext.io/why-use-typescript-good-and-bad-reasons-ccd807b292fb)
    - [To Type or Not To Type](http://ttendency.cs.ucl.ac.uk/projects/type_study/documents/type_study.pdf)
  - Shell
    - Windows Specifics
  - Examples Top CLIs - npm, git, heroku
  - Basic Principles

- Practice - Hello World CLI in Node (10 min)
  - package.json
  - main, bin, doc, man, url
  - process arguments
  - now make it in [`TypeScript`](https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/)
  
- Theory - Hands-on CLI in Node.js (15 min)
  - Best Practices?
  - Tooling Overview 
    - > [prompt](https://www.npmjs.com/package/prompt)
      > [Inquirer.js](https://github.com/SBoudrias/Inquirer.js#documentation)
  - `Commander.js` & `Vorpal`
  - `gluegun`

- Practice - Make it Work - with `oclif` (15 min)
  - `oclif`
  - Configure project
  - Develop a command to slack hello world with `oclif` in TypeScript

- Theory & Practice - UX - Make it Shine - Beautify Input and Output (20 min)
  - Colors - `@oclif/cli-ux`
  - Effects
  - Develop a command to list github tasks (use tabs, loader, colors, prompt) with GraphQL [Apollo-Codegen](https://github.com/apollographql/apollo-codegen) in TypeScript

<!-- 16 September -->

- Theory & Practice - `oclif` specifics (50 min)
  - Classes
  - Commands
    - Develop a command to TODO
  - Plugins
    - Develop a plugin to TODO
  - Arguments
  - Shortcuts
  - Output
    - Update a command to show output in `json` format, `--json`
  - Configuration
  - Hooks
  - Develop a hook to commit and push to `git` repository
  - Tests
  - Develop a command and write tests for TODO
  - Shell completion
  - Add a plugin for shell completion

- Theory & Practice - Final (50 min)
  - How to debug a CLI program with IDE?
  - Compile (install file, exe)
  - NodeConf Badge

- Overall - 2:50 hours

<!-- 
- Other topics
  - Architecture 
-->