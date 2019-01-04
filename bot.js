const Discord = require("discord.js");
const client = new Discord.Client();


client.on("guildMemberAdd", member => {
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
      
  if (message.content.startsWith('.ply')) {
    client4.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === ("leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('.wt')) {
  client4.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('mils')) {
  client4.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('.st')) {
    client4.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith('.setname')) {
  client4.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('.setavatar')) {
  client4.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
}); 
client4.on('message', msg => {

    if (msg.content == '%join') { /// هنا اكتب الامر و البرفيكس
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('✅'));
     }
    }
}
})
client4.on('ready', () => {
    client4.channels.get("528239376820469770").join();
    });

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
client4.login(process.env.BOT_TOKEN4);// لا تغير فيها 
