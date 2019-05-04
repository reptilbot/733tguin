module.exports = {
    name: 'join',
    description: 'join',
    execute(message, args) {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
                .then(connection => {
                    message.reply('I have successfully connected to the channel!');

                    // Plays mp3 file music into voice channel that user chooses
                    const music = message.content.replace("!join ", "");
                    connection.playArbitraryInput(music);

                    // If you want to play files downloaded already just use this
                    //connection.playFile('C:/Users/Discord/Desktop/myfile.mp3');

                })
                .catch(console.log);
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }
    };