#! /usr/bin/env node
const{cf:mcf,cdc:mcdc}=require("./options"),AppyMangoCli=()=>{const c=process.argv,r=require("yargs/yargs")(c.slice(2)).argv;mcf(r),mcdc(r)};AppyMangoCli();