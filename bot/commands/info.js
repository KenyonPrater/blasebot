// 

const command = {
    name: "info",
    aliases: [],
    description: "Invite and git links\nbb!info",
    async execute(message, args) {
        message.channel.send("Invite to server: <https://discord.com/oauth2/authorize?client_id=749154634370646067&scope=bot&permissions=18432>\nContribute on github: <https://github.com/BeeFox-sys/blasebot>").then(global.client.messageFreq.mark()).catch(console.error);
    },
};

module.exports = command;