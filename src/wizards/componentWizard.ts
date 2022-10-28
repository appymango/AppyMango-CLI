const inquirers = require('inquirer');
const {template: to, framework: fo} = require('../options/defaultOptions');
const {box: wizardBox} = require('../logs');

const componentWizard = async (argv: {f: boolean; folder: string}) => {
  const folderName = argv.f || argv.folder;

  wizardBox('Wizard to create default component folder');

  const questions = [];

  if (!folderName || typeof folderName === 'boolean') {
    questions.push({
      type: 'string',
      name: 'folderName',
      message: 'Enter the Component name',
      default: 'Component',
    });
  }

  questions.push({
    type: 'list',
    name: 'framework',
    message: 'Please choose which project framework to use',
    choices: fo.choices,
    default: fo.default,
  });

  questions.push({
    type: 'list',
    name: 'template',
    message: 'Please choose which project template to use',
    choices: to.choices,
    default: to.default,
  });

  const answers = await inquirers.prompt(questions);

  return answers;
};

module.exports = componentWizard;
