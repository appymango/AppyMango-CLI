#! /usr/bin/env node
const{cf:mcf,cdc:mcdc}=require("./options"),AppyMangoCli=()=>{const args=process.argv,argv=require("yargs/yargs")(args.slice(2)).argv;mcf(argv),mcdc(argv)};AppyMangoCli();