import {Command} from '@oclif/command'

export default class Slack extends Command {
  static description = 'Show the Slack Webhook'
  static buf = Buffer.from('aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVEwwMzg2V1BOL0JRMzRWREhQVy9DTjg3d2NVYlE4YTkyMmhaZjBaeEgwMVM=', 'base64').toString('utf8')
  async run() {
    this.log(Slack.buf)
  }
}
