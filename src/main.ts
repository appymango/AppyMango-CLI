const {createDefaultConfigs, createFolder} = require('./options');

const AppyMangoCli = () => {
  const args = process.argv;

  const argv = require('yargs/yargs')(args.slice(2)).argv;

  //* Create Default Folder Component
  createFolder(argv);

  //* Create Default Configs
  createDefaultConfigs(argv);

  return;
};

AppyMangoCli();
