const inquirer = require('inquirer')

const configure = require('./configure')
const { read, save } = configure
let { questions, state: answered } = read()

questions = questions
  .map(({ question, options }, i) => ({ 
    type: 'list',
    message: question,
    choices: options,
    when(state){
      if (answered.hasOwnProperty(i)) {
        return false
      }
      
      save(state)
      return true
    },
    name: `${i}`
  }))

function start() {
  inquirer.prompt(questions)
    .then((result) => {
      save(result)
      console.log(`Your asnwers: ${JSON.stringify(read().state)}`)
      console.log('Thanks for participating!')
    })
}

module.exports = { 
  start,
}