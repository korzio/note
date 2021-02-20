#!/usr/bin/env node
import { name, version } from './package.json'

const isVersion = process.argv.includes('--version') || process.argv.includes('-v')
const HELP_MESSAGE = `Hello ${name}@${version} with TS

--help To show help message
--version To show ${name} version
`

if (isVersion) {
  console.log(`${name}@${version}`)
} else {
  console.log(HELP_MESSAGE)
}