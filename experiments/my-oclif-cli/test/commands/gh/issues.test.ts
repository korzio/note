import {expect, test} from '@oclif/test'

describe('gh:issues', () => {
  test
    .nock('https://api.github.com', api => api
      .get('/repos/korzio/note/issues')
      .reply(200, [
        {
          number: 'Number:1',
          title: 'Title:Hello',
          assignee: {
            login: 'Assignee.login:test'
          },
          state: 'open',
          html_url: 'HtmlUrl:https://github.com/'
        }
      ])
    )
    .stdout({ print: true })
    .command(['gh:issues'])
    .it('should format the table', ctx => {
      expect(ctx.stdout)
        .to.contain('Number:1')
        .and.to.contain('Title:Hello')
        .and.to.contain('Assignee.login:test')
        .and.to.contain('open')
        .and.to.contain('HtmlUrl:https://github.com/')
    })
})
