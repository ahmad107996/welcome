const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();

client.on("guildMemberAdd", member => {
  if(member.guild.id === "274665615833432064") {  
const channel = member.guild.channels.find('id', '450468402650284033'); 
if (!channel) return;
channel.send(`<@${member.user.id}> *Welcome To Server Family Royal King...!*`)
}}); 
client2.on("guildMemberAdd", member => {
  if(member.guild.id === "274665615833432064") {  
const channel = member.guild.channels.find('id', '450468402650284033'); 
if (!channel) return;
channel.send(`<@${member.user.id}> *Welcome To Server Family Royal King...!*`)
}}); 
client3.on("guildMemberAdd", member => {
  if(member.guild.id === "274665615833432064") {  
const channel = member.guild.channels.find('id', '450468402650284033'); 
if (!channel) return;
channel.send(`<@${member.user.id}> *Welcome To Server Family Royal King...!*`)
}}); 

const client4 = new Discord.Client();


client4.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by BadGuY');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client4.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client4.user.setStatus("dnd");
});


const devs = ["348953140315291649"];
const adminprefix = ["."];
client4.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith('(prefix))ply')) {
    client4.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === ("leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('(prefix)wt')) {
  client4.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('mils')) {
  client4.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('(prefix)st')) {
    client4.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith('(prefix)setname')) {
  client4.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('(prefix)setavatar')) {
  client4.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
}); 

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
client2.login(process.env.BOT_TOKEN2);// لا تغير فيها شيء
client3.login(process.env.BOT_TOKEN3);// لا تغير فيها 
client4.login(process.env.BOT_TOKEN4);// لا تغير فيها 
