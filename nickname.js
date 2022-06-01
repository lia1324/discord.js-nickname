const { Client, Intents, Collection } = require('discord.js')
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.
    FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES,],
})

const { token, prefix } = require('./config.json');

client.commands = new Collection()

client.once('ready', () => {
  console.log(`로그인 완료 | ${client.user.tag}!`)
})

client.on('guildMemberAdd', member => {
 member.setNickname(`고유번호 | ${member.user.username} | 직업`);
  try {
  } catch (error) {
    return console.error(error)
  }
});

client.login("")
