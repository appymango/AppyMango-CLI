const chalk = require("chalk");
const boxen = require("boxen");
const figlet = require("figlet");
const { defaultOptions } = require("./index");
const { CLI_NAME, COLOR } = require("../constants");

const style = { padding: 1, borderColor: "green", dimBorder: true };

const usage = chalk.hex(COLOR)(
  figlet.textSync("Appy Mango", { horizontalLayout: "full" }),
  `\nUsage: ${CLI_NAME} -${defaultOptions.folder.short} <Folder Name> \n`,
  `\nUsage: ${CLI_NAME} -${defaultOptions.config.short} \n` +
    boxen(
      chalk.green(
        `\n-${defaultOptions.folder.short} : ${defaultOptions.folder.config.describe}\n`,

        `\n-${defaultOptions.config.short} : ${defaultOptions.config.config.describe}\n`
      ),
      style
    ) +
    "\n"
);

module.exports = { usage };
