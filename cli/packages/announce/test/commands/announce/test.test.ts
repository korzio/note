import {expect, test} from '@oclif/test'

describe('announce:test', () => {
  test
    .stdout()
    .command(['announce:test'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['announce:test', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
