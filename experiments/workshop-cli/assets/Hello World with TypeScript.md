## Practice - Hello World with TypeScript
Duration: 20

### Migrate Hello World CLI to TypeScript

```bash
# install typescript globally
# or use npx instead
npm install --global typescript
# initialize typescript compiler project configuration file
tsc --init
# rename js file to ts
mv server.js server.ts
# @types/node 
npm install --save-dev @types/node
# compile project to typescript
tsc
# install cli globally
npm install --global .
# try if cli works
my-hello-world-cli
```

### Troubleshooting

#### `Cannot redeclare block-scoped variable 'name'.ts(2451)`

By default, `TypeScript` uses the `DOM` typings for the global execution environment and the `name` property exists on the global window scope.

There are two easy ways to avoid this problem:

- Use `modules` instead of `commonjs`

Change `require()` to `import ... from ...`.

To import from `json` module add the `resolveJsonModule` `TypeScript` compiler option.

- Don't include `DOM` typings. Add an explicitly empty `lib` array property in the `tsconfig.json` to not include `DOM`

```json
{
  "compilerOptions": {
    "lib": [
      "es2015"
    ]
  }
}
```

![spoiler alert](assets/spoiler-alert.jpg)

### [Hello World CLI in TypeScript](https://github.com/korzio/note/blob/master/experiments/my-cli/server.ts)
