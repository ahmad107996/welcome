const Discord = require("discord.js");
const client = new Discord.Client();
const client4 = new Discord.Client();

client.on('ready' , async =>{
console.log(`'${client.user.username}' on`)
});

client4.on('ready' , async =>{
console.log(`'${client4.user.username}' on`)
});

client.on('message', msg => {
    if (msg.content == 'join') {
        if (msg.member.voiceChannel) {

         if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react(👍'));
     }
    }
}
})
client.on('ready', () => { 
client.channels.get("553964185902645249").join();
    });


client4.on("guildMemberAdd", member => {
  if(member.guild.id === "538364179715850272") {  
const channel = member.guild.channels.find('id', '538364179715850276'); 
if (!channel) return;
channel.send(`<@${member.user.id}> **دخل سيرفر مجتمع رويال **`)
}}); 

 client4.on('ready', async() => {
    const server = "553026008098537474"; // ايدي السررفر
const channel = "553206837831401482";//ايدي الروم
        setInterval(()=>{
        client.guilds.get(server).channels.get(channel).send(`#daily`)
    },86400000);
    });

client4.on('message', message => {
  var devs = ["348953140315291649"];
var adminprefix = ["ahmad-"];

    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
if (message.content.startsWith(adminprefix + 'ply')) {
    client4.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
if (message.content.startsWith(adminprefix + 'leave')) {
    message.guild.leave();        
  } else  
if (message.content.startsWith(adminprefix + 'wt')) {
  client4.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
if (message.content.startsWith(adminprefix + 'mils')) {
  client4.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
if (message.content.startsWith(adminprefix + 'st')) {
    client4.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
if (message.content.startsWith(adminprefix + 'setname')) {
  client4.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'avatar')) {
  client4.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
}); 

client.on('message', message => {
  var devs = ["462434603895095297"];
var adminprefix = ["s-"];
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
if (message.content.startsWith(adminprefix + 'leave')) {
    message.guild.leave();        
  } else  
if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
if (message.content.startsWith(adminprefix + 'mils')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'avatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
}); 




client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
client4.login(process.env.BOT_TOKEN4);// لا تغير فيها 
