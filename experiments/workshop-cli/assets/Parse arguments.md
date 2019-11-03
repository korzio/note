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
