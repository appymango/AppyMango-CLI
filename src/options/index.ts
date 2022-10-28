const yargs = require('yargs');
const cdc = require('./createDefaultConfigs');
const cf = require('./createFolder');
const {usage: us} = require('./usage');
const {mappedOptions: mo} = require('./defaultOptions');

const options = yargs.usage(us).options(mo).help(true).argv;

module.exports = {
  options,
  cf,
  cdc,
};
