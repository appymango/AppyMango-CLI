const boxen = require("boxen");
const chalk = require("chalk");
const logUpdate = require("log-update");

const style = { padding: 1, borderColor: "blue", dimBorder: true };

const box = (message) =>
  console.log(boxen(chalk.blue(`\n${message}\n`), style));

const colorLog = (message) => {};

const successLog = (message) => console.log(chalk.green(`✅ ${message}\n`));

const errorLog = (error, message) =>
  console.log(chalk.red(`❌ ERROR: ${message}\n`, error, "\n"));

const loadingLog = (frame, message) =>
  logUpdate(chalk.blue(`\n\n${frame} ⚡${message}⚡ ${frame}\n\n`));

module.exports = { box, colorLog, errorLog, successLog, loadingLog, style };
