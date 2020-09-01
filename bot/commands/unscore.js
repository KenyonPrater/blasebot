const { getTeam } = require("../util/teamUtils");
const {scores} = require("../schemas/subscription");

const command = {
    name: "unscore",
    aliases: [],
    description: "Unsubscribes from the score updates of a channel\nbb!unscore [team]",
    async execute(message, args) {

        if(!message.guild) return message.channel.send("This command must be used in a guild!").catch(console.error);
        if(!message.channel.permissionsFor(message.member).has("MANAGE_CHANNELS")) return message.channel.send("You require the manage channel permission to run this command!").catch(console.error);

        let team = await getTeam(args.join(" "));
        if(!team) return message.channel.send("I can't find that team!").catch(console.error);

        let err, docs = await scores.find({channel_id: message.channel.id, team:team.id});
        if(err) throw err;
        if(docs.length == 0) return message.channel.send(`You are not subscribed to ${team.fullName}'s score updates here!`).catch(console.error);

        // eslint-disable-next-line no-unused-vars
        let error, doc = await scores.deleteOne({channel_id: message.channel.id, team:team.id});
        if(error) throw error;

        message.channel.send(`Unsubscribed this channel from ${team.fullName}'s score updates here!!`).catch(console.error);

    },
};

module.exports = command;