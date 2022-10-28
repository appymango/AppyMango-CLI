const chalks = require('chalk');
const boxens = require('boxen');
const figlet = require('figlet');
const {defaultOptions: dO} = require('./dO');
const {CLI_NAME: CLI, COLOR: CLR} = require('../constants');
const {style: sts} = require('../logs');

const usage = chalks.hex(CLR)(
  console.log(
    chalks.hex(CLR)(figlet.textSync('Appy Mango', {horizontalLayout: 'full'})),
    '\n',
  ),
  `\nUsage: ${CLI} -${dO.folder.short} <Folder Name?>`,
  `\nUsage: ${CLI} -${dO.config.short} <Framework?> <Template?> <Install?>\n` +
    boxens(
      chalks.blue(
        `\n-${dO.folder.short} : ${dO.folder.config.describe}\n`,

        `\n-${dO.config.short} : ${dO.config.config.describe}\n`,
      ),
      sts,
    ) +
    '\n',
);

module.exports = {usage};
