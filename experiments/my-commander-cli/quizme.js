#!/usr/bin/env node

const program = require('commander')

const { description, version } = require('./package.json')

const { configure, start } = require('./commands')

program
  .command('configure <url>')
  .description('configure a quiz')
  .action((url) => {
    configure({ questions: require(url) })
  })
  
program
  .command('start')
  .description('start a quiz')
  .action(start)
  
program
  .description(description)
  .version(version, '-v, --version')
  .parse(process.argv)
  
if (!process.argv.slice(2).length) {
  program.outputHelp()
}