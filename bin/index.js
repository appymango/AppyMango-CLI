#! /usr/bin/env node
const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const figlet = require("figlet");
// const fs = require("fs");
const path = require("path");
const fs = require("fs-extra");

const usage = chalk.hex("#FFC942")(
  "\nUsage: mango -f <Folder Name> \n",
  "\nUsage: mango -c \n" +
    boxen(
      chalk.green(
        "\n" + "-f : Creates a folder component with default files" + "\n",
        "\n" + "-c : Creates default config files inside your project" + "\n"
      ),
      { padding: 1, borderColor: "green", dimBorder: true }
    ) +
    "\n"
);

const options = yargs
  .usage(usage)
  .option("f", {
    alias: "folder",
    describe: "Creates a folder component with default files",
    type: "string",
    demandOption: false,
  })
  .option("c", {
    alias: "config",
    describe: "Creates default config files inside your project",
    type: "boolean",
    demandOption: false,
  })
  .help(true).argv;

// console.log(yargs.argv);
const argv = require("yargs/yargs")(process.argv.slice(2)).argv;

if (argv.folder !== null && argv.f !== null) {
  console.log(
    chalk.yellow(figlet.textSync("mango", { horizontalLayout: "full" }))
  );
  let src = path.resolve(__dirname, "../rn-typescript");
  let dest = process.cwd();

  try {
    fs.copySync(src, dest, { overwrite: true });
    console.log("success!");
  } catch (err) {
    console.error(err);
  }

  // fs.copySync(path.resolve(__dirname, "../rn-typescript"), process.cwd(), {
  //   overwrite: true,
  // });

  yargs.showHelp();
  return;
}
if (argv.config == null && argv.c == null) {
  yargs.showHelp();
  //   return;
}

const folder = argv.f || argv.folder;

const config = argv.c || argv.config;

// console.log( language,sentence);
// translate(sentence, { to: language.toLowerCase() })
//   .then((res) => {
// console.log(
//   "\n" +
//     boxen(chalk.green(sentence + "\n\n" + language), {
//       padding: 1,
//       borderColor: "green",
//       dimBorder: true,
//     }) +
//     "\n"
// );
//   })
//   .catch((err) => {
//     console.error(err);
//   });
