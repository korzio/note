import {expect, test} from '@oclif/test'

describe('manage:github', () => {
  test
    .stdout()
    .command(['manage:github'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['manage:github', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
