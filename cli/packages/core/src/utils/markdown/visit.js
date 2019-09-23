// aka command utils
const visit = require('unist-util-visit')

module.exports = (events) => () => (tree) => new Promise((resolve) => {
  // TODO promisify
  visit(tree, 'list', node => {
    visit(node, 'listItem', (node) => {
      visit(node, 'text', (textNode) => {
        // TODO comments to log
        // processing text
        events.emit('prompt', textNode, node, resolve)
        // TODO does it show a syncronous / asyncronous prompt functionality?
      })
    })
  })
})