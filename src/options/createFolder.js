const chalk = require("chalk");
const path = require("path");
const fs = require("fs-extra");
const logUpdate = require("log-update");
const { componentWizard } = require("../wizards");

const frames = ["-", "\\", "|", "/"];
let index = 0;

const createFolder = async (argv) => {
  if (argv.c) {
    return;
  }
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
      fs.copySync(src, dest, { overwrite: true });
      console.log(chalk.green("\n✅ Generated Config files successfully!"));

      loading = setInterval(() => {
        const frame = frames[(index = ++index % frames.length)];
        logUpdate(
          chalk.blue(`\n\n${frame} ⚡Creating Component Folder⚡ ${frame}\n\n`)
        );
      }, 80);

      console.log(chalk.green("✅ Component folder created successfully!\n"));
    } catch (err) {
      console.log(
        chalk.red("❌ ERROR: Creating component folder\n", err, "\n")
      );
    }
    //Clear loading
    loading && clearInterval(loading);

    return;
  }
};

module.exports = { createFolder };
