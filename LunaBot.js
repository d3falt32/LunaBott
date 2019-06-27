const discord  = require ('discord.js');
const client = new Discord.Client();

client.on ("ready", () => {
    console.log ("The bot is online!");

    client.user.setActivity ("with yarn");
})

client.on("guildMemberAdd", member => {

    var role = member.guild.roles.find ("name", "Unroled");
    member.addRole (role);
})

client.on("guildMemberRemove", member => {

})

const prefix = "s!"
client.on ("message", (message) => {

    msg = message.content.toLowerCase();

    if(message.author.bot) return;

    if (message.content.startsWith (prefix + "hello")) {
        message.reply ('its you! Hurry, we gotta find the other sailor scouts!');
    }

    if (msg.startsWith (prefix + "sailorscout")) {
        number = 36;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/" + imageNumber + ".png"]} )

    }

    if (msg.startsWith (prefix + "scoutgif")) {
        number = 20;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./Gifs/" + imageNumber + ".gif"]} )

    }
})

client.login(process.env.B0t_T0KEN);
