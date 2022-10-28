"use strict";const usageChalk=require("chalk"),usageBoxen=require("boxen"),figlet=require("figlet"),{defaultOptions:dO}=require("./defaultOptions"),{CLI_NAME:CLI,COLOR:CLR}=require("../constants"),{style:sts}=require("../logs"),usage=usageChalk.hex(CLR)(console.log(usageChalk.hex(CLR)(figlet.textSync("Appy Mango",{horizontalLayout:"full"})),"\n"),`\nUsage: ${CLI} -${dO.folder.short} <Folder Name?>`,`\nUsage: ${CLI} -${dO.config.short} <Framework?> <Template?> <Install?>\n`+usageBoxen(usageChalk.blue(`\n-${dO.folder.short} : ${dO.folder.config.describe}\n`,`\n-${dO.config.short} : ${dO.config.config.describe}\n`),sts)+"\n");module.exports={usage:usage};