const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'Nzc3MDYzNzQ1MzUxNDUwNjI1.X69_Ag.5xsh3D82dJPrWK9gCoKA9Hkv0zM'

const prefix = '>';

client.once('ready', () => {
    console.log('Clear Kuriboh is online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift();
 
    if(command === 'Hi'){
        message.channel.send('Kuri! Kuri?');
        message.channel.send('(Hello! How are you?)')
    }else if (command == 'Hello'){
        message.channel.send('Kuri! Kuri?');
        message.channel.send('(Hello! How are you?)')
    }else if (command == 'Hey'){
        message.channel.send('Kuri! Kuri?');
        message.channel.send('(Hello! How are you?)')
    }else if (command == 'Howdy'){
        message.channel.send('Kuri! Kuri?');
        message.channel.send('(Hello! How are you?)')
    }else if (command == 'Sup'){
        message.channel.send('Kuri! Kuri?');
        message.channel.send('(Hello! How are you?)')
    }else if (command == 'Yo'){
        message.channel.send('Kuri! Kuri?');
        message.channel.send('(Hello! How are you?)')
    }else if (command == 'Good'){
        message.channel.send('Kuri!');
        message.channel.send('(Wonderful!)')
    }else if (command == 'Great'){
        message.channel.send('Kuri!');
        message.channel.send('(Wonderful!)')
    }else if (command == 'Alright'){
        message.channel.send('Kuri!');
        message.channel.send('(Wonderful!)')
    }else if (command == 'Fine'){
        message.channel.send('Kuri!');
        message.channel.send('(Wonderful!)')
    }else if (command == 'Ok'){
        message.channel.send('Kuri!');
        message.channel.send('(Wonderful!)')
    }else if (command == 'Decent'){
        message.channel.send('Kuri!');
        message.channel.send('(Wonderful!)')
        message.channel.send('Kuri! Kuri! Kuri!');
        message.channel.send('(I will be going now! So if you need anything, type ">" and I will be there!)')
    }else if (command == 'Bad'){
        message.channel.send('Kuri... Kuri! Kuri!');
        message.channel.send('(That sucks... But maybe a Duel will help you feel better!)')
        message.channel.send('Kuri! Kuri! Kuri!');
        message.channel.send('(I will be going now! So if you need anything, type ">" and I will be there!)')
    }else if (command == 'Horrible'){
        message.channel.send('Kuri... Kuri! Kuri!');
        message.channel.send('(That sucks... But maybe a Duel will help you feel better!)')
        message.channel.send('Kuri! Kuri! Kuri!');
        message.channel.send('(I will be going now! So if you need anything, type ">" and I will be there!)')
    }else if (command == 'Terrible'){
        message.channel.send('Kuri... Kuri! Kuri!');
        message.channel.send('(That sucks... But maybe a Duel will help you feel better!)')
        message.channel.send('Kuri! Kuri! Kuri!');
        message.channel.send('(I will be going now! So if you need anything, type ">" and I will be there!)')
    }else if (command == 'Sing'){
        message.channel.send('Do Da La La La La La La La La LA LA LA LA LA LA, LAA LAA LAA LAA LAA LAA');
    }else if (command == 'Riddle#1'){
        message.channel.send('Kuri! Kuri! Kuri?');
        message.channel.send('(You will not see me, but only through me. What am I?)')
        message.channel.send('Example Answer = (>Done)')
    }else if (command == 'Riddle#2'){
        message.channel.send('Kuri! Kuri? Kuri! Kuri? Kuri?');
        message.channel.send('(A spicy dish of sauce, or a herby dish of powder. What am I?)')
        message.channel.send('Example Answer = (>Done)')
    }else if (command == 'Riddle#3'){
        message.channel.send('Kuri! Kuri! Kuri?');
        message.channel.send('(Me and arrow always leave our enemy injured! What am I?)')
        message.channel.send('Example Answer = (>Done)')
    }else if (command == 'Hint#1'){
        message.channel.send('Kuri! Kuri!');
        message.channel.send('(Vowel Count = --ea-)')
    }else if (command == 'Hint#2'){
        message.channel.send('Kuri! Kuri!');
        message.channel.send('(Vowel Count = -u--y)')
    }else if (command == 'Hint#3'){
        message.channel.send('Kuri!');
        message.channel.send('(Vowel Count = -o-)')
    }else if (command == ''){
        message.channel.send('https://cdn.discordapp.com/attachments/777697371923415071/778031921619271720/Screenshot_10.png');
    }else if (command == 'SearchTTV'){
        message.channel.send('Kuri!');
        message.channel.send('(Ok!)')
        message.channel.send('https://www.twitch.tv/dlfundecks')
    }else if (command == 'SearchYT'){
        message.channel.send('Kuri!');
        message.channel.send('(Ok!)')
        message.channel.send('https://www.youtube.com/channel/UCeSgzbaT74pi8opZwMEbVKA')
    }else if (command == 'Clear'){
        message.channel.send('Kuri! Kuri! Kuri!');
        message.channel.send('(Ding! Ding! Ding! #1 Correct!!!)')
    }else if (command == 'Curry'){
        message.channel.send('Kuri! Kuri! Kuri!');
        message.channel.send('(Ding! Ding! Ding! #2 Correct!!!)')
    }else if (command == 'Bow'){
        message.channel.send('Kuri! Kuri! Kuri!');
        message.channel.send('(Ding! Ding! Ding! #3 Correct!!!)')
    }else if (command == 'Donate'){
        message.channel.send('Kuri? Kuri! Kuri!');
        message.channel.send('(Are you donating? You mean it! Thank You!) https://www.patreon.com/DL_Fun_Decks')
    }
});

const ytdl = require("ytdl-core");

var servers = {};

client.on('message', message => {
    Let.args = message.content.substring(PREFIX.lenth).split(" ");

    switch (args[0]) {
        case 'Track#1':

            function play(connection,message){
                var server = servers[message.guild.id];
            
                server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

                server.queue.shift();
            
                server.dispatcher.on("end", function(){
                    if(server.queue[0]){
                        play(connection, message);

                    }else {
                        connection.disconnect();
                    }
                server.queue.push(args[1]);
            
            });

            if(!args[1])
                message.channel.send('Kuri! Kuri!')
                message.channel.send('(RelinqKuriboh is no where in sight!)')
                return;
    }


            if(!message.author.voicechannel){
                message.channel.send('You are not connected to a voice channel!');
                return;
            if(!servers[message.guild.id]) servers[message.guild.id] = {}
                queue: []
            
            var server = servers[message.guild.id]

            if(!message.guild.voiceonnection) message.member
            voiceChannel.join().then(function(connection){
                AnimationPlaybackEvent(connection,message);
                switch (args[0])
                    {case('image'):
                    Image(message);


        break;

        function image(message){

            var options = {
                url: "https://www.youtube.com/playlist?list=PLwksTQWBN5SYHKSc75zxV-rIXwTxEweXf" + "Yu-Gi-Oh!",
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
            }

        }

        switch (args[0]) {
            case 'Track#2':
    
                function play(connection,message){
                    var server = servers[message.guild.id];
                
                    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
    
                    server.queue.shift();
                
                    server.dispatcher.on("end", function(){
                        if(server.queue[0]){
                            play(connection, message);
    
                        }else {
                            connection.disconnect();
                        }
                    server.queue.push(args[1]);
                
                });
    
                if(!args[1])
                    message.channel.send('Kuri! Kuri!')
                    message.channel.send('(RelinqKuriboh is no where in sight!)')
                    return;
        }
    
    
                if(!message.author.voicechannel){
                    message.channel.send('You are not connected to a voice channel!');
                    return;
                if(!servers[message.guild.id]) servers[message.guild.id] = {}
                    queue: []
                
                var server = servers[message.guild.id]
    
                if(!message.guild.voiceonnection) message.member.voiceChannel.join().then(function(connection){
                    AnimationPlaybackEvent(connection,message);
                    switch (args[0])
                        {case('image'):
                        Image(message);
    
    
            break;
    
            function image(message){
    
                var options = {
                    url: "https://www.youtube.com/playlist?list=PLwksTQWBN5SZLP7qxEbyZ-9eWXHwFQ9vd" + "Yu-Gi-Oh! Duel Links",
                    method: "GET",
                    headers: {
                        "Accept": "text/html",
                        "User-Agent": "Chrome"
                    }
                }
    
            }

        Case ('Skip')
            var server = servers[message.guild.id]
                if(server.dispatcher) server.dispatcher.end();
            break;
        Case ('Stop')
                var server = servers[message.guild.id]
                if(message.guild.voiceConnection)
                    for(var i = server.queue.length -1; i >=0; i--)
                        server.queue.splice(i, 1);

                    server.dispatcher.and();
                    console.log('Kuri!')
                    console.log('Queue stopped.')
            
                
                if(message.guild.connection) message.guild.voiceConnection.disconnect();
            break;
            Case ('Loop')
            var server = servers[message.guild.id]
            if(message.guild.voiceConnection)
            serverQueue.loop = !serverQueue.loop
            return message.channel.send('Kuri!')
                   message.channel.send('(Ok! $(serverQueue.loop ?  "*Enabled*" "*Disabled*")')
                if(serverQueue.loop) serverQueue.songs.shift()
                play(guild. serverQueue.songs[0])
            
            .on("Error", (Error) => {
                console.log(Error)
            })
        dispatcher.setVolumeLogarithmic(serveQueue.volume / $)

        serverQueue.textChannel.send('Kuri!')
        serverQueue.textChannel.send('Playing: *-${song.title}-*')
        break;


            
}
            });

            
}}}})}}})