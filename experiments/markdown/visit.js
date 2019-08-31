// aka command utils
const EventEmitter = require('events')
const visit = require('unist-util-visit')

module.exports = () => (tree) => new Promise((resolve) => {
  const events = new EventEmitter()
  let timeout
  const planResolve = () => {
    timeout && timeout.unref()
    timeout = setTimeout(resolve, 1000)
  }
  
  events.on('inquirer', ({ value: text }, node) => {
    console.log(arguments)
    console.log(`${text} \n${node}`)
    // modify nodes
    setTimeout(() => { 
      node.checked = true
      planResolve()
    }, 500)
  })

  // TODO promisify
  visit(tree, 'list', node => {
    visit(node, 'listItem', (node) => {
      visit(node, 'text', (textNode) => {
        const text = textNode.value ? textNode.value.trim() : ''
        // TODO comments to log
        // processing text
        events.emit('inquirer', textNode, node)
        // TODO does it show a syncronous / asyncronous prompt functionality?
      })
    })
  })
})

// module.exports = () => (tree, file, nextOut) => {
// visit(tree, 'list', node => {
//   visit(node, 'listItem', function (node) {
//     module.exports.next = next

//     visit(node, 'text', function (textNodeIn) {
//       const text = textNode.value ? textNode.value.trim() : ''
//     })
//   })
// })

//   return new Promise(() => {})
// }

// async function get(n) {
//   return new Promise(r => setTimeout(() => r(n), n * 100))
// }

// async function* asyncGenerator(arr) {
//   let anyResolve

//   arr.map(get).forEach(async request => {
//     const anyResult = await request
//     anyResolve(anyResult)
//   })

//   while(true) {
//     yield await new Promise((resolve) => {
//       anyResolve = resolve
//     })
//   }
// }

// async function* inOrderRequests(urls) {
//   for (const url of urls) {
//     const response = await fetch(url)
//     const text = await response.text()
//     yield text
//   }
// }

// (async function() {
//   for await (let num of asyncGenerator([4, 3, 2, 1, 0])) {
//     console.log(num)
//   }
// })()