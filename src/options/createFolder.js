const yargs = require("yargs");
const chalk = require("chalk");
const boxen = require("boxen");
const path = require("path");
const fs = require("fs-extra");
const figlet = require("figlet");
const { COLOR } = require("../constants");

const createFolder = (argv) => {
  if (argv.folder !== null || argv.f !== null) {
    console.log(
      chalk.hex(COLOR)(
        figlet.textSync("Appy Mango", { horizontalLayout: "full" })
      )
    );

    //TODO: create new folder with 4 files
    // let src = path.resolve(__dirname, "../rn-typescript");
    let dest = process.cwd();

    try {
      // fs.copySync(src, dest, { overwrite: true });
      chalk.green("Generated Config files successfully!");
    } catch (err) {
      console.error("ERROR: Generating config files", err);
    }

    return;
  }

  if (argv.folder === null && argv.f === null) {
    yargs.showHelp();
    return;
  }
};

module.exports = { createFolder };
