my-tsc-watch
============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/my-tsc-watch.svg)](https://npmjs.org/package/my-tsc-watch)
[![Downloads/week](https://img.shields.io/npm/dw/my-tsc-watch.svg)](https://npmjs.org/package/my-tsc-watch)
[![License](https://img.shields.io/npm/l/my-tsc-watch.svg)](https://github.com/korzio/my-tsc-watch/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g my-tsc-watch
$ my-tsc-watch COMMAND
running command...
$ my-tsc-watch (-v|--version|version)
my-tsc-watch/0.0.0 darwin-x64 node-v12.15.0
$ my-tsc-watch --help [COMMAND]
USAGE
  $ my-tsc-watch COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`my-tsc-watch hello [FILE]`](#my-tsc-watch-hello-file)
* [`my-tsc-watch help [COMMAND]`](#my-tsc-watch-help-command)

## `my-tsc-watch hello [FILE]`

describe the command here

```
USAGE
  $ my-tsc-watch hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ my-tsc-watch hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/korzio/my-tsc-watch/blob/v0.0.0/src/commands/hello.ts)_

## `my-tsc-watch help [COMMAND]`

display help for my-tsc-watch

```
USAGE
  $ my-tsc-watch help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_
<!-- commandsstop -->
