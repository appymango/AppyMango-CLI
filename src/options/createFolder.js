const path = require("path");
const fs = require("fs-extra");
const { componentWizard } = require("../wizards");
const { errorLog, successLog, loadingLog } = require("../logs");
const { FRAME_INDEX, FRAMES } = require("../constants");

const createFolder = async (argv) => {
  //Only folder flag or default
  if (argv.c) {
    return;
  }
  //Generate folder wizard
  const { folderName, template, framework } = await componentWizard(argv);

  const templateFolder = template === "t" ? "typescript" : "javascript";
  const frameworkFolder =
    framework === "rn"
      ? "react-native"
      : framework === "r"
      ? "react"
      : "nextjs";

  const isAllArgsAvailable = !!(folderName && template && framework);

  if (isAllArgsAvailable) {
    let src = path.resolve(
      __dirname,
      `../../folder/${frameworkFolder}/${templateFolder}/component`
    );
    let dest = `${process.cwd()}/${folderName}`;

    let loading;

    try {
      successLog("Generated Component files successfully!");

      loading = setInterval(() => {
        const frame = FRAMES[(FRAME_INDEX = ++FRAME_INDEX % FRAMES.length)];
        loadingLog(frame, "Creating Component Folder");
      }, 80);

      fs.copySync(src, dest, { overwrite: true });

      successLog("Component folder created successfully!");
    } catch (err) {
      errorLog(err, "Creating component folder");
    }
    //Clear loading
    loading && clearInterval(loading);

    return;
  }
};

module.exports = { createFolder };
