"use strict";
const { cf: mcf, cdc: mcdc } = require('./options');
const AppyMangoCli = () => {
    const args = process.argv;
    const argv = require('yargs/yargs')(args.slice(2)).argv;
    mcf(argv);
    mcdc(argv);
    return;
};
AppyMangoCli();
