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
