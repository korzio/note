summary: Hello World CLI in Node
id: hello-world-cli-in-node
categories: codelab,markdown
status: Published 
authors: Alex
Feedback Link: https://alex.io

# Hello World CLI in Node

---

## package.json
Duration: 1

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
- `url` - [`npm bugs`](https://docs.npmjs.com/files/package.json#bugs) - feedback on a package 🤗

---

## Execution
Duration: 1

- `shebang` specifies an interpeter in `*nix` systems

```js
#!/usr/bin/env node
```

- `process.argv` contains arguments which a program is called with

### What will be an output of running `server.js`?

```javascript
// server.js
console.log(process.argv)
```

```bash
node server.js hello world
```

---

## Practice - Hello World
Duration: 1

### Make the Hello World CLI in Node

```bash
mkdir my-hello-world-cli
npm init
echo "console.log('Hello CLI')" > server.js
npm start
npm install --global .
```

---

## Practice - Parse arguments
Duration: 1

### Parse arguments to show help message and version

```bash
my-hello-world-cli

Package description
Package version

Usage: 
--help    Help documentation
--version Installed package version
```

---

## Demo 
Duration: 1

## Hello World CLI in Node

---

## TypeScript
Duration: 1

![ts](assets/ts.png)

> JavaScript that scales.  
> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.  
> Any browser. Any host. Any OS. Open source.

- Anders Hejlsberg, 2012 @ Microsoft

### Tools

- `typescript, tsc` - compile to `JavaScript`
- `tslint` - static code analysis, on a way to `eslint`
- `@types` - types definitions, [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node)
- `ts-node` - on-the-fly TypeScript execution for `Node`

---

## Practice - Hello World with TypeScript
Duration: 1

### Make Hello World CLI with TypeScript

```bash
npm install -g typescript
tsc --init
mv server.js server.ts
npm install --save-dev @types/node
tsc
my-hello-world-cli
```

### Troubleshooting

TODO change target or lib (to []) in tsconfg
