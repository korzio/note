import {Hook} from '@oclif/config'
import {IncomingWebhook} from '@slack/webhook'

const hook: Hook<'notify'> = async function ({text, url}: any) {
  const webhook = new IncomingWebhook(url)
  await webhook.send({text})

  this.log(`Sent slack notification: ${text}`)
}

export default hook
