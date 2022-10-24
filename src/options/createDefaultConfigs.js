const chalk = require("chalk");
const boxen = require("boxen");
const path = require("path");
const fs = require("fs-extra");
const pkgInstall = require("pkg-install");
const logUpdate = require("log-update");
const { configWizard } = require("../wizards");

const frames = ["-", "\\", "|", "/"];
let index = 0;

const createDefaultConfigs = async (argv) => {
  const { config, template, framework, install } = await configWizard(argv);

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

    //Dependencies to Install
    const { dependencies, devDependencies } = require(path.resolve(
      __dirname,
      `../../dependencies/${frameworkFolder}/${templateFolder}/dependencies.js`
    ));

    let loading;

    try {
      fs.copySync(src, dest, { overwrite: true });
      console.log(chalk.green("\n✅ Generated Config files successfully!"));

      loading = setInterval(() => {
        const frame = frames[(index = ++index % frames.length)];
        logUpdate(
          chalk.blue(`\n\n${frame} ⚡Installing Dependencies⚡ ${frame}\n\n`)
        );
      }, 80);

      await pkgInstall.install(dependencies, {
        dev: false,
        prefer: "yarn",
      });

      await pkgInstall.install(devDependencies, {
        dev: true,
        prefer: "yarn",
      });

      console.log(chalk.green("✅ Dependencies installed successfully!\n"));
    } catch (err) {
      console.log(chalk.red("❌ ERROR: Generating config files\n", err, "\n"));
    }
    //Clear loading
    loading && clearInterval(loading);

    return;
  }
};

module.exports = { createDefaultConfigs };
