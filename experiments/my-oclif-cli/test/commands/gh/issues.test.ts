import {expect, test} from '@oclif/test'

describe('gh:issues', () => {
  test
    .nock('https://api.github.com', api => api
      .get('/repos/korzio/note/issues')
      .reply(200, [
        {
          number: '33272',
          title: 'Google feedback on TypeScript 3.5 ',
          assignee: {
            login: 'evmar'
          },
          state: 'open',
          html_url: 'https://github.com/microsoft/TypeScript/issues/33272'
        }
      ])
    )
    .stdout({ print: true })
    .command(['gh:issues'])
    .it('should show the issues from github', ctx => {
      expect(ctx.stdout)
        .to.contain('33272')
        .and.to.contain('Google feedback on TypeScript 3.5')
        .and.to.contain('evmar')
        .and.to.contain('open')
        .and.to.contain('https://github.com/microsoft/TypeScript/issues/33272')
    })
})
