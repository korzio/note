import {expect, test} from '@oclif/test'

describe('tweet', () => {
  test
    .stdout()
    .command(['tweet'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['tweet', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
