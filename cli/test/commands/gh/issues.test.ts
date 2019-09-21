import {expect, test} from '@oclif/test'

describe('gh:issues', () => {
  test
    .stdout()
    .command(['gh:issues'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['gh:issues', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
