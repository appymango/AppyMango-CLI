const { createDefaultConfigs, createFolder } = require("./options");
const { configWizard } = require("./wizards");

const AppyMangoCli = (args = []) => {
  const isArgsAvailable = !!args.slice(2).length;

  const argv = require("yargs/yargs")(args.slice(2)).argv;

  //* Create Default Folder Component
  createFolder(argv);

  //* Create Default Configs
  createDefaultConfigs(argv);

  return;
};

module.exports = { AppyMangoCli };