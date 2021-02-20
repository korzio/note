my-tsc
======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/my-tsc.svg)](https://npmjs.org/package/my-tsc)
[![Downloads/week](https://img.shields.io/npm/dw/my-tsc.svg)](https://npmjs.org/package/my-tsc)
[![License](https://img.shields.io/npm/l/my-tsc.svg)](https://github.com/korzio/my-tsc/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g my-tsc
$ my-tsc COMMAND
running command...
$ my-tsc (-v|--version|version)
my-tsc/0.0.0 darwin-x64 node-v13.14.0
$ my-tsc --help [COMMAND]
USAGE
  $ my-tsc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`my-tsc hello [FILE]`](#my-tsc-hello-file)
* [`my-tsc help [COMMAND]`](#my-tsc-help-command)

## `my-tsc hello [FILE]`

describe the command here

```
USAGE
  $ my-tsc hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ my-tsc hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/korzio/my-tsc/blob/v0.0.0/src/commands/hello.ts)_

## `my-tsc help [COMMAND]`

display help for my-tsc

```
USAGE
  $ my-tsc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_
<!-- commandsstop -->
