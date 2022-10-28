#! /usr/bin/env node
const{cf:r,cdc:s}=require("./options");(()=>{const c=process.argv,e=require("yargs/yargs")(c.slice(2)).argv;r(e),s(e)})();