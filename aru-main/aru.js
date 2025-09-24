require('dotenv').config();
const { Client , ActivityType , PresenceUpdateStatus , IntentsBitField , EmbedBuilder } = require('discord.js');
const Variables = require('./variables');
const AruVar = Variables[0];

const aru = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

aru.on('clientReady', (c) => {
    console.log(`${c.user.tag} is online.`);

    aru.user.setPresence({ 
      activities: [{ type: ActivityType.Custom, name: 'custom', state: 'bruh i died' }], 
      status: PresenceUpdateStatus.DoNotDisturb });

})

aru.on('messageCreate', async (m) => {

// this is so that aru doesn't respond to herself
if (m.author.bot) {return;}

if (m.content === '.test') {m.channel.send(`return`);} // test

// this is for user input idk if this still works need revision i think
const args = m.content.slice().trim().split(/ +/g);

// [0a] Feedback: uhh... Feedback.
if (m.content.startsWith('.feedback')) {
  if (m.channel.type == "DM") return m.author.send("Sorry, this command isn't available in DMs!")
  
  const generationChannel = m.guild.channels.cache.find(channel => channel.id === '682131008111247447');
  const feedback = args.slice(1).join(" ");

  const embed = new EmbedBuilder()
  .setColor(0x00C8FF)
  .setTitle(`${m.author.tag} **sent ↓**`)
  .setThumbnail(`${m.author.avatarURL()}`)
  .setDescription(`\`\`\`"${feedback}"\`\`\``)

  generationChannel.send({ embeds: [embed] });
}

// [3a] Fun: Hug
if (m.content.startsWith('.hug')) {
  if (m.channel.type == "DM") return m.author.send("Sorry, this command isn't available on dm!")
  const member = m.mentions.members.first();

  if (!member) {return m.channel.send(`but... who..?`)}

  const embed = new EmbedBuilder()
  .setDescription(`${m.author} **gave** ${member} **a hug!**`)
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.huglinks[Math.floor(Math.random() * AruVar.huglinks.length)])

  m.channel.send({embeds: [embed]});

}

// [3b] Fun: Pat
if (m.content.startsWith('.pat')) {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const member = m.mentions.members.first();

  if (!member) {return m.channel.send(`but... who..?`)}

  const embed = new EmbedBuilder()
  .setDescription(`${m.author} **gave** ${member} **a pat!**`)
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.patlinks[Math.floor(Math.random() * AruVar.patlinks.length)])

  m.channel.send({embeds: [embed]});

}

// [3c] Fun: Slap
if (m.content.startsWith('.slap')) {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    const member = m.mentions.members.first();
  
    if (!member) {return m.channel.send(`but... who..?`)}
  
    const embed = new EmbedBuilder()
    .setDescription(`${m.author} **slapped** ${member}**!**`)
    .setColor(m.member.displayHexColor)
    .setImage("https://cdn.discordapp.com/attachments/573101060852416513/1237674342133796864/bslap.gif?ex=663c818e&is=663b300e&hm=b7a30d5e245bdfb04ce7a978fc5ebeac455bc69addb349274b40816f4ef04821&")
    m.channel.send({embeds: [embed]});
  
}
  
  // [3d] Fun: Punch
if (m.content.startsWith('.punch')) {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    const member = m.mentions.members.first()
  
    if (!member) {return m.channel.send(`but... who..?`)}
  
    const embed = new EmbedBuilder()
    .setDescription(`${m.author} **Ora Ora'd** ${member} **!**`)
    .setColor(m.member.displayHexColor)
    .setImage("https://i.imgur.com/TOx70Jp.gif")

    m.channel.send({embeds: [embed]});
  
}

// [3e] Fun: Bite
if (m.content.startsWith('.bite')) {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const member = m.mentions.members.first()

  if (!member) {return m.channel.send(`but... who..?`)}

  const embed = new EmbedBuilder()
  .setDescription(`${m.author} **bites** ${member}**!**`)
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.bitelinks[Math.floor(Math.random() * AruVar.bitelinks.length)])   
  
  m.channel.send({embeds: [embed]});

}

// [3f] Fun: Waifu Meter
if (m.content.startsWith('.waifu')) {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    const member = m.mentions.members.first()
  
  const waifu1 = new EmbedBuilder()
  .setTitle('Waifu Meter!')
  .setThumbnail('https://media.discordapp.net/attachments/573101060852416513/770939468081266688/tsmug.gif')
  .setColor(m.member.displayHexColor)
  .setDescription(`${m.author}, you are ${Math.floor(Math.random() * 100) + 0}/100 waifuable uwu`)
  
  if (!member) {
  return m.channel.send({ embeds: [waifu1] })
  }
  
  const waifu2 = new EmbedBuilder()
  .setTitle('Waifu Meter!')
  .setThumbnail('https://media.discordapp.net/attachments/573101060852416513/770939468081266688/tsmug.gif')
  .setColor(m.member.displayHexColor)
  .setDescription(`${member.users}, you are ${Math.floor(Math.random() * 100) + 0}/100 waifuable uwu`)
  m.channel.send({ embeds: [waifu2] })
  
}

// [3g] Fun: Coin flip
// if (m.content === '.coin') {m.channel.send(AruVar.coinflip[Math.floor(Math.random() * AruVar.coinflip.length)])}
if (m.content.startsWith('.coin')) {
    if (m.channel.type === "dm") {
        return m.channel.send("Sorry, this command isn't available on dm!");
    }

    const isHeads = Math.random() < 0.5;
    const coinArray = isHeads ? AruVar.coinflipH : AruVar.coinflipT;
    const coinItself = coinArray[Math.floor(Math.random() * coinArray.length)];

    const embed = new EmbedBuilder()
        .setAuthor({ name: `${m.author.username} :`, iconURL: m.author.avatarURL() })
        .setColor(0x00C8FF)
        .setTitle(isHeads ? "Heads!" : "Tails!")
        .setImage(coinItself);

    m.channel.send({ embeds: [embed] });
}

// [3h] Fun: Cookie
    if (m.content.startsWith('.cookie')) {
      if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
      const member = m.mentions.members.first()
    
      const cookieembed1 = new EmbedBuilder()
      .setDescription(`have yourself a cookie :cookie:`)
      .setImage(AruVar.cookiegive[Math.floor(Math.random() * AruVar.cookiegive.length)])
      .setColor(m.member.displayHexColor)
  
      if (!member) {
        return m.channel.send({ embeds: [cookieembed1] })
      }
    
      const cookieembed2 = new EmbedBuilder()
      .setDescription(`${member} **got a <:heavenly_cookie:637822807631331329> from ${m.author}**`)
      .setImage(AruVar.cookiegive[Math.floor(Math.random() * AruVar.cookiegive.length)])
      .setColor(m.member.displayHexColor)
    m.channel.send({ embeds: [cookieembed2] });
    
}

// [3i] Fun: Ask Aru
if (m.content === '.ask') {m.channel.send(AruVar.aruask[Math.floor(Math.random() * AruVar.aruask.length)])}

// [3j] Fun: Aru's Fortune
if (m.content.startsWith('.fortune')) {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(0x00C8FF)
    .setDescription(AruVar.AruFortune[Math.floor(Math.random() * AruVar.AruFortune.length)])
    
    m.channel.send({embeds: [embed]});
}
  
// [3k] Fun: Aru Say
if(m.content === ".say"){m.channel.send("due to a bug, this command has been disabled.")}

// [3l] Fun: Dance
if (m.content === '.dance') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")

    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(AruVar.dancelinks[Math.floor(Math.random() * AruVar.dancelinks.length)])
    
    m.channel.send({embeds: [embed]});
}

// [3m] Fun: Neko
if (m.content === '.neko') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")

    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(AruVar.Neko[Math.floor(Math.random() * AruVar.Neko.length)])
    .setFooter({text: 'Have a neko ≧OwO≦'})

    m.channel.send({embeds: [embed]});
}

// [3n] Fun: Pout
if (m.content.startsWith('.pout')) {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(AruVar.poutlinks[Math.floor(Math.random() * AruVar.poutlinks.length)])
    
    m.channel.send({embeds: [embed]});
}

// [3o] Fun: Bongo
if (m.content === '.bongo') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(AruVar.Bongo[Math.floor(Math.random() * AruVar.Bongo.length)])

    m.channel.send({embeds: [embed]});
  }
  
  // [3p] Fun: Card
if (m.content === '.card') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username}, you drew`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(AruVar.cards[Math.floor(Math.random() * AruVar.cards.length)])

  m.channel.send({embeds: [embed]});
}
  
  // [3q] Fun: dice
if (m.content === '.dice') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} rolled a`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setDescription(`${Math.floor(Math.random() * 6) + 1}`)

    m.channel.send({embeds: [embed]});
} // please put an actual dice picture to this boring command

// [3r] Fun: AHH
if (m.content.toLowerCase() === '.ahh') {
  const embed = new EmbedBuilder()
  .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
  .setColor(0x3333CC)
  .setImage(AruVar.AHH[Math.floor(Math.random() * AruVar.AHH.length)])
  .setFooter({text: 'srsly why do u like to scream so much :P'})
  
  m.channel.send({embeds: [embed]});
}

// [3s] Fun: Run
if (m.content === '.run') {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} : nope nope nope nope`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.run)

  m.channel.send({embeds: [embed]});
}

// [3t] Fun: Blob
  if (m.content === '.blob') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.danceblobs[Math.floor(Math.random() * AruVar.danceblobs.length)])

  m.channel.send({embeds: [embed]})
}

// [3u] Fun: Kurbeh
if (m.content === '.kurbeh') {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.kurbeh)

  m.channel.send({embeds: [embed]});
}

// [3v] Fun: REEEeeEE
if (m.content === '.ree') {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.reee)
  .setFooter({text: 'REEEEEEE'})

  m.channel.send({embeds: [embed]});
}

// [3w] Fun: What
if (m.content.startsWith('.what')) {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} : ...`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.what[Math.floor(Math.random() * AruVar.what.length)])

  m.channel.send({embeds: [embed]});
}

// [3x] Fun: Ara ara
if (m.content.startsWith('.ara')) {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()
  
  .setAuthor({ name: `${m.author.username} : ara ara`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.Ara[Math.floor(Math.random() * AruVar.Ara.length)])
  
  m.channel.send({embeds: [embed]});
}

// [3y] Fun: Press F to pay Respecc
switch(m.content.toUpperCase()) {case '.F': m.channel.send(`${m.author.username} paid their respect.`)} // update this lame ass command

// [3z] Fun: Tableflip
if (m.content === '.tableflip'){m.channel.send('┬─┬ノ( º _ ºノ)').then((msg)=> {setTimeout(function(){msg.edit('(╯°□°）╯︵ ┻━┻');}, 750)});}

// [3aa (stupid codenaming anyway who came up with this) Fun: RPS]
// beta:rps command
if (m.content.startsWith(".rps")) {
  const choicesRPS = ["rock", "paper", "scissors"];
  const userRPS = m.content.split(" ")[1]?.toLowerCase();
  const aruRPS = choicesRPS[Math.floor(Math.random() * choicesRPS.length)];

  if (!choicesRPS.includes(userRPS)) {
    m.channel.send(
      "Yang benar lah. Choose `rock`, `paper`, or `scissors`.\nExample: `.rps rock`"
    );
    return;
  }

  let resultRPS = "";
  if (userRPS === aruRPS) {
    resultRPS = "It's a tie!";
  } else if (
    (userRPS === "rock" && aruRPS === "scissors") ||
    (userRPS === "paper" && aruRPS === "rock") ||
    (userRPS === "scissors" && aruRPS === "paper")
  ) {
    resultRPS = "You got lucky";
  } else {
    resultRPS = "Too bad bro";
  }

  const erpees = new EmbedBuilder()
    .setColor("#00BFFF")
    .setTitle("Rock Paper Scissors")
    .setDescription(`You chose **${userRPS}**.\nI chose **${aruRPS}**.\n${resultRPS}`)
    .setImage(rpsImages[`${userRPS}_${aruRPS}`]);

  m.channel.send({ embeds: [erpees] });
}


  // [4a] Utility: Profile
if (m.content.startsWith('.profile')) {
  if (m.channel.type == "dm") return m.channel.send(
    "Sorry, this command isn't available on dm!")
  const member = m.mentions.members.first()

  const profembed1 = new EmbedBuilder()
  .setTitle(`${m.author.username}'s profile:`)
  .setColor(m.member.displayHexColor)
  .setThumbnail(`${m.author.avatarURL()}`)
  .setDescription(`**•Account Username:**\n${m.author.username}\n**•Account ID:**\n${m.author.id}\n**•Account Created At:**\n${m.author.createdAt}\n`);

  if (!member) {
    return m.channel.send({embeds: [profembed1]})
  }

  const profembed2 = new EmbedBuilder()
  .setTitle(`${member.user.username}'s profile:`)
  .setColor(0x00c8ff)
  .setThumbnail(`${member.user.avatarURL()}`)
  .setDescription(`**•Account Username:**\n${member.user.username}\n**•Account ID:**\n${member.user.id}\n**•Account Created At:**\n${member.user.createdAt}\n`);

  m.channel.send({embeds: [profembed2]})
}

// [4b] Utility: User Avatar
if (m.content.startsWith('.avatar')) {
  if (m.channel.type == "dm") return m.channel.send(
    "Sorry, this command isn't available on dm!")
  const member = m.mentions.members.first()

  const avembed1 = new EmbedBuilder()
  .setAuthor({ name: `Here is ${m.author.username}'s (your) avatar :`})
  .setColor(m.member.displayHexColor)
  .setImage(`${m.author.avatarURL()}`)

  if (!member) {
    return m.channel.send({embeds: [avembed1]})
  }

  const avembed2 = new EmbedBuilder()
  .setAuthor({ name: `Here is ${member.user.username}'s avatar :`})
  .setColor(0x00C8FF)
  .setImage(`${member.user.avatarURL()}`)

  m.channel.send({embeds: [avembed2]})

}

// [4c] Utility: Help List
if (m.content === '.help') {
  const embed = new EmbedBuilder()
    .setTitle(`Command List (Beta)`)
    .setColor(0x00C8FF)
    .setDescription(AruVar.help)
    .setFooter({text: 'this took me two days to make for some reason'});
  m.channel.send({embeds: [embed]});
}

// [4d] Utility (async): Aru (update this sht with more info)
let totalSeconds = (aru.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;

if (m.content === '.aru') {
  if (m.channel.type == "dm") return m.channel.send("This can only be done on servers...")
  const test = await m.channel.send("Me?");
  test.delete();

  const embed = new EmbedBuilder()
    .setTitle(`Hello, my name is Aru, Hajimemashite ;)`)
    .setColor(0x00C8FF)
    .setThumbnail("https://cdn.discordapp.com/attachments/634155872263864360/677859137723564052/Aru2.png")
    .setDescription(`•Ping\n-My Latency is ${test.createdTimestamp - m.createdTimestamp}ms.\n-My API Latency is ${Math.round(aru.ws.ping)}ms\n-I've been around for ${hours} hour(s)`);

    m.channel.send({embeds: [embed]});
}

// [4e] Utility: Server Info
if (m.content === '.server') {
  if (m.channel.type == "dm") return m.channel.send("hmm, yes. This is DEFINETELY a server.")

  const embed = new EmbedBuilder()
    .setTitle('Here is the server info :)')
    .setColor(0x00C8FF)
    .setThumbnail(`${m.guild.iconURL()}`)
    .setDescription(`**Server name:** ${m.guild.name}\n**Member Count:** ${m.guild.memberCount}`);

    m.channel.send({embeds: [embed]});
}

// [4f] Utility: Connection Speed (ping)
if (m.content === '.ping') {
  const pong = await m.channel.send("Pinging...");
  pong.delete();
  m.channel.send(`-Me and Oreo's internet speed is ${pong.createdTimestamp - m.createdTimestamp}ms.\n-My API Latency is ${Math.round(aru.ws.ping)}ms`)
}

// [4g] Utility: Server Invite
if (m.content === '.invite') {

  const embed = new EmbedBuilder()
    .setTitle(`The System (システム)'s\nServer Invite.`)
    .setColor(0x00C8FF)
    .setThumbnail("https://cdn.discordapp.com/icons/553082144423936001/a_784af86149cd1803265105e26a9ea763.gif")
    .setDescription("[ **http://bit.ly/TSystem** ]");
    m.channel.send({embeds: [embed]});
}

// [4h] Utility: Server Member List
if (m.content === '.members') {m.channel.send('<:soontm:662611931475214376>')}

// [5a] Misc Response: Aru
let callaru = ["yeah?","wot","sup","huh","ewot","nanda","apa",]
switch(m.content.toUpperCase()) {
  case 'ARU': m.channel.send(callaru[Math.floor(Math.random() * callaru.length)])
}

// [5b] Misc Response: nonono, YOU.
if (m.content === 'no u') {m.channel.send('no u');}

// [5c] Misc Response: Color Code Chart
if (m.content === '.color') {m.channel.send("https://cdn.discordapp.com/attachments/634155872263864360/1237672731554742272/latest.png?ex=663c800e&is=663b2e8e&hm=e66101c369f700bbe7420b58c86b43cc99f8ad83b3ff3e8e0efd9a9ca3089e94&")}

// [5d] Misc Response: dongo easter egg
if (m.content === '.dongo') {m.channel.send("bapakkau yang dongo")}

// [5e] Misc Response: ewe easter egg
switch(m.content.toUpperCase()) {case 'EWE': m.channel.send('lale')}

// if (m.content === '.bruhv') {
//   const role = m.guild.roles.cache.find(role => role.id === '566220543427084298');
//   if (!role) return m.channel.send('Role not found!');
  
//   role.setColor('#cdd6f4')
//     .then(updated => {
//       console.log(`Set color of role to ${updated.color}`);
//       m.channel.send(`Successfully changed role color to red!`);
//     })
//     .catch(error => {
//       console.error(error);
//       m.channel.send('Failed to change role color!');
//     });
// }

//Shut down bot
if (m.content === '.shutdown') {
  if (m.member.permissions.has('Administrator')) {
    await m.channel.send('Shutting down...');
    console.log(`aru is offline (from shutdown admin command)`);
    aru.destroy(); // Disconnects the bot from Discord
  } else {
    await m.channel.send('nein');
  }
}


}); //end of messageCreate

aru.login(process.env.himitsu);
