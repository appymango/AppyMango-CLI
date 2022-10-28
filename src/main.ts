const {cf: mcf, cdc: mcdc} = require('./options');

const AppyMangoCli = () => {
  const args = process.argv;

  const argv = require('yargs/yargs')(args.slice(2)).argv;

  //* Create Default Folder Component
  mcf(argv);

  //* Create Default Configs
  mcdc(argv);

  return;
};

AppyMangoCli();
