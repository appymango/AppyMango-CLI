const defaultOptions = {
  folder: {
    short: 'f',
    config: {
      alias: 'folder',
      describe: 'Creates a folder component with default files',
      type: 'string',
      demandOption: false,
    },
  },
  config: {
    short: 'c',
    config: {
      alias: 'config',
      describe: 'Creates default config files inside your project',
      type: 'boolean',
      demandOption: false,
    },
  },
  template: {
    short: 't',
    config: {
      alias: 'template',
      describe: 'Choose a template to use',
      type: 'string',
      demandOption: false,
      choices: ['t', 'j'],
    },
  },
  framework: {
    short: 'r',
    config: {
      alias: 'framework',
      describe: 'Choose a framework to use',
      type: 'string',
      demandOption: false,
      choices: ['rn', 'r', 'nj'],
    },
  },
  install: {
    short: 'i',
    config: {
      alias: 'install',
      describe: 'Install Dependencies?',
      type: 'boolean',
      demandOption: false,
    },
  },
};

let mappedOptions = {};
for (let key in defaultOptions) {
  mappedOptions = {
    ...mappedOptions,
    [defaultOptions[key as keyof typeof defaultOptions].short]:
      defaultOptions[key as keyof typeof defaultOptions].config,
  };
}

//Wizard
const framework = {
  default: 'rn',
  choices: [
    {name: 'React-Native', value: 'rn'},
    {name: 'React', value: 'r'},
    {name: 'Next Js', value: 'nj'},
  ],
};

const template = {
  default: 't',
  choices: [
    {name: 'JavaScript', value: 'j'},
    {name: 'TypeScript', value: 't'},
  ],
};

module.exports = {defaultOptions, mappedOptions, framework, template};
