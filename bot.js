const Discord = require("discord.js");
const client = new Discord.Client();
const client4 = new Discord.Client();

client.on('ready' , async =>{
console.log(`'${client.user.username}' on`)
});

client4.on('ready' , async =>{
console.log(`'${client4.user.username}' on`)
});


client4.on("guildMemberAdd", member => {
  if(member.guild.id === "577512953494896640") {  
const channel = member.guild.channels.find('id', '582926290546327572'); 
if (!channel) return;
channel.send(`**# You're in Thúnderr ..:THU: **`)
    channel.send(`.`)
}}); 




client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
client4.login(process.env.BOT_TOKEN4);// لا تغير فيها 
