const inquirer = require("inquirer");
const boxen = require("boxen");
const chalk = require("chalk");
const { framework, template } = require("./defaultOptions");

const style = { padding: 1, borderColor: "blue", dimBorder: true };

const wizard = async () => {
  console.log(
    boxen(
      chalk.blue(`\nWizard to Setup default configs in your project\n`),
      style
    )
  );
  const questions = [];
  //TODO: Add if checks for each config as a flag
  questions.push({
    type: "list",
    name: "framework",
    message: "Please choose which project framework to use",
    choices: framework.choices,
    default: framework.default,
  });

  questions.push({
    type: "list",
    name: "template",
    message: "Please choose which project template to use",
    choices: template.choices,
    default: template.default,
  });

  // if (!options.install) {
  questions.push({
    type: "confirm",
    name: "install",
    message: "Install Dev Packages?",
    default: true,
  });
  // }

  const answers = await inquirer.prompt(questions);
  console.log("🚀 --- wizard --- answers", answers);

  return answers;
};

module.exports = { wizard };
