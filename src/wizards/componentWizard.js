const inquirer = require("inquirer");
const boxen = require("boxen");
const chalk = require("chalk");
const {
  template: templateOptions,
  framework: frameworkOptions,
} = require("../options/defaultOptions");

const style = { padding: 1, borderColor: "blue", dimBorder: true };

const componentWizard = async (argv) => {
  const folderName = argv.f || argv.folder;

  console.log(
    boxen(chalk.blue(`\nWizard to create default component folder\n`), style)
  );
  const questions = [];

  if (!folderName || typeof folderName === "boolean") {
    questions.push({
      type: "string",
      name: "folderName",
      message: "Enter the Component name",
      default: "Component",
    });
  }

  questions.push({
    type: "list",
    name: "framework",
    message: "Please choose which project framework to use",
    choices: frameworkOptions.choices,
    default: frameworkOptions.default,
  });

  questions.push({
    type: "list",
    name: "template",
    message: "Please choose which project template to use",
    choices: templateOptions.choices,
    default: templateOptions.default,
  });

  const answers = await inquirer.prompt(questions);

  return answers;
};

module.exports = { componentWizard };
