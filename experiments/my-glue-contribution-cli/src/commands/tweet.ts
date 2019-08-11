import { GluegunToolbox } from 'gluegun'

const Twitter = require('twitter')
 
const client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
})
 
module.exports = {
  name: 'tweet',
  alias: ['t'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      print: { info },
    } = toolbox

    info(`test`)

    client.post('statuses/update', { status: 'I am a tweet' }, function(error, tweet) {
      if (error) {
        info(error)
        return
      }

      info(tweet)
    })
  },
}
