const chalk = require("chalk");
const boxen = require("boxen");
const path = require("path");
const fs = require("fs-extra");
const { wizard } = require("./wizard");

const createDefaultConfigs = async (argv) => {
  const { config, template, framework, install } = await wizard(argv);

  const templateFolder = template === "t" ? "typescript" : "javascript";
  const frameworkFolder =
    framework === "rn"
      ? "react-native"
      : framework === "r"
      ? "react"
      : "nextjs";

  const isAllArgsAvailable = !!(config && template && framework && install);

  if (isAllArgsAvailable) {
    let src = path.resolve(
      __dirname,
      `../../templates/${frameworkFolder}/${templateFolder}`
    );
    let dest = process.cwd();

    try {
      fs.copySync(src, dest, { overwrite: true });
      console.log(chalk.green("Generated Config files successfully!"));
    } catch (err) {
      console.log(chalk.red("ERROR: Generating config files", err));
    }

    return;
  }
};

module.exports = { createDefaultConfigs };
