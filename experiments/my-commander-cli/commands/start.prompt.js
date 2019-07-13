const { questions: questionsFile } = require('../package.json')
const questions = require(questionsFile)

const { promisify } = require('util')
const prompt = require('prompt')
const get = promisify(prompt.get)

function start() {
  prompt.start()
  
  get(
    questions
      .map(({ question }, i) => ({ name: `${i}`, description: question }))
  )
    .then((result) => {
      console.log('Command-line input received:')
      console.log(JSON.stringify(result))
    })
}

module.exports = start