const EventEmitter = require('events')
const { readFileSync, writeFileSync } = require('fs')
const { basename } = require('path')

const unified = require('unified')
const markdown = require('remark-parse')
const stringify = require('remark-stringify')

const visit = require('./visit')

module.exports = (filePath, process) => {
  const file = readFileSync(filePath)

  async function* inOrderPrompts(prompts) {
    let done
    for (const prompt of prompts) {
      done = await process(...prompt)
      yield done
    }
  }
  
  async function iteratePrompts(prompts) {
    let doneOuter
    for await (let done of inOrderPrompts(prompts)) {
      doneOuter = done
    }
  
    doneOuter()
  }  

  const events = new EventEmitter()
  events.on('prompt', planNext)

  // TODO refactor for events to iterators without timeout
  const promptsQueue = []
  let timeout
  function planNext() {
    promptsQueue.push([...arguments])

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      iteratePrompts(promptsQueue)
    }, 1e3)
  }

  unified()
    .use(markdown)
    .use(visit(events))
    .use(stringify)
    .process(file, function(err, file) {
      if (err) throw err

      console.log(`Updating ${basename(filePath)} ...`)
      writeFileSync(filePath, String(file))

      console.log(`Finished`)
    })
}

