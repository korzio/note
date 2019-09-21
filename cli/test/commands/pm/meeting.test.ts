import {expect, test} from '@oclif/test'

describe('pm:meeting', () => {
  test
    .stdout()
    .command(['pm:meeting'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['pm:meeting', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
