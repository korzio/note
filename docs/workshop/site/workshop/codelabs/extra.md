summary: Extra
id: extra
categories: codelab,markdown
status: Published 
authors: Alex
Feedback Link: https://github.com/korzio/note/issues/new

# Extra

---

## Practice - Add Tests to `github:issues` Command
Duration: 30


### Add a test to check the output of the `github:issues` 

```bash
npm test

> my-oclif@1.0.0 test /Users/paulcodiny/Projects/clits/experiments/my-oclif-cli
> nyc --extension .ts mocha --forbid-only "test/commands/github/issues.test.ts"



  github:issues
...

Getting a list of issues... done
Number   Title       Assignee            State Link                        
Number:1 Title:Hello Assignee.login:test open  HtmlUrl:https://github.com/ 
    ✓ should format the table (3305ms)


  1 passing (3s)
...
```


### Update the `package.json`

Basically, for now we can focus only on one test and for it let's update a bit the `package.json`

```json
{
  "scripts": {
    "test": "nyc --extension .ts mocha --forbid-only \"test/commands/github/issues.test.ts\"",
  }
}
```


### Write the test

`1.` Import required dependencies
  
```js
import {expect, test} from '@oclif/test'
```

`2.` Create a `describe` section for the command

```js
describe('github:issues', () => {
  // ...
})
```

`3.` Create a test for the `issues` command 

```js
test
  // ... 
```

`4.` Mock the response from github with the help of `nock` package. Please note, we don't have `data` property in the response. If's automatically created for us by `nock`
    
```js
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
```

`5.` Capture the `stdout` to the variable. Pass `{ print: true }` to simplify debugging. It's not required for your build pipelines (CI/CD) and can be even harmful for your logs 

```js
test
  // nock...
  .stdout({ print: true })
```
 
    
`6.` Next let's run the command. We don't need to provide arguments - for now it will be `korzio/note` 
  
```js
test
  // nock...
  // stdout...
  .command(['github:issues'])
```
    
`7.` After all it's time for the expectations - `oclif` uses `chai` as the expectation library underneath 
```js
test
  // .nock...
  // .stdout...
  // .command...
  .it('should show the issues from github', ctx => {
     expect(ctx.stdout)
       .to.contain('33272')
       .and.to.contain('Google feedback on TypeScript 3.5')
       .and.to.contain('evmar')
       .and.to.contain('open')
       .and.to.contain('https://github.com/microsoft/TypeScript/issues/33272')
   })
```

![spoiler alert](assets/spoiler-alert.jpg)

### [github:issues test](https://github.com/korzio/note/blob/master/experiments/my-oclif-cli/test/commands/gh/issues.test.ts)

---

## Practice - Commands VS Plugins
Duration: 20

- `Command` is a granular functionality
- `Plugin` is a pack of `commands`, `hooks` or other things grouped by semantic reasons

`1.` Move `Github` commands and logic into a new plugin

```bash
oclif plugin manage-github

     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │   Time to build a oclif  │
   `---------´   │  plugin! Version: 1.13.6 │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? npm package name manage-github
? description
? author Alex Korzhikov @korzio
? version 0.0.0
? license MIT
? Select a package manager npm
? TypeScript Yes
? Use tslint (linter for TypeScript) Yes
? Use mocha (testing framework) Yes
```

`2.` Move all the github related project code into a generated plugin

`3.` Update CLI core to be able installing other plugins

Please note - if in the first oclif exercise the CLI was generated as multi, `package.json` should already contain this dependency

```bash
npm i @oclif/plugin-plugins
```

`4.` Test functionality locally by installing the plugin into a core

```bash
my-oclif-cli plugins:link ./manage-github
my-oclif-cli github:assignee
# should still work
```

![spoiler alert](assets/spoiler-alert.jpg)

### [Split project code into plugins](https://github.com/korzio/note/tree/architecture-32/cli)
