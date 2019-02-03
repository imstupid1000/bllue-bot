const Commando = require("discord.js-commando");
const bot = new Commando.Client();
const token = 'NTQxNDczMTE1NTI0MzAwODA3.Dziqtw.JfOjxe0i8lFH3uYkFtDWjehz8Pg'
bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');


bot.on('message', function(message){
if(message.content == 'hi')
{
    message.channel.send('Hello, ' + message.author + '!');
}
});




bot.on('ready', function(){
    console.log('Bot is ready.');
});




bot.login(token)