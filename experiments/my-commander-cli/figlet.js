var figlet = require('figlet')

figlet(` 
New Project
`, function (err, data) {
  if (err) {
    console.log('Something went wrong...')
    console.dir(err)
    return
  }
  console.log(data)
})