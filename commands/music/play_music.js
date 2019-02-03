const commando = require('discord.js-commando')

class JoinChannelCommand extends commando.Command
{
constructor(client)
    {
        super(client,{
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Plays music in voice channel of the commander'

        });
    }
    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                    .then(connection =>{
                        message.channel.send('Join Channel Success.');
                    })
            }
        }
        else
        {
            message.channel.send('You must be in a voice channel for me to join it.')
        }
    }
}
    module.exports = JoinChannelCommand
