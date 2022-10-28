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
const inquirers = require('inquirer');
const { template: to, framework: fo } = require('../options/defaultOptions');
const { box: wizardBox } = require('../logs');
const componentWizard = (argv) => __awaiter(void 0, void 0, void 0, function* () {
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
    const answers = yield inquirers.prompt(questions);
    return answers;
});
module.exports = componentWizard;