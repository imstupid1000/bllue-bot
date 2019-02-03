const Discord = require("discord.js");
const bot = new Discord.Client();
const token = 'NTQxNDczMTE1NTI0MzAwODA3.DzgANA.U-9svmVT9KIwq-lRh5TAG4pPEmQ'

bot.on('message', function(message){
if(message.content == 'hi')
{
    message.channel.send('Hello :wave:');
    message.channel.send('<:death:541493703840104448>')
}
});



bot.on('ready', function(){
    console.log('Bot is ready.');
});




bot.login(token)
