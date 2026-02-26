process.title = "Aru - best girl";

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

// aru.on('clientReady', (c) => {
//     console.log(`${c.user.tag} is online.`);

//     aru.user.setPresence({ 
//       activities: [{ type: ActivityType.Custom, name: 'custom', state: 'bruh i died' }], 
//       status: PresenceUpdateStatus.DoNotDisturb });

// })

aru.on('clientReady', (c) => {
    console.log(`${c.user.tag} is online.`);

    const statuses = [
        'bruh i died',
        'test(1)',
        'istg if the status died again'
    ];

    let index = 0;

    function updateStatus() {
        const now = new Date();
        const timestamp = now.toISOString();

        aru.user.setPresence({
            activities: [{
                type: ActivityType.Custom,
                name: 'custom',
                state: statuses[index]
            }],
            status: PresenceUpdateStatus.DoNotDisturb
        });

        console.log(`[${timestamp}] Status updated to: ${statuses[index]}`);
        index = (index + 1) % statuses.length;
    }

    updateStatus();
    setInterval(updateStatus, 30 * 60000);
}); // GENUINELY don't know why status keeps resetting

process.on("SIGINT", shutdown);process.on("SIGTERM", shutdown);process.on("SIGQUIT", shutdown);
async function shutdown(signal) {
  console.log(` Received ${signal}. Shutting down bot...`);

  try {
    await aru.destroy();
    console.log("Aru's ded");
  } catch (err) {
    console.error("Error during destroy:", err);
  }

  process.exit(0);
}

aru.on('messageCreate', async (m) => { // message create start

if (m.author.bot) {return;}
if (m.content === '.test') {m.channel.send(`👋`);}

// this is for user input idk if this still works need revision i think
const args = m.content.slice().trim().split(/ +/g);

// [A1] Aru: Feedback
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

// [B1] Moderation: ..where are the moderation commands?

// [C1] Minigame: RPS
if (m.content.startsWith(".rps")) {
  const choicesRPS = ["rock", "paper", "scissors"];
  const userRPS = m.content.split(" ")[1]?.toLowerCase();

  if (!choicesRPS.includes(userRPS)) {
    m.channel.send(
      "Yang benar lah. Choose `rock`, `paper`, or `scissors`.\nExample: `.rps rock`"
    );
    return;
  }

  let aruRPS;
  let resultRPS = "";
  let rpsImageURL = "";

  if (Math.floor(Math.random() * 10) === 0) {
    
    const keys = Object.keys(rpsEgg);
    aruRPS = keys[Math.floor(Math.random() * keys.length)];
    resultRPS = "You.. lose?";
    rpsImageURL = rpsEgg[aruRPS];
  } else {
    aruRPS = choicesRPS[Math.floor(Math.random() * choicesRPS.length)];

    if (userRPS === aruRPS) {
      resultRPS = "It's a tie!";
    } else if (
      (userRPS === "rock" && aruRPS === "scissors") ||
      (userRPS === "paper" && aruRPS === "rock") ||
      (userRPS === "scissors" && aruRPS === "paper")
    ) {
      resultRPS = "You got lucky.";
    } else {
      resultRPS = "I win.";
    }

    rpsImageURL = rpsImages[`${userRPS}_${aruRPS}`];
  }

  const erpees = new EmbedBuilder()
    .setColor("#00BFFF")
    .setTitle("Rock Paper Scissors")
    .setDescription(`I choose **${aruRPS}**.`)
    .setImage(rpsImageURL)
    .setFooter({text: resultRPS});

  m.channel.send({ embeds: [erpees] });
}

// [D1] Fun: Hug
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

// [D2] Fun: Pat
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

// [D3] Fun: Slap
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
  
  // [D4] Fun: Punch
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

// [D5] Fun: Bite
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

// [D6] Fun: Waifu Meter
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

// [D7] Fun: Coin flip
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

// [D8] Fun: Cookie
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

// [D9] Fun: Ask Aru
if (m.content === '.yesno') {m.channel.send(AruVar.aruask[Math.floor(Math.random() * AruVar.aruask.length)])}

// [D10] Fun: Aru's Fortune
if (m.content.startsWith('.fortune')) {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(0x00C8FF)
    .setDescription(AruVar.AruFortune[Math.floor(Math.random() * AruVar.AruFortune.length)])
    
    m.channel.send({embeds: [embed]});
}
  
// [D11] Fun: Aru Say
if(m.content === ".say"){m.channel.send("due to a bug, this command has been disabled.")}

// [D12] Fun: Dance
if (m.content === '.dance') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")

    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(AruVar.dancelinks[Math.floor(Math.random() * AruVar.dancelinks.length)])
    
    m.channel.send({embeds: [embed]});
}

// [D13] Fun: Neko
if (m.content === '.neko') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")

    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(AruVar.Neko[Math.floor(Math.random() * AruVar.Neko.length)])
    .setFooter({text: 'Have a neko ≧OwO≦'})

    m.channel.send({embeds: [embed]});
}

// [D14] Fun: Pout
if (m.content.startsWith('.pout')) {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(AruVar.poutlinks[Math.floor(Math.random() * AruVar.poutlinks.length)])
    
    m.channel.send({embeds: [embed]});
}

// [D15] Fun: Bongo
if (m.content === '.bongo') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(AruVar.Bongo[Math.floor(Math.random() * AruVar.Bongo.length)])

    m.channel.send({embeds: [embed]});
  }
  
// [D16] Fun: Card
if (m.content === '.card') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username}, you drew`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(AruVar.cards[Math.floor(Math.random() * AruVar.cards.length)])

  m.channel.send({embeds: [embed]});
}
  
// [D17] Fun: dice
if (m.content === '.dice') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} rolled a`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setDescription(`${Math.floor(Math.random() * 6) + 1}`)

    m.channel.send({embeds: [embed]});
} // please put an actual dice picture to this boring command

// [D18] Fun: AHH
if (m.content.toLowerCase() === '.ahh') {
  const embed = new EmbedBuilder()
  .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
  .setColor(0x3333CC)
  .setImage(AruVar.AHH[Math.floor(Math.random() * AruVar.AHH.length)])
  .setFooter({text: 'srsly why do u like to scream so much :P'})
  
  m.channel.send({embeds: [embed]});
}

// [D19] Fun: Run
if (m.content === '.run') {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} : nope nope nope nope`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.run)

  m.channel.send({embeds: [embed]});
}

// [D20] Fun: Blob
  if (m.content === '.blob') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.danceblobs[Math.floor(Math.random() * AruVar.danceblobs.length)])

  m.channel.send({embeds: [embed]})
}

// [D21] Fun: Kurbeh
if (m.content === '.kurbeh') {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.kurbeh)

  m.channel.send({embeds: [embed]});
}

// [D22] Fun: REEEeeEE
if (m.content === '.ree') {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.reee)
  .setFooter({text: 'REEEEEEE'})

  m.channel.send({embeds: [embed]});
}

// [D23] Fun: What
if (m.content.startsWith('.what')) {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} : ...`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.what[Math.floor(Math.random() * AruVar.what.length)])

  m.channel.send({embeds: [embed]});
}

// [D24] Fun: Ara ara
if (m.content.startsWith('.ara')) {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()
  
  .setAuthor({ name: `${m.author.username} : ara ara`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(AruVar.Ara[Math.floor(Math.random() * AruVar.Ara.length)])
  
  m.channel.send({embeds: [embed]});
}

// [D25] Fun: Press F to pay Respecc
switch(m.content.toUpperCase()) {case '.F': m.channel.send(`${m.author.username} paid their respect.`)} // update this lame ass command

// [D26] Fun: Tableflip
if (m.content === '.tableflip'){m.channel.send('┬─┬ノ( º _ ºノ)').then((msg)=> {setTimeout(function(){msg.edit('(╯°□°）╯︵ ┻━┻');}, 750)});}

// [E1] Utility: Profile
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

// [E2] Utility: User Avatar
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

// [E3] Utility: Help List
if (m.content === '.help') {
  const embed = new EmbedBuilder()
    .setTitle(`Command List (Beta)`)
    .setColor(0x00C8FF)
    .setDescription(AruVar.help)
    .setFooter({text: 'this took me two days to make for some reason'});
  m.channel.send({embeds: [embed]});
}

// [E4] Utility (async): Aru (update this sht with more info)
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
} // note: session is now managed by pm2

// [E5] Utility: Server Info
if (m.content === '.server') {
  if (m.channel.type == "dm") return m.channel.send("hmm, yes. This is DEFINETELY a server.")

  const embed = new EmbedBuilder()
    .setTitle('Here is the server info :)')
    .setColor(0x00C8FF)
    .setThumbnail(`${m.guild.iconURL()}`)
    .setDescription(`**Server name:** ${m.guild.name}\n**Member Count:** ${m.guild.memberCount}`);

    m.channel.send({embeds: [embed]});
}

// [E6] Utility: Connection Speed (ping)
if (m.content === '.ping') {
  const pong = await m.channel.send("Pinging...");
  pong.delete();
  m.channel.send(`-Me and Oreo's internet speed is ${pong.createdTimestamp - m.createdTimestamp}ms.\n-My API Latency is ${Math.round(aru.ws.ping)}ms`)
}

// [E7] Utility: Server Invite
if (m.content === '.invite') {

  const embed = new EmbedBuilder()
    .setTitle(`The System (システム)'s\nServer Invite.`)
    .setColor(0x00C8FF)
    .setThumbnail("https://cdn.discordapp.com/icons/553082144423936001/a_784af86149cd1803265105e26a9ea763.gif")
    .setDescription("[ **http://bit.ly/TSystem** ]");
    m.channel.send({embeds: [embed]});
}

// [E8] Utility: Server Member List
if (m.content === '.members') {m.channel.send('<:soontm:662611931475214376>')}

// [F1] Misc Response: Aru
let callaru = ["yeah?","wot","sup","huh","ewot","nanda","apa",]
switch(m.content.toUpperCase()) {
  case 'ARU': m.channel.send(callaru[Math.floor(Math.random() * callaru.length)])
}

// [F2] Misc Response: nonono, YOU.
switch(m.content.toUpperCase()) {case 'NO U': m.channel.send('no u')}

// [F3] Misc Response: Color Code Chart
if (m.content === '.color') {m.channel.send("https://cdn.discordapp.com/attachments/634155872263864360/1237672731554742272/latest.png?ex=663c800e&is=663b2e8e&hm=e66101c369f700bbe7420b58c86b43cc99f8ad83b3ff3e8e0efd9a9ca3089e94&")}

// [F4] Misc Response: dongo easter egg
if (m.content === '.dongo') {m.channel.send("bapakkau yang dongo")}

// [F5] Misc Response: ewe easter egg
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

// [G1] EXPERIMENTAL: ollama integration
async function queryOpenWebUI(prompt) {
    const response = await fetch(`${process.env.OWU_URL}/api/chat/completions`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OWU_API_KEY}`
        },
        body: JSON.stringify({
            model: process.env.MODEL_NAME,
            messages: [{ role: "user", content: prompt }]
        })
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    
    const data = await response.json();
    return data.choices[0].message.content;
}

if (m.content.startsWith('.ask')) {
    const prompt = m.content.replace('.ask', '').trim();
    
    try {
        await m.channel.sendTyping();
        const reply = await queryOpenWebUI(prompt);
        await m.reply(reply);
    } catch (error) {
        console.error(error);
        await m.reply("can't understand you chief.");
    }
}

}); //end of messageCreate

aru.login(process.env.himitsu);
