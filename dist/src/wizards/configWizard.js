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
const inquirer = require('inquirer');
const { box: configBox } = require('../logs');
const { framework: frameworkOptions, template: templateOptions, } = require('../options/defaultOptions');
const configWizard = (argv) => __awaiter(void 0, void 0, void 0, function* () {
    const config = argv.c || argv.config || true;
    const template = argv.t;
    const framework = argv.r;
    const install = argv.i;
    configBox('Wizard to Setup default configs in your project');
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
    const answers = Object.assign({ config,
        template,
        framework,
        install }, (yield inquirer.prompt(questions)));
    return answers;
});
module.exports = configWizard;
