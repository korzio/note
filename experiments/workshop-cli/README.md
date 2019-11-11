workshop-cli
============

NodeConf EU 2019 CLI in TypeScript Workshop

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/workshop-cli.svg)](https://npmjs.org/package/workshop-cli)
[![Downloads/week](https://img.shields.io/npm/dw/workshop-cli.svg)](https://npmjs.org/package/workshop-cli)
[![License](https://img.shields.io/npm/l/workshop-cli.svg)](https://github.com/korzio/workshop-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli-in-ts
$ workshop COMMAND
running command...
$ workshop (-v|--version|version)
cli-in-ts/1.0.3 darwin-x64 node-v8.16.0
$ workshop --help [COMMAND]
USAGE
  $ workshop COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`workshop feedback`](#workshop-feedback)
* [`workshop go`](#workshop-go)
* [`workshop hello`](#workshop-hello)
* [`workshop help [COMMAND]`](#workshop-help-command)
* [`workshop slack`](#workshop-slack)

## `workshop feedback`

Please share your feedback

```
USAGE
  $ workshop feedback
```

_See code: [src/commands/feedback.ts](https://github.com/korzio/note/tree/master/experiments/workshop-cli/blob/v1.0.3/src/commands/feedback.ts)_

## `workshop go`

Practice Exercise

```
USAGE
  $ workshop go
```

_See code: [src/commands/go.ts](https://github.com/korzio/note/tree/master/experiments/workshop-cli/blob/v1.0.3/src/commands/go.ts)_

## `workshop hello`

Welcome to the Mastering CLI in TypeScript workshop!

```
USAGE
  $ workshop hello

DESCRIPTION
  Follow the agenda on https://korzio.github.io/
  And use CLI commands to pass practical exercises
```

_See code: [src/commands/hello.ts](https://github.com/korzio/note/tree/master/experiments/workshop-cli/blob/v1.0.3/src/commands/hello.ts)_

## `workshop help [COMMAND]`

display help for workshop

```
USAGE
  $ workshop help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `workshop slack`

Show the Slack Webhook

```
USAGE
  $ workshop slack
```

_See code: [src/commands/slack.ts](https://github.com/korzio/note/tree/master/experiments/workshop-cli/blob/v1.0.3/src/commands/slack.ts)_
<!-- commandsstop -->
