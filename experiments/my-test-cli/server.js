#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var package_json_1 = require("./package.json");
var isVersion = process.argv.includes('--version') || process.argv.includes('-v');
var HELP_MESSAGE = "Hello " + package_json_1.name + "@" + package_json_1.version + " with TS\n\n--help To show help message\n--version To show " + package_json_1.name + " version\n";
if (isVersion) {
    console.log(package_json_1.name + "@" + package_json_1.version);
}
else {
    console.log(HELP_MESSAGE);
}
