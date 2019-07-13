const { writeFileSync } = require('fs')
const { join } = require('path')

const packageJSON = join(__dirname, '..', 'package.json')
const package = require(packageJSON)

function configure(state) {
  package.quizme = {
    ...state,
  }
  
  writeFileSync(
    packageJSON, 
    JSON.stringify(package, null, 2)
  )
}

function questions(data) {
  configure({ questions: data })
}

function read() {
  const { quizme = {} } = package
  let { questions = [], state = {} } = quizme
  return {
    questions,
    state,
  }
}

function save(state) {
  const { quizme = {} } = package  
  configure({ ...quizme, state: { ...quizme.state, ...state } })
}

module.exports = { 
  configure,
  read,
  save,
  questions,
}

