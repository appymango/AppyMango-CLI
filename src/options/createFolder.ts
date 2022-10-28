const path = require('path');
const fs = require('fs-extra');
const {cmW: folderWizard} = require('../wizards');
const {
  errorLog: erLog,
  successLog: suLog,
  loadingLog: loLog,
} = require('../logs');
const {FRAMES: FOLDER_FRAMES} = require('../constants');

let FRAME_INDEX = 0;

const createFolder = async (argv: {c: boolean}) => {
  //Only folder flag or default
  if (argv.c) {
    return;
  }
  //Generate folder wizard
  const {folderName, template, framework} = await folderWizard(argv);

  const templateFolder = template === 't' ? 'typescript' : 'javascript';
  const frameworkFolder =
    framework === 'rn'
      ? 'react-native'
      : framework === 'r'
      ? 'react'
      : 'nextjs';

  const isAllArgsAvailable = !!(folderName && template && framework);

  if (isAllArgsAvailable) {
    let src = path.resolve(
      __dirname,
      `../../folder/${frameworkFolder}/${templateFolder}/component`,
    );
    let dest = `${process.cwd()}/${folderName}`;

    let loading;

    try {
      suLog('Generated Component files successfully!');

      loading = setInterval(() => {
        const frame =
          FOLDER_FRAMES[(FRAME_INDEX = ++FRAME_INDEX % FOLDER_FRAMES.length)];
        loLog(frame, 'Creating Component Folder');
      }, 80);

      fs.copySync(src, dest, {overwrite: true});

      suLog('Component folder created successfully!');
    } catch (err) {
      erLog(err, 'Creating component folder');
    }
    //Clear loading
    loading && clearInterval(loading);

    return;
  }
};

module.exports = createFolder;
