const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'help',
    execute(message, args) {
        const greet = new Discord.RichEmbed()
            .setColor('#3CB371')
            .setTitle('733tguin')
            .setAuthor('reptilbot', 'https://stellaris.paradoxwikis.com/images/6/62/Synthetic_dawn_portrait_reptilian.png', 'https://github.com/reptilbot')
            .setDescription('733tguin is a Discord bot created with discord.js and node.js')
            .addBlankField()
            .addField('!ping', 'Returns Pong!', true)
            .addField('!user-info', 'Returns username, ID, and avatar', true)
            .addField('!attach https://www.example.com/image.png', 'Attaches chosen image', true)
            .addField('!send message', 'Sends chosen message to message author', true)
            .addField('!kick @user', 'Attempts to kick user from server', true)
            .addField('!join https://www.example.com/music.mp3', 'Joins voice channel message author is on', true)
            //.addField('Inline field title', 'Some value here', true)
            .addBlankField()
            .setTimestamp()

        message.channel.send(greet);
    },
};