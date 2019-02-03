const commando = require('discord.js-commando');

class DieRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a six sided die'
        });
    }

    async run(message, args)
    {
        {
            var dieRoll = Math.floor(Math.random() * 6) + 1;
            message.channel.send('You rolled a ' + dieRoll + '!');
        }
    }
}

module.exports = DieRollCommand
