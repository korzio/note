import { flags } from '@oclif/command';

type EnvironmentVariableDefinition = [string, string]

export const createEnvironmentFlags = (environmentVariables: Array<EnvironmentVariableDefinition>) => (
  environmentVariables.reduce((memo, [name, envName]) => ({ ...memo, [name]: flags.string({
    description: `Environment variable '${envName}'.\nIt CAN NOT be passed as a flag`,
    env: envName,
  })}), {})
)
