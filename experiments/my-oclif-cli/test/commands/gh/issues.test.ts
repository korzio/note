import {expect, test} from '@oclif/test'

describe('gh:issues', () => {
  test
    .stdout()
    .command(['gh:issues'])
    .nock('https://api.github.com', api => api
      .get('/repos/korzio/note/issues')
      // user is logged in, return their name
      .reply(200, {
        data: [
          {
            number: 1,
            title: 'Hello',
            assignee: {
              login: 'test'
            },
            state: 'open',
            html_url: 'https://github.com/'
          }
        ]
      })
    )

    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  // test
  //   .stdout()
  //   .command(['gh:issues', '--name', 'jeff'])
  //   .it('runs hello --name jeff', ctx => {
  //     expect(ctx.stdout).to.contain('hello jeff')
  //   })
})
