const yargs = require("yargs");
const { usage } = require("./usage");
const { createDefaultConfigs } = require("./createDefaultConfigs");
const { createFolder } = require("./createFolder");
const { wizard } = require("./wizard");
const { mappedOptions } = require("./defaultOptions");

const options = yargs.usage(usage).options(mappedOptions).help(true).argv;

module.exports = {
  options,
  createFolder,
  createDefaultConfigs,
  wizard,
};
