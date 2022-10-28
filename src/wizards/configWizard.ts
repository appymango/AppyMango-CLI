const inquirer = require('inquirer');
const {box: bo} = require('../logs');
const {
  framework: frameworkOptions,
  template: templateOptions,
} = require('../options/defaultOptions');

const configWizard = async (argv: {
  r: string;
  i: boolean;
  c: boolean;
  t: string;
  config: string;
}) => {
  const config = argv.c || argv.config || true;
  const template = argv.t;
  const framework = argv.r;
  const install = argv.i;

  bo('Wizard to Setup default configs in your project');

  const questions = [];

  if (!framework) {
    questions.push({
      type: 'list',
      name: 'framework',
      message: 'Please choose which project framework to use',
      choices: frameworkOptions.choices,
      default: frameworkOptions.default,
    });
  }

  if (!template) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which project template to use',
      choices: templateOptions.choices,
      default: templateOptions.default,
    });
  }

  if (!install) {
    questions.push({
      type: 'confirm',
      name: 'install',
      message: 'Install Packages?',
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

module.exports = {configWizard};
