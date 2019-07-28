import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      strings: { lowerCase, upperFirst },
      template: { generate },
      print: { info },
      prompt: { ask }
    } = toolbox

    // text input
    const askBranchExample = { type: 'input', name: 'branch', message: 'What would be an example for branch naming convention?' }

    // ask a series of questions
    const { branch } = await ask([askBranchExample])

    const { first: project } = parameters
    const fileName = 'CONTRIBUTING.md'
    const target = `${lowerCase(project)}/${fileName}`

    await generate({
      template: `${fileName}.ejs`,
      target,
      props: { project: upperFirst(project), branch },
    })

    info(`Generated ${fileName} file at ${target}`)
  },
}
