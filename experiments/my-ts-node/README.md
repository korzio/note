my-ts-node
==========

ts-node

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/my-ts-node.svg)](https://npmjs.org/package/my-ts-node)
[![Downloads/week](https://img.shields.io/npm/dw/my-ts-node.svg)](https://npmjs.org/package/my-ts-node)
[![License](https://img.shields.io/npm/l/my-ts-node.svg)](https://github.com/korzio/my-ts-node/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g my-ts-node
$ my-ts-node COMMAND
running command...
$ my-ts-node (-v|--version|version)
my-ts-node/0.0.0 darwin-x64 node-v14.4.0
$ my-ts-node --help [COMMAND]
USAGE
  $ my-ts-node COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`my-ts-node hello [FILE]`](#my-ts-node-hello-file)
* [`my-ts-node help [COMMAND]`](#my-ts-node-help-command)

## `my-ts-node hello [FILE]`

describe the command here

```
USAGE
  $ my-ts-node hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ my-ts-node hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/korzio/my-ts-node/blob/v0.0.0/src/commands/hello.ts)_

## `my-ts-node help [COMMAND]`

display help for my-ts-node

```
USAGE
  $ my-ts-node help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
