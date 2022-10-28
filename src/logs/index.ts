const boxen = require('boxen');
const chalk = require('chalk');
const logUpdate = require('log-update');

const style = {padding: 1, borderColor: 'blue', dimBorder: true};

const box = (message: string) =>
  console.log(boxen(chalk.blue(`\n${message}\n`), style));

const warningLog = (message: string) =>
  console.log(chalk.yellow(`⚠❗ ${message}\n`));

const successLog = (message: string) =>
  console.log(chalk.green(`✅ ${message}\n`));

const errorLog = (error: Error, message: string) =>
  console.log(chalk.red(`❌ ERROR: ${message}\n`, error, '\n'));

const loadingLog = (frame: string, message: string) =>
  logUpdate(chalk.blue(`\n\n${frame} ⚡${message}⚡ ${frame}\n\n`));

module.exports = {box, warningLog, errorLog, successLog, loadingLog, style};
