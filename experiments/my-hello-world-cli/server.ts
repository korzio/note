#!/usr/bin/env node
import { name, version } from './package.json'

const isVersion = process.argv.includes('--version') || process.argv.includes('-v')
const HELP_MESSAGE = `Hello from ${name}, version ${version}
Usage:
--version To show ${name} version
--help To show this message
`

if (isVersion) {
  console.log(`${name}@${version}`)
} else {
  console.log(HELP_MESSAGE)
}
