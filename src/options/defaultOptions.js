const defaultOptions = {
  folder: {
    short: "f",
    config: {
      alias: "folder",
      describe: "Creates a folder component with default files",
      type: "string",
      demandOption: false,
    },
  },
  config: {
    short: "c",
    config: {
      alias: "config",
      describe: "Creates default config files inside your project",
      type: "boolean",
      demandOption: false,
    },
  },
};

const framework = {
  default: "rn",
  choices: [
    { name: "React-Native", value: "rn" },
    { name: "React", value: "r" },
    { name: "Next Js", value: "nj" },
  ],
};

const template = {
  default: "t",
  choices: [
    { name: "JavaScript", value: "j" },
    { name: "TypeScript", value: "t" },
  ],
};

module.exports = { defaultOptions, framework, template };
