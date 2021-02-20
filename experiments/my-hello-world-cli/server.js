#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var package_json_1 = require("./package.json");
var isVersion = process.argv.includes('--version') || process.argv.includes('-v');
var HELP_MESSAGE = "Hello from " + package_json_1.name + ", version " + package_json_1.version + "\nUsage:\n--version To show " + package_json_1.name + " version\n--help To show this message\n";
if (isVersion) {
    console.log(package_json_1.name + "@" + package_json_1.version);
}
else {
    console.log(HELP_MESSAGE);
}
