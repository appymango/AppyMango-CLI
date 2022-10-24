const chalk = require("chalk");
const boxen = require("boxen");
const figlet = require("figlet");
const { defaultOptions } = require("./defaultOptions");
const { CLI_NAME, COLOR } = require("../constants");

const style = { padding: 1, borderColor: "blue", dimBorder: true };

//TODO: Make mapped logs
const usage = chalk.hex(COLOR)(
  console.log(
    chalk.hex(COLOR)(
      figlet.textSync("Appy Mango", { horizontalLayout: "full" })
    ),
    "\n"
  ),
  `\nUsage: ${CLI_NAME} -${defaultOptions.folder.short} <Folder Name>`,
  `\nUsage: ${CLI_NAME} -${defaultOptions.config.short} <Framework?> <Template?> <Install?>\n` +
    boxen(
      chalk.blue(
        `\n-${defaultOptions.folder.short} : ${defaultOptions.folder.config.describe}\n`,

        `\n-${defaultOptions.config.short} : ${defaultOptions.config.config.describe}\n`
      ),
      style
    ) +
    "\n"
);

module.exports = { usage };

// --Framework Choices: "-rn","-r","-nj" (React-Native, React, Next Js)\n--Template Choices: "-j", "-t" (Javascript, Typescript)
