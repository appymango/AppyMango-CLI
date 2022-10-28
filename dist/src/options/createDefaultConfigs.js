"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Path = require('path');
const fsExtra = require('fs-extra');
const pkgInstall = require('pkg-install');
const { cW: defaultConfigWizard } = require('../wizards');
const { errorLog: eLog, successLog: sLog, loadingLog: lLog, warningLog: wLog, } = require('../logs');
const { FRAMES: CONFIG_FRAMES } = require('../constants');
let CONFIG_FRAME_INDEX = 0;
const createDefaultConfigs = (argv) => __awaiter(void 0, void 0, void 0, function* () {
    if (!argv.c) {
        return;
    }
    const { config, template, framework, install } = yield defaultConfigWizard(argv);
    const templateFolder = template === 't' ? 'typescript' : 'javascript';
    const frameworkFolder = framework === 'rn'
        ? 'react-native'
        : framework === 'r'
            ? 'react'
            : 'nextjs';
    const isAllArgsAvailable = !!(config && template && framework && install);
    if (isAllArgsAvailable) {
        let src = Path.resolve(__dirname, `../../../templates/${frameworkFolder}/${templateFolder}`);
        let dest = process.cwd();
        let srcDependencies = Path.resolve(__dirname, `../../../dependencies/${frameworkFolder}/${templateFolder}/dependencies.js`);
        const { dependencies, devDependencies } = require(srcDependencies);
        let loading;
        try {
            fsExtra.copySync(src, dest, { overwrite: true });
            sLog('Generated Config files successfully!');
            loading = setInterval(() => {
                const frame = CONFIG_FRAMES[(CONFIG_FRAME_INDEX = ++CONFIG_FRAME_INDEX % CONFIG_FRAMES.length)];
                lLog(frame, 'Installing Dependencies');
            }, 80);
            yield pkgInstall.install(dependencies, {
                dev: false,
                prefer: 'yarn',
            });
            yield pkgInstall.install(devDependencies, {
                dev: true,
                prefer: 'yarn',
            });
            sLog('Dependencies installed successfully!');
            wLog("Don't forget to delete the files if exists - '.prettierrc.js', '.eslintrc.js'");
        }
        catch (err) {
            eLog(err, 'Generating config files');
        }
        loading && clearInterval(loading);
        return;
    }
});
module.exports = createDefaultConfigs;
