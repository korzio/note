"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
exports.createEnvironmentFlags = (environmentVariables) => (environmentVariables.reduce((memo, [name, envName]) => (Object.assign(Object.assign({}, memo), { [name]: command_1.flags.string({
        description: `Environment variable '${envName}'.\nIt CAN NOT be passed as a flag`,
        env: envName,
    }) })), {}));
