summary: Hello World CLI in Node
id: hello-world-cli-in-node
categories: codelab,markdown
status: Published 
authors: Alex
Feedback Link: https://github.com/korzio/note/issues/new

# Hello World CLI in Node

---

## package.json
Duration: 5

```json
{
  "name": "my-hello-world-cli",
  "version": "1.0.0",
  "description": "Hello CLI",
  "main": "server.js",
  "bin": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "man" : "./man/doc.1"
}
```

- `main` - exports
- `bin` - make an executable `symlink` inside `PATH`, `./node_modules/.bin/`
- `url` - [`npm bugs`](https://docs.npmjs.com/files/package.json#bugs) feedback on a package 🤗

### Execution

- `shebang` specifies an interpeter in `*nix` systems (also in `Windows`)

```js
#!/usr/bin/env node
```

- `process.argv` contains arguments which a program is called with

![question](assets/question.png)

### What will be an output of running `server.js`?

```javascript
// server.js
console.log(process.argv)
```

```bash
node server.js hello world
```

---

## Windows Specifics
Duration: 5

- `Windows Console` - a program to run applications with text-based interface
- `cmd.exe` or `Command Prompt` - *venerable* Windows Command Processor
- `PowerShell` an extended scripting language and a framework, providing powerful command-line tools for most Windows capabilities and APIs

### Try to run `bash` directly with [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about) (for Windows 10)

[![Bash on Ubuntu on Windows](assets/bash-in-windows.png)](https://blogs.windows.com/windowsdeveloper/2016/03/30/run-bash-on-ubuntu-on-windows/)

- [Learn About Windows Console & Windows Subsystem For Linux (WSL) - Microsoft](https://blogs.msdn.microsoft.com/commandline/learn-about-windows-console-and-windows-subsystem-for-linux-wsl/)

- Environment variables (`HOME` vs `HOMEPATH`)
- Use `path` build-in `Node` module to construct locations
- Running processes

```js
const { spawn } = require('child_process');
const bat = spawn('cmd.exe', ['/c', '"my script.cmd"']);
```

- [shelljs](https://www.npmjs.com/package/shelljs) - cross-platform implementation of `Unix` shell commands written in `Node`

### How to run Node program in Windows?

```bash
%USERPROFILE%/AppData/Roaming/npm
```

When running `npm install -g .` in Windows, `.cmd` extension file is generated along by `npm` to enable `.js` file execution with `Node`

#### `oclif run.cmd` example

```batch
@echo off

node "%~dp0\run" %*
```

- `%*` - will return the remainder of the command line starting at the first command line argument (in Windows NT 4, %* also includes all leading spaces)
- `%~dn` - will return the drive letter of %n (n can range from 0 to 9) if %n is a valid path or file name (no UNC)
- `%~pn` - will return the directory of %n if %n is a valid path or file name (no UNC)

- [Batch files - Command line parameters](https://www.robvanderwoude.com/parameters.php)
- [Spawning .bat and .cmd files on Windows - Official Node Documentation on Child Processes](https://nodejs.org/api/child_process.html#child_process_spawning_bat_and_cmd_files_on_windows)

---

## Practice - Hello World
Duration: 5

### Make the Hello World CLI in Node

```bash
mkdir my-hello-world-cli
cd my-hello-world-cli
npm init
# answer npm questions and check package.json content
echo "console.log('Hello CLI')" > server.js
# check if environment works
npm start
# use bin package.json property to point to server.js
# don't forget to add the shebang 
# #!/usr/bin/env node
# in the top of the server.js file
# install cli globally
npm install --global .
# when execute the CLI in the terminal
my-hello-world-cli
# the result should be in the console
# Hello CLI
```

---

## Practice - Parse arguments
Duration: 10

### Read `package.json` fields - `name`, `version`, and `description`

```json
"name": "my-hello-world-cli",
"version": "1.0.0",
"description": "My First Node.js CLI",
```

### Show help message when user doesn't provide any flags

```bash
my-hello-world-cli

Package description
Package version

Usage: 
--help    Help documentation
--version Installed package version
```

### Show version message when user provides `--version` argument

```bash
my-hello-world-cli --version

my-hello-world-cli 1.0.0
```

![spoiler alert](assets/spoiler-alert.jpg)

### [Hello World CLI in Node](https://github.com/korzio/note/blob/master/experiments/my-cli/index.js)

---

## TypeScript
Duration: 5

*JavaScript that scales.  
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.  
Any browser. Any host. Any OS. Open source.*

![ts](assets/ts.png)

Anders Hejlsberg, 2012 @ Microsoft

### Tools

- `typescript, tsc` - compile to `JavaScript`
- `@types` - types definitions, [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node)
- `ts-node` - *on-the-fly* `TypeScript` execution for `Node`

---

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
