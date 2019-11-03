import {Command} from '@oclif/command'
import cli from 'cli-ux'

export default class Feedback extends Command {
  static description = 'Please share your feedback'

  async run() {
    await cli.open('https://forms.gle/HcTFj5dpHnxNS8PK8')
    this.log('Thank you!')
  }
}
