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
my-oclif/1.0.0 darwin-x64 node-v8.14.1
$ my-oclif --help [COMMAND]
USAGE
  $ my-oclif COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`my-oclif add NAME`](#my-oclif-add-name)
* [`my-oclif gh:issues [OWNER] [REPO]`](#my-oclif-ghissues-owner-repo)
* [`my-oclif gh:progress [FILE]`](#my-oclif-ghprogress-file)
* [`my-oclif hello [FILE]`](#my-oclif-hello-file)
* [`my-oclif help [COMMAND]`](#my-oclif-help-command)
* [`my-oclif slack TEXT`](#my-oclif-slack-text)
* [`my-oclif slackWithTemplate`](#my-oclif-slackwithtemplate)
* [`my-oclif tweet [TEMPLATE]`](#my-oclif-tweet-template)

## `my-oclif add NAME`

add new note

```
USAGE
  $ my-oclif add NAME

ARGUMENTS
  NAME  note name to add, .md can be omitted

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/add.ts](https://github.com/korzio/my-oclif/blob/v1.0.0/src/commands/add.ts)_

## `my-oclif gh:issues [OWNER] [REPO]`

Get a list of issues

```
USAGE
  $ my-oclif gh:issues [OWNER] [REPO]

ARGUMENTS
  OWNER  [default: korzio] An owner of the repository
  REPO   [default: note] A repository

OPTIONS
  -h, --help                                 show CLI help
  --githubPersonalToken=githubPersonalToken  (required) Environment variable GITHUB_PERSONAL_TOKEN
```

_See code: [src/commands/gh/issues.ts](https://github.com/korzio/my-oclif/blob/v1.0.0/src/commands/gh/issues.ts)_

## `my-oclif gh:progress [FILE]`

describe the command here

```
USAGE
  $ my-oclif gh:progress [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/gh/assignee.ts](https://github.com/korzio/my-oclif/blob/v1.0.0/src/commands/gh/progress.ts)_

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

## `my-oclif slack TEXT`

Send the text to a channel in Slack

```
USAGE
  $ my-oclif slack TEXT

OPTIONS
  -h, --help                         show CLI help
  --slackWebhookUrl=slackWebhookUrl  (required)
```

_See code: [src/commands/slack.ts](https://github.com/korzio/my-oclif/blob/v1.0.0/src/commands/slack.ts)_

## `my-oclif slackWithTemplate`

describe the command here

```
USAGE
  $ my-oclif slackWithTemplate

OPTIONS
  -f, --force
  -h, --help                             show CLI help
  -n, --name=name                        name to print

  --slack_webhook_url=slack_webhook_url  Environment variable 'SLACK_WEBHOOK_URL'.
                                         It CAN NOT be passed as a flag
```

_See code: [src/commands/slackWithTemplate.ts](https://github.com/korzio/my-oclif/blob/v1.0.0/src/commands/slackWithTemplate.ts)_

## `my-oclif tweet [TEMPLATE]`

describe the command here

```
USAGE
  $ my-oclif tweet [TEMPLATE]

ARGUMENTS
  TEMPLATE  [default: status] Template file name to generate tweet from

OPTIONS
  -h, --help                                 show CLI help

  --access_token_key=access_token_key        Environment variable 'TWITTER_ACCESS_TOKEN_KEY'.
                                             It CAN NOT be passed as a flag

  --access_token_secret=access_token_secret  Environment variable 'TWITTER_ACCESS_TOKEN_SECRET'.
                                             It CAN NOT be passed as a flag

  --consumer_key=consumer_key                Environment variable 'TWITTER_CONSUMER_KEY'.
                                             It CAN NOT be passed as a flag

  --consumer_secret=consumer_secret          Environment variable 'TWITTER_CONSUMER_SECRET'.
                                             It CAN NOT be passed as a flag

  --text=text                                Text to tweet
```

_See code: [src/commands/tweet.ts](https://github.com/korzio/my-oclif/blob/v1.0.0/src/commands/tweet.ts)_
<!-- commandsstop -->
