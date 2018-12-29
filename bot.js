const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();

client.on("guildMemberAdd", member => {
  if(member.guild.id === "274665615833432064") {  
const channel = member.guild.channels.find('id', '450468402650284033'); 
if (!channel) return;
channel.send(`**<@${member.user.id}> Welcome To Server Family Royal King...!`)
}}); 
client2.on("guildMemberAdd", member => {
  if(member.guild.id === "274665615833432064") {  
const channel = member.guild.channels.find('id', '450468402650284033'); 
if (!channel) return;
channel.send(`**<@${member.user.id}> Welcome To Server Family Royal King...!`)
}}); 
client3.on("guildMemberAdd", member => {
  if(member.guild.id === "274665615833432064") {  
const channel = member.guild.channels.find('id', '450468402650284033'); 
if (!channel) return;
channel.send(`**<@${member.user.id}> Welcome To Server Family Royal King...!`)
}}); 

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
client2.login(process.env.BOT_TOKEN2);// لا تغير فيها شيء
client3.login(process.env.BOT_TOKEN3);// لا تغير فيها شيء
