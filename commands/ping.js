module.exports = {
    name: 'ping',
    description: 'ping',
    execute(message, args) {
        // Shows response time in milliseconds
        message.channel.send(`Pong! ${Date.now() - message.createdTimestamp}ms`);
    },
};