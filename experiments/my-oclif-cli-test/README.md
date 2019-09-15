my-oclif-cli-test
=================



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/my-oclif-cli-test.svg)](https://npmjs.org/package/my-oclif-cli-test)
[![Downloads/week](https://img.shields.io/npm/dw/my-oclif-cli-test.svg)](https://npmjs.org/package/my-oclif-cli-test)
[![License](https://img.shields.io/npm/l/my-oclif-cli-test.svg)](https://github.com/korzio/my-oclif-cli-test/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g my-oclif-cli-test
$ my-oclif-cli-test COMMAND
running command...
$ my-oclif-cli-test (-v|--version|version)
my-oclif-cli-test/0.0.0 darwin-x64 node-v8.16.0
$ my-oclif-cli-test --help [COMMAND]
USAGE
  $ my-oclif-cli-test COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`my-oclif-cli-test hello [FILE]`](#my-oclif-cli-test-hello-file)
* [`my-oclif-cli-test help [COMMAND]`](#my-oclif-cli-test-help-command)

## `my-oclif-cli-test hello [FILE]`

describe the command here

```
USAGE
  $ my-oclif-cli-test hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ my-oclif-cli-test hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/korzio/my-oclif-cli-test/blob/v0.0.0/src/commands/hello.ts)_

## `my-oclif-cli-test help [COMMAND]`

display help for my-oclif-cli-test

```
USAGE
  $ my-oclif-cli-test help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
