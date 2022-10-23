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

module.exports = { defaultOptions };
