const { createDefaultConfigs, createFolder, wizard } = require("./options");

const AppyMangoCli = (args = []) => {
  const isArgsAvailable = !!args.slice(2).length;

  // console.log(yargs.argv);
  const argv = require("yargs/yargs")(args.slice(2)).argv;
  const folder = argv.f || argv.folder;
  const config = argv.c || argv.config;

  if (!isArgsAvailable) {
    //TODO: Default wizard
  }

  //* Create Default Folder Component
  if (folder) {
    return createFolder(argv);
  }
  //* Create Default Configs
  if (config) {
    return createDefaultConfigs(argv);
  }

  wizard();

  return;
};

module.exports = { AppyMangoCli };
