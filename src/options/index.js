const yargs = require("yargs");
const { usage } = require("./usage");
const { createDefaultConfigs } = require("./createDefaultConfigs");
const { createFolder } = require("./createFolder");

const defaultOptions = {
  folder: {
    short: "f",
    config: {
      alias: "folder",
      describe: "Creates a folder component with default files",
      type: "string",
      demandOption: false,
    },
  },
  config: {
    short: "c",
    config: {
      alias: "config",
      describe: "Creates default config files inside your project",
      type: "boolean",
      demandOption: false,
    },
  },
};

const options = yargs
  .usage(usage)
  .option(defaultOptions.folder.short, defaultOptions.folder.config)
  .option(defaultOptions.config.short, defaultOptions.config.config)
  .help(true).argv;

module.exports = {
  options,
  defaultOptions,
  createFolder,
  createDefaultConfigs,
};
