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

client4.on('ready',async () => {//Toxic Codes
  console.log("Starting..");//Toxic Codes
  let g = client4.guilds.get("473244584781021195"); // id server
  let c = g.channels.get("473251118034714624");// id channel
  if(c.type === 'voice') {//Toxic Codes
  c.join();//Toxic Codes
  setInterval(() => {//Toxic Codes
  if(!g.me.voiceChannel) c.join();
  }, 1);//Toxic Codes
  } else {//Toxic Codes
  console.log("Failed To Join:\n The Channel Type isn't \"text\"");
  }//Toxic Codes
  });

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
client2.login(process.env.BOT_TOKEN2);// لا تغير فيها شيء
client3.login(process.env.BOT_TOKEN3);// لا تغير فيها 
  client4.login(process.env.BOT_TOKEN4);// لا تغير فيها 
