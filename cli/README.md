# Lerna Note CLI

A lerna repostiry for the `note` cli application.

# Install Locally

```bash
npm ci # install dependencies
npm run install:note # install note cli
note # should display help message
```

# Generate package-lock

Instead of `npm ci`, use `npm install`

```bash
npm run clean # clean node_modules
# remove package-lock to generate new file
npm install # install dependencies
```