const { options, createDefaultConfigs, createFolder } = require("./options");

const AppyMangoCli = (args = []) => {
  const declareOptions = options;
  const isArgsAvailable = !!args.slice(2).length;

  // console.log(yargs.argv);
  const argv = require("yargs/yargs")(args.slice(2)).argv;
  const folder = argv.f || argv.folder;
  const config = argv.c || argv.config;

  if (!isArgsAvailable) {
    //TODO: Default wizard
  }

  if (folder) {
    return createFolder(argv);
  }
  if (config) {
    return createDefaultConfigs(argv);
  }

  return;
};

module.exports = { AppyMangoCli };
