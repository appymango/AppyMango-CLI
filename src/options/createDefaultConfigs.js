const yargs = require("yargs");
const chalk = require("chalk");
const boxen = require("boxen");
const path = require("path");
const fs = require("fs-extra");
const { COLOR } = require("../constants");
const figlet = require("figlet");

const createDefaultConfigs = (argv) => {
  if (argv.config !== null || argv.c !== null) {
    console.log(
      chalk.hex(COLOR)(
        figlet.textSync("Appy Mango", { horizontalLayout: "full" })
      )
    );

    let src = path.resolve(__dirname, "../rn-typescript");
    let dest = process.cwd();

    try {
      fs.copySync(src, dest, { overwrite: true });
      chalk.green("Generated Config files successfully!");
    } catch (err) {
      console.error("ERROR: Generating config files", err);
    }

    return;
  }

  if (argv.config === null && argv.c === null) {
    yargs.showHelp();
    return;
  }
};

module.exports = { createDefaultConfigs };
