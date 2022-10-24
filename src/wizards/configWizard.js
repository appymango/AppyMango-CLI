const inquirer = require("inquirer");
const boxen = require("boxen");
const chalk = require("chalk");
const {
  framework: frameworkOptions,
  template: templateOptions,
} = require("../options/defaultOptions");

const style = { padding: 1, borderColor: "blue", dimBorder: true };

const configWizard = async (argv) => {
  const config = argv.c || argv.config || true;
  const template = argv.t;
  const framework = argv.r;
  const install = argv.i;

  console.log(
    boxen(
      chalk.blue(`\nconfigWizard to Setup default configs in your project\n`),
      style
    )
  );
  const questions = [];

  if (!framework) {
    questions.push({
      type: "list",
      name: "framework",
      message: "Please choose which project framework to use",
      choices: frameworkOptions.choices,
      default: frameworkOptions.default,
    });
  }

  if (!template) {
    questions.push({
      type: "list",
      name: "template",
      message: "Please choose which project template to use",
      choices: templateOptions.choices,
      default: templateOptions.default,
    });
  }

  if (!install) {
    questions.push({
      type: "confirm",
      name: "install",
      message: "Install Dev Packages?",
      default: true,
    });
  }

  const answers = {
    config,
    template,
    framework,
    install,
    ...(await inquirer.prompt(questions)),
  };

  return answers;
};

module.exports = { configWizard };
