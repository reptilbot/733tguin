const { Client , Attachment } = require('discord.js');
module.exports = {
    name: 'attach',
    description: 'attach',
    execute(message, args) {
        const attacher = message.content.replace("!attach ", "");
        const attachment = new Attachment(attacher);
        message.channel.send(attachment);
    },
};