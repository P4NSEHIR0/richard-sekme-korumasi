const Discord = require("discord.js");

module.exports = async (oldPresence,newPresence) => {

   const platform = Object.keys(newPresence.user.presence.clientStatus);
   const roles = newPresence.member.roles.cache.filter((rchrd) => rchrd.editable && rchrd.name !== "@everyone" && [16,268435456,1073741824,32,2,8,4,8589934592,134217728,536870912,524288,128].some((a) => rchrd.permissions.has(a)));
   const server = client.guilds.cache.get(conf.server);
   if (server.ownerID === newPresence.user.id) return;

   if (platform.find(e => e === "web")) {
      roledb.s.push(`${newPresence.user.id}.roles`, roles.map((rchrd) => rchrd.id));
      await newPresence.member.roles.remove(roles.map((rchrd) => rchrd.id), "Platformunu 'Tarayıcı' olarak değiştirdiği için yetkili rolleri alındı.");
      client.guilds.cache.get(conf.server).channels.cache.get(conf.log).send(new Discord.MessageEmbed().setFooter(conf.footer).setDescription(`${newPresence.user} üyesi platformunu tarayıcı olarak değiştirdi ve üzerindeki bütün yetkili rolleri alındı.`))
   }
   if (platform.find(e => e === "mobile")) {
      const data = await roledb.get(`${newPresence.user.id}.roles`)
      if (!data) return;
        await data.map(rchrd => newPresence.member.roles.add(rchrd, "Platformunu değiştirdiği için yetkili rolleri geri verindi :)"));
        roledb.del(`${newPresence.user.id}.roles`);
        client.guilds.cache.get(conf.server).channels.cache.get(conf.log).send(new Discord.MessageEmbed().setFooter(conf.footer).setDescription(`${newPresence.user} üyesi tarayıcıdan çıktığı için bütün yetkili rolleri geri verildi. :)`));
     }
   if (platform.find(e => e === "desktop")) {
      const data = await roledb.get(`${newPresence.user.id}.roles`)
      if (!data) return;
        await data.map(rchrd => newPresence.member.roles.add(rchrd, "Platformunu değiştirdiği için yetkili rolleri geri verindi :)"));
        roledb.del(`${newPresence.user.id}.roles`);
        client.guilds.cache.get(conf.server).channels.cache.get(conf.log).send(new Discord.MessageEmbed().setFooter(conf.footer).setDescription(`${newPresence.user} üyesi tarayıcıdan çıktığı için bütün yetkili rolleri geri verildi. :)`));
     } else {
   const data = await roledb.get(`${newPresence.user.id}.roles`)
    if (!data) return;
      client.guilds.cache.get(conf.server).channels.cache.get(conf.log).send(new Discord.MessageEmbed().setFooter(conf.footer).setDescription(`${newPresence.user} üyesi tarayıcıda çevrimdışı moduna geçtiği için yetkilerini geri vermedim. :)`));
   }

}; 
module.exports.config = {
    name: "presenceUpdate"
  }