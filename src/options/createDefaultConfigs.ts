const Path = require('path');
const fsExtra = require('fs-extra');
const pkgInstall = require('pkg-install');
const {cW: defaultConfigWizard} = require('../wizards');
const {
  errorLog: eLog,
  successLog: sLog,
  loadingLog: lLog,
  warningLog: wLog,
} = require('../logs');
const {FRAMES: CONFIG_FRAMES} = require('../constants');

let CONFIG_FRAME_INDEX = 0;
const createDefaultConfigs = async (argv: {
  c: boolean;
  r: string;
  i: boolean;
  t: string;
  config: string;
}) => {
  //Exit if No Config flag
  if (!argv.c) {
    return;
  }
  //Generate wizard for Configs
  const {config, template, framework, install} = await defaultConfigWizard(
    argv,
  );

  const templateFolder = template === 't' ? 'typescript' : 'javascript';
  const frameworkFolder =
    framework === 'rn'
      ? 'react-native'
      : framework === 'r'
      ? 'react'
      : 'nextjs';

  const isAllArgsAvailable = !!(config && template && framework && install);

  if (isAllArgsAvailable) {
    let src = Path.resolve(
      __dirname,
      `../../templates/${frameworkFolder}/${templateFolder}`,
    );
    let dest = process.cwd();
    let srcDependencies = Path.resolve(
      __dirname,
      `../../dependencies/${frameworkFolder}/${templateFolder}/dependencies.js`,
    );

    //Dependencies to Install
    const {dependencies, devDependencies} = require(srcDependencies);

    let loading;

    try {
      fsExtra.copySync(src, dest, {overwrite: true});
      sLog('Generated Config files successfully!');

      loading = setInterval(() => {
        const frame =
          CONFIG_FRAMES[
            (CONFIG_FRAME_INDEX = ++CONFIG_FRAME_INDEX % CONFIG_FRAMES.length)
          ];
        lLog(frame, 'Installing Dependencies');
      }, 80);

      await pkgInstall.install(dependencies, {
        dev: false,
        prefer: 'yarn',
      });

      await pkgInstall.install(devDependencies, {
        dev: true,
        prefer: 'yarn',
      });

      sLog('Dependencies installed successfully!');
      wLog(
        "Don't forget to delete the files if exists - '.prettierrc.js', '.eslintrc.js'",
      );
    } catch (err) {
      eLog(err, 'Generating config files');
    }
    //Clear loading
    loading && clearInterval(loading);

    return;
  }
};

module.exports = createDefaultConfigs;
