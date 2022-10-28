const yargs = require('yargs');
const {usage: us} = require('./usage');
const {createDefaultConfigs: cdc} = require('./createDefaultConfigs');
const {createFolder: cf} = require('./createFolder');
const {mappedOptions: mo} = require('./defaultOptions');

const options = yargs.usage(us).options(mo).help(true).argv;

module.exports = {
  options,
  cf,
  cdc,
};
