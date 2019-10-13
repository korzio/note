summary: CLI In Node
id: cli-in-node
categories: codelab,markdown
status: Published 
authors: Alex
Feedback Link: https://github.com/korzio/note/issues/new

---

## CLI In Node
Duration: 1

> A command-line interface or command language interpreter (CLI), is a means of interacting with a computer program where the user (or client) issues commands to the program in the form of lines of text (command lines). A program which handles the interface is called a command language interpreter or shell.

> Shell is a **program** that takes commands from the keyboard and gives them to the operating system to perform

- [SS64 Command line reference](https://ss64.com/)

```bash
cat /etc/shells   # List of shells
cat /etc/passwd   # Default shell
```

© Wiki

---

## Porqué?
Duration: 1

### Which CLI program
- Do you like?
- Do you use the most?

![question](assets/question.png)
  
- Why `CLI`?
- Why `JavaScript`?
- Why `Node`?
- Why `TypeScript`?

---

## Why CLI?
Duration: 1

### ➕

- **Tools** for
  - manipulating OS objects,
  - improving **developer experience** and
  - task automation
- *which allow to gain even more by combining them!*
- *It's fun!*

### ➖?

---

## Why Node?
Duration: 1

### ➕

- Practice with `JavaScript`
  - `JavaScript` tools are the best for `JavaScript` & FrontEnd
- [Atwood's Law](https://blog.codinghorror.com/the-principle-of-least-power/) - *any application that can be written in JavaScript, will eventually be written in JavaScript*
- Fast and easy to develop
- Cross Platform
- A rich infrastructure with all kinds of packages and libraries with `npm` 
- Modules & plug'n'play

### ➖?
- `Node` need to be installed?!

---

## [Why TypeScript?](https://itnext.io/why-use-typescript-good-and-bad-reasons-ccd807b292fb)
Duration: 1

### ➕

- Types for unifying protocols and interfaces, checked statically Ahead Of Time
  - According to [To Type or Not to Type: Quantifying Detectable Bugs in JavaScript
  by Zheng Gao, Christian Bird, Christian Bird](http://ttendency.cs.ucl.ac.uk/projects/type_study/documents/type_study.pdf) study, using TypeScript results in 15% decrease of bugs
  - Focus on API, not on implementation details
  
- OOP patterns and abstractions
- IDE help & support for writing code saves developers time

### ➖

- Takes more time to develop and maintain projects

---

## Principles Question
Duration: 1

![question](assets/question_ru.png)

### Which basic principles of designing a `CLI` program you might mention?

```bash
npx cowsay hello cow
 ___________
< hello cow >
 -----------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

---

## Examples
Duration: 1

![NPM](assets/icons/trim/npm.png)
![git](assets/git.png)

### Principles

- Understand what's happening
  - `help`
  - `version`
- Output to the right channel 
  - Logs and data for `stdout`, errors for `stderr`
- Exit with `process.exit(code)` 
  - Retrieve with `$?` in `shell`
- `Do One Thing and Do It Well`

### Top

- `git`
- `npm`

<!-- 
### Bad

TODO -->

### Generators & Developer Experience

- yeoman
- create-react-app
- angular-cli
