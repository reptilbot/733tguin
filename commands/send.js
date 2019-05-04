module.exports = {
    name: 'send',
    description: 'send',
    execute(message, args) {
        const gift = message.content.replace("!send ", "");
        message.author.send(gift);
    },
};