const path = require("path");
const fs = require("fs-extra");
const pkgInstall = require("pkg-install");
const { configWizard } = require("../wizards");
const { errorLog, successLog, loadingLog } = require("../logs");
const { FRAMES } = require("../constants");

let FRAME_INDEX = 0;
const createDefaultConfigs = async (argv) => {
  //Exit if No Config flag
  if (!argv.c) {
    return;
  }
  //Generate wizard for Configs
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
    let srcDependencies = path.resolve(
      __dirname,
      `../../dependencies/${frameworkFolder}/${templateFolder}/dependencies.js`
    );

    //Dependencies to Install
    const { dependencies, devDependencies } = require(srcDependencies);

    let loading;

    try {
      fs.copySync(src, dest, { overwrite: true });
      successLog("Generated Config files successfully!");

      loading = setInterval(() => {
        const frame = FRAMES[(FRAME_INDEX = ++FRAME_INDEX % FRAMES.length)];
        loadingLog(frame, "Installing Dependencies");
      }, 80);

      await pkgInstall.install(dependencies, {
        dev: false,
        prefer: "yarn",
      });

      await pkgInstall.install(devDependencies, {
        dev: true,
        prefer: "yarn",
      });

      successLog("Dependencies installed successfully!");
      warningLog(
        "Don't forget to delete the files if exists - '.prettierrc.js', '.eslintrc.js'"
      );
    } catch (err) {
      errorLog(err, "Generating config files");
    }
    //Clear loading
    loading && clearInterval(loading);

    return;
  }
};

module.exports = { createDefaultConfigs };
