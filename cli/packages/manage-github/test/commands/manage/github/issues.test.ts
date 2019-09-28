import {expect, test} from '@oclif/test'

describe('manage:github:issues', () => {
  test
    .stdout()
    .command(['manage:github:issues'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['manage:github:issues', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
