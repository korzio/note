// source config/.tweetrc
const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

client.post(
  'statuses/update', 
  { status: 'Hello World' },
  (error, tweet, response) => {
    console.log(error)
    console.log(tweet)
    console.log(response)
  })
