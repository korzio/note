my-oclif
========

A markdown notes CLI example

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/my-oclif.svg)](https://npmjs.org/package/my-oclif)
[![Downloads/week](https://img.shields.io/npm/dw/my-oclif.svg)](https://npmjs.org/package/my-oclif)
[![License](https://img.shields.io/npm/l/my-oclif.svg)](https://github.com/articles/my-oclif/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g my-oclif
$ my-oclif COMMAND
running command...
$ my-oclif (-v|--version|version)
my-oclif/1.0.0 darwin-x64 node-v8.16.0
$ my-oclif --help [COMMAND]
USAGE
  $ my-oclif COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`my-oclif add [FILE]`](#my-oclif-add-file)
* [`my-oclif hello [FILE]`](#my-oclif-hello-file)
* [`my-oclif help [COMMAND]`](#my-oclif-help-command)

## `my-oclif add [FILE]`

describe the command here

```
USAGE
  $ my-oclif add [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/add.ts](https://github.com/korzio/my-oclif/blob/v1.0.0/src/commands/add.ts)_

## `my-oclif hello [FILE]`

describe the command here

```
USAGE
  $ my-oclif hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ my-oclif hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/korzio/my-oclif/blob/v1.0.0/src/commands/hello.ts)_

## `my-oclif help [COMMAND]`

display help for my-oclif

```
USAGE
  $ my-oclif help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
