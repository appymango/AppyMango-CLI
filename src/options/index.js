const yargs = require("yargs");
const { usage } = require("./usage");
const { createDefaultConfigs } = require("./createDefaultConfigs");
const { createFolder } = require("./createFolder");
const { wizard } = require("./wizard");
const { defaultOptions } = require("./defaultOptions");

const options = yargs
  .usage(usage)
  .option(defaultOptions.folder.short, defaultOptions.folder.config)
  .option(defaultOptions.config.short, defaultOptions.config.config)
  .help(true).argv;

module.exports = {
  options,
  createFolder,
  createDefaultConfigs,
  wizard,
};
