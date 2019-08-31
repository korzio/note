const { readFileSync } = require('fs')

const unified = require('unified')
const markdown = require('remark-parse')
const stringify = require('remark-stringify')

const visit = require('./visit')

unified()
  .use(markdown)
  .use(visit)
  .use(stringify)
  .process(readFileSync(`${__dirname}/test.md`), function(err, file) {
    if (err) throw err
    console.log(file)
  })
  
