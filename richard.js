const {Discord,Client,MessageEmbed,Collection} = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });

///////////////// GLOBALS /////////////////
const conf = global.conf = require("./src/Configs/Config.json");
client.login(conf.token).catch(err => err.console.log("token hatalı knk"))
//////////////// GLOBALS /////////////////
const Veritabani = require("fresh.db");
let roledb = global.roledb = new Veritabani({name:"roledb", folderPath:__dirname + "/src/Models"});
/////////////////// HANDLER ///////////////////
  const fs = require("fs");
  fs.readdir("./src/Events", (err, files) => {
    if(err) return console.error(err);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
      files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./src/Events/${file}`);
    if(!prop.config) return;
        client.on(prop.config.name, prop);
        });
      });
/////////////////// HANDLER ///////////////////
