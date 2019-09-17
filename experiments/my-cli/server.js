#!/usr/bin/env node
"use strict";
var _a = require('./package.json'), description = _a.description, name = _a.name, version = _a.version;
var options = process.argv.slice(2);
var VERSION_MESSAGE = name + " " + version;
var HELP_MESSAGE = VERSION_MESSAGE + "\n" + description + "\n\nUsage: \n--help    Help documentation\n--version Installed package version";
if (options.includes('--version')) {
    console.log(VERSION_MESSAGE);
}
else {
    console.log(HELP_MESSAGE);
}
