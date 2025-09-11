require('dotenv').config();
const { Client , ActivityType , PresenceUpdateStatus , IntentsBitField , EmbedBuilder } = require('discord.js');

const aru = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

aru.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);

    aru.user.setPresence({ 
      activities: [{ type: ActivityType.Custom, name: 'custom', state: 'bruh i died' }], 
      status: PresenceUpdateStatus.DoNotDisturb });

})

aru.on('messageCreate', async (m) => {

// this is so that aru does't respond to herself
if (m.author.bot) {return;}

if (m.content === '.test') {m.channel.send(`return`);} // test

if (m.content.startsWith('.gdrivetest')) { // embed test

  const embed = new EmbedBuilder()
  .setDescription(`output`)
  .setColor(0x00C8FF)
  .setImage("https://i.imgur.com/5Xmmrnx.jpeg")

  m.channel.send({embeds: [embed]});

}

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
var huglinks = ["https://cdn.discordapp.com/attachments/620937132030296065/695996058819494038/tenor.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/695994095000354826/tenor.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/728325460798472242/hugkon.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/728325525013135440/noragamikofuku.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/728325532965666916/wataten1.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/728325537600241764/hugcatgif.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/728325545439527002/animefriends.gif"];

if (m.content.startsWith('.hug')) {
  if (m.channel.type == "DM") return m.author.send("Sorry, this command isn't available on dm!")
  const member = m.mentions.members.first();

  if (!member) {return m.channel.send(`but... who..?`)}

  const embed = new EmbedBuilder()
  .setDescription(`${m.author} **gave** ${member} **a hug!**`)
  .setColor(m.member.displayHexColor)
  .setImage(huglinks[Math.floor(Math.random() * huglinks.length)])

  m.channel.send({embeds: [embed]});

}

// [3b] Fun: Pat
var patlinks = ["https://i.imgur.com/XjsEMiK.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/706837137504337981/3604278f5faba113671a93412540bd47.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/720531535031435304/RooPat.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/726090430290067558/tenor9.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/726090458471858216/tenor99.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/726683067842035722/mJH806Q.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/726683096035885066/Headpat_c47f57_6500559.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/726683133134504057/UWbKpx8.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/726683232925646938/184069.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/726683235807133766/76d.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/726683287979819038/2559.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/726683361183268904/4b2601e941a88daaf775a2e3a1106e2e787e5e7347e3fdb7a143b3cca20ef198.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/726683602212880424/9bbdd3c7884308f36df49d3a3b2eb6f7.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/726683630923153408/187369.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/726683637755543552/rikka_pat.gif",
"https://cdn.discordapp.com/attachments/553082144423936003/726683677228007454/e.gif",
"https://media.discordapp.net/attachments/573101060852416513/747326714459324508/nekopara2.gif"]

if (m.content.startsWith('.pat')) {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const member = m.mentions.members.first();

  if (!member) {return m.channel.send(`but... who..?`)}

  const embed = new EmbedBuilder()
  .setDescription(`${m.author} **gave** ${member} **a pat!**`)
  .setColor(m.member.displayHexColor)
  .setImage(patlinks[Math.floor(Math.random() * patlinks.length)])

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
var bitelinks = ["https://cdn.discordapp.com/attachments/676118559612600371/711758483728498709/bite1.gif",
"https://cdn.discordapp.com/attachments/676118559612600371/711758483292160041/bite2.gif",
"https://cdn.discordapp.com/attachments/676118559612600371/711758453806202940/bite3.gif"];

if (m.content.startsWith('.bite')) {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const member = m.mentions.members.first()

  if (!member) {return m.channel.send(`but... who..?`)}

  const embed = new EmbedBuilder()
  .setDescription(`${m.author} **bites** ${member}**!**`)
  .setColor(m.member.displayHexColor)
  .setImage(bitelinks[Math.floor(Math.random() * bitelinks.length)])   
  
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
var coinflip = ["Heads!","Tails!"]
if (m.content === '.coin') {m.channel.send(coinflip[Math.floor(Math.random() * coinflip.length)])}

// [3h] Fun: Cookie
var cookiegive = [
    "https://cdn.discordapp.com/attachments/573101060852416513/735752567543300126/DBvbJ4grTZuOgR3YyWCliS-w6GOn0R5VN2Zg9zKdefiNhTNh_wXlJOwK-aeICmkPNcUd5YVd-_bseyqA9tnWTg.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/735752592365191268/7c33f9034d0fbd27504683dfcfc619a3.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/735752676154802197/31d1baa26c7c31e22b2e065f7dd4493abeb9ae5a_hq.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/735752697902530620/Yui-eating-Cookie-K-On-Know-Your-Meme.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/735754810430849034/VsrCmoD.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/735754894014677052/unnamed.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/735754901753430016/a7c547272f411631-give-me-da-cookie-via-tumblr-animated-gif-2941662-by.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/735755021668450394/tumblr_oocztvwUbX1sh867ho1_540.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/735755121958322267/tenor.gif"]
    
    if (m.content.startsWith('.cookie')) {
      if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
      const member = m.mentions.members.first()
    
      const cookieembed1 = new EmbedBuilder()
      .setDescription(`have yourself a cookie :cookie:`)
      .setImage(cookiegive[Math.floor(Math.random() * cookiegive.length)])
      .setColor(m.member.displayHexColor)
  
      if (!member) {
        return m.channel.send({ embeds: [cookieembed1] })
      }
    
      const cookieembed2 = new EmbedBuilder()
      .setDescription(`${member} **got a <:heavenly_cookie:637822807631331329> from ${m.author}**`)
      .setImage(cookiegive[Math.floor(Math.random() * cookiegive.length)])
      .setColor(m.member.displayHexColor)
    m.channel.send({ embeds: [cookieembed2] });
    
}

// [3i] Fun: Ask Aru
var aruask = [
    "Yes.",
    "Yeah.",
    "Yep.",
    "No.",
    "Nah.",
    "Nope.",
    "Maybe.",
    "Sort of.",
    "I don't know the answer to that.",
    "I don't know the answer to that. But I do know the answer to life and the universe is 42.",
    "<:kurbeh:629700959563677696>",
    "<:smugeh:641181063527268392>",
    "Well yes... but actually no.",
    "Well yes... but actually no.",
    "~~no~~ yes",
    "~~yes~~ no",
    "Hush <:kurbeh:629700959563677696>"
  ];

    if (m.content === '.ask') {m.channel.send(aruask[Math.floor(Math.random() * aruask.length)])}

// [3j] Fun: Aru's Fortune
var AruFortune = [
    "||Aru: it'll only get worse from now on..||",
    "||Aru: i can sense something bad is about to happen..||",
    "||Aru: oh about that... i don't know HAHA||",
    "||Aru: what? ask again please i was looking at my monitor||",
    "||Aru: hmm? oh, didn't see you there, ask again||",
    "||Aru: your day will get better, i promise :)||",
    "||Aru: i can sense your RNG luck increasing||"
    ];

if (m.content.startsWith('.fortune')) {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(0x00C8FF)
    .setDescription(AruFortune[Math.floor(Math.random() * AruFortune.length)])
    
    m.channel.send({embeds: [embed]});
}
  
// [3k] Fun: Aru Say
if(m.content === ".say"){m.channel.send("due to a bug, this command has been disabled.")}

// [3l] Fun: Dance
var dancelinks = [
    "https://cdn.discordapp.com/attachments/620937132030296065/635117143687692289/giphy.gif",
    "https://cdn.discordapp.com/attachments/620937132030296065/706103404518178857/tenor_1.gif",
    "https://cdn.discordapp.com/attachments/689835202117238883/714092912874356756/downloadfile-1.gif",
    "https://cdn.discordapp.com/attachments/689835202117238883/714092913608491020/tenor-1.gif",
    "https://cdn.discordapp.com/attachments/689835202117238883/714092914484969562/downloadfile.gif",
    "https://cdn.discordapp.com/attachments/689835202117238883/714093017916506122/321921542060201.gif",
    "https://cdn.discordapp.com/attachments/689835202117238883/714093018176815104/SpryAcceptableChick-small.gif",
    "https://cdn.discordapp.com/attachments/689835202117238883/714093018604372028/3SfS.gif",
    "https://cdn.discordapp.com/attachments/689835202117238883/714093144618172426/SolidAliveGreyhounddog-size_restricted.gif",
    "https://cdn.discordapp.com/attachments/620937132030296065/714093789530292264/unnamed_11.gif",
    "https://cdn.discordapp.com/attachments/620937132030296065/714096444264546384/BQM6jEZ-UJLgGUuvrNkYUFgCzK2qkkTvLHsrsaUJo7WV4DVxOq0NdVDTpxiJgyWIARgvKu1tF_IuKELAIJuvww.gif",
    "https://cdn.discordapp.com/attachments/689835202117238883/714093859902324846/695322e0b3edc81c6b2e0824962bb617.gif",
    "https://cdn.discordapp.com/attachments/620937132030296065/714096562703433768/189798505001201.gif",
    "https://cdn.discordapp.com/attachments/620937132030296065/714096603807350804/132643.gif",
    "https://cdn.discordapp.com/attachments/689835202117238883/714093947403763742/anime-dancing-gif-png-5.gif",
    "https://cdn.discordapp.com/attachments/689835202117238883/714094089112387634/clapdance.gif",
    "https://cdn.discordapp.com/attachments/689835202117238883/714094185791357008/tenor-5.gif",
    "https://cdn.discordapp.com/attachments/689835202117238883/714094186395205632/tenor-6.gif",
    "https://cdn.discordapp.com/attachments/689835202117238883/714097986942009394/dance-transparent-anime-9.gif",
    "https://cdn.discordapp.com/attachments/620937132030296065/721329609617965096/1450598701-15eb5d4de793483151c437229e3b845f.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/746722151071219742/rem.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/777478657568276480/usagihakushaku.gif"
    
    ]
if (m.content === '.dance') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")

    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(dancelinks[Math.floor(Math.random() * dancelinks.length)])
    
    m.channel.send({embeds: [embed]});
}

var Neko = [
    "https://cdn.discordapp.com/attachments/564722903267016704/602411476787003402/nekoattention.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/714089450396975104/cioccolata.gif",
    "https://cdn.discordapp.com/attachments/561481507667968010/715011892711522305/e661e8116f07c0a972b50fa22a29475a.gif",
    "https://cdn.discordapp.com/attachments/561481507667968010/715011893340667964/ImpishAliveKoodoo-size_restricted.gif",
    "https://cdn.discordapp.com/attachments/561481507667968010/715011894314008716/1dTC.gif",
    "https://cdn.discordapp.com/attachments/561481507667968010/715011894502490142/79lz.gif",
    "https://cdn.discordapp.com/attachments/561481507667968010/715015777874346054/aef8c09148b0048eff3304afa4d3914d.gif",
    "https://cdn.discordapp.com/attachments/561481507667968010/715015778268610660/giphy.gif",
    "https://cdn.discordapp.com/attachments/561481507667968010/715015779464249364/downloadfile-6.gif",
    "https://cdn.discordapp.com/attachments/561481507667968010/715015820883001354/9c93248d94cfc9fb4a6895f6f08c7b61.gif",
    "https://cdn.discordapp.com/attachments/561481507667968010/715015821096779938/downloadfile-7.gif",
    "https://cdn.discordapp.com/attachments/561481507667968010/715015821461815296/downloadfile-8.gif",
    "https://cdn.discordapp.com/attachments/620937132030296065/721329609617965096/1450598701-15eb5d4de793483151c437229e3b845f.gif"
      ];
if (m.content === '.neko') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")

    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(Neko[Math.floor(Math.random() * Neko.length)])
    .setFooter({text: 'Have a neko ≧OwO≦'})

    m.channel.send({embeds: [embed]});
}

// [3n] Fun: Pout
var poutlinks = ["https://cdn.discordapp.com/attachments/553082144423936003/727606612352827502/tumblr_nham95OVWg1rgfa0po1_500.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/727606685970989086/CFZxvJD.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/727606689813102642/anime-pout-gif-3.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/727606730212769913/7e6.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/727606812735438919/giphy.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/727606892200722533/271668b1037633d7f7ae63dc1a1c29f2.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/727606927311503460/1507187181010.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/727606927827402873/GDeyZDA.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/727606972375105576/cspZdUa.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/727606983380828190/Give-me-the-best-pout-youve-seen-in-anime.-anime.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/727606991253536878/be96b473aab4bc757c7b81f357c991b6.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/727606998589374464/IncredibleFlippantLemming-size_restricted.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/727607013479284736/oxrL5x5.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/727607040712638534/senko_pout.gif",
    "https://tenor.com/view/isekaimama-mamako-mad-cute-gif-14666598"
];
if (m.content.startsWith('.pout')) {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(poutlinks[Math.floor(Math.random() * poutlinks.length)])
    
    m.channel.send({embeds: [embed]});
}

// [3o] Fun: Bongo
var Bongo = [
    "https://cdn.discordapp.com/attachments/553082144423936003/715009542848643102/tenor.gif",
    "https://cdn.discordapp.com/attachments/553082144423936003/714087470131707914/Neko_Bang.gif"
];
if (m.content === '.bongo') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(Bongo[Math.floor(Math.random() * Bongo.length)])

    m.channel.send({embeds: [embed]});
  }
  
  // [3p] Fun: Card
var cards = ['https://cdn.discordapp.com/attachments/573101060852416513/778171730546917416/queen_of_clubs2.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171731180388372/queen_of_diamonds2.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171731495223306/queen_of_hearts2.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171731999326249/queen_of_spades2.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171732435271680/red_joker.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171765968076800/king_of_clubs2.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171732799782922/king_of_diamonds2.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171734578692096/king_of_hearts2.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171734900604948/king_of_spades2.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171735270621194/ace_of_clubs.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171762705039380/ace_of_diamonds.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171763158548520/ace_of_hearts.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171763498156083/ace_of_spades.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171763883769906/black_joker.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171764244873216/jack_of_clubs2.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171764760510484/jack_of_diamonds2.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171765108375572/jack_of_hearts2.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171765590458368/jack_of_spades2.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171784385789962/7_of_hearts.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171784591573032/7_of_spades.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171784888713226/8_of_clubs.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171785177989130/8_of_diamonds.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171785408413696/8_of_hearts.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171785686417418/8_of_spades.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171785903734784/9_of_clubs.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171786071375872/9_of_diamonds.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171786289872946/9_of_hearts.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171841800830986/9_of_spades.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171842036236298/5_of_spades.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171842304540713/6_of_diamonds.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171842527625216/6_of_clubs.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171842791342090/6_of_hearts.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171843194257409/6_of_spades.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171843517087744/7_of_clubs.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171845290754059/5_of_clubs.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171845564170260/7_of_diamonds.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171911896039424/5_of_diamonds.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171912072724500/5_of_hearts.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171912396079114/4_of_clubs.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171912576565258/4_of_diamonds.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171912765046794/4_of_hearts.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171913054847006/4_of_spades.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171913226158080/2_of_clubs.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171913410314240/2_of_diamonds.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171913662496828/2_of_hearts.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171945292136448/10_of_diamonds.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171945517711361/10_of_hearts.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171945799122974/10_of_spades.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171946072408065/3_of_hearts.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171946369024010/10_of_clubs.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171946671538176/3_of_spades.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171946939842580/3_of_diamonds.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171947309727754/2_of_spades.png',
  'https://cdn.discordapp.com/attachments/573101060852416513/778171947581177886/3_of_clubs.png']
  
if (m.content === '.card') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
    const embed = new EmbedBuilder()
    .setAuthor({ name: `${m.author.username}, you drew`, iconURL: `${m.author.avatarURL()}`})
    .setColor(m.member.displayHexColor)
    .setImage(cards[Math.floor(Math.random() * cards.length)])

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
var AHH = [
  "https://i.imgur.com/BG6inrc.png",
  "https://cdn.discordapp.com/attachments/620937132030296065/662590221875150868/1578044160318-951x823.png",
  "https://i.imgur.com/BG6inrc.png",
  "https://i.imgur.com/BG6inrc.png",
  "https://i.imgur.com/BG6inrc.png",
]
if (m.content.toLowerCase() === '.ahh') {
  const embed = new EmbedBuilder()
  .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
  .setColor(0x3333CC)
  .setImage(AHH[Math.floor(Math.random() * AHH.length)])
  .setFooter({text: 'srsly why do u like to scream so much :P'})
  
  m.channel.send({embeds: [embed]});
}

// [3s] Fun: Run
if (m.content === '.run') {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} : nope nope nope nope`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage("https://cdn.discordapp.com/attachments/553082144423936003/695944105536258089/nigerundayo.gif")

  m.channel.send({embeds: [embed]});
}

// [3t] Fun: Blob
var danceblobs = [
  "https://cdn.discordapp.com/attachments/620937132030296065/650327807070830592/645711992673533969-1.gif",
  "https://cdn.discordapp.com/attachments/620937132030296065/665553643537170433/677395972243472emoji.gif",
  "https://cdn.discordapp.com/attachments/620937132030296065/684686155090100224/6196_Party_Blob_Reverse_78906.gif",

];
  if (m.content === '.blob') {
    if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(danceblobs[Math.floor(Math.random() * danceblobs.length)])

  m.channel.send({embeds: [embed]})
}

// [3u] Fun: Kurbeh
if (m.content === '.kurbeh') {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage("https://cdn.discordapp.com/attachments/620937132030296065/656520919694442536/1570186807797-768x768.png")

  m.channel.send({embeds: [embed]});
}

// [3v] Fun: REEEeeEE
if (m.content === '.ree') {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} :`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage("https://cdn.discordapp.com/attachments/553082144423936003/709207112634466364/699271165411344emoji.gif")
  .setFooter({text: 'REEEEEEE'})

  m.channel.send({embeds: [embed]});
}

// [3w] Fun: What
var what = [
  "https://cdn.discordapp.com/attachments/620937132030296065/714093065098362913/unnamed.gif",
  "https://media.giphy.com/media/l1IBhDuqBY767LHGM/giphy.gif",
  
  ];
if (m.content.startsWith('.what')) {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()

  .setAuthor({ name: `${m.author.username} : ...`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(what[Math.floor(Math.random() * what.length)])

  m.channel.send({embeds: [embed]});
}

// [3x] Fun: Ara ara
var Ara = [
  "https://cdn.discordapp.com/attachments/642699261892624395/717581826423521320/community_image_1425833327.gif",
  "https://cdn.discordapp.com/attachments/642699261892624395/717589536829603882/tumblr_n0x2qamh4X1r45wgho1_500.gif",
  "https://cdn.discordapp.com/attachments/620937132030296065/726646649077629069/chika_ara_ara.gif",
  "https://cdn.discordapp.com/attachments/620937132030296065/726646967945396224/Ara-ara-raphiel.gif",
  "https://cdn.discordapp.com/attachments/620937132030296065/726647353695797358/Akeno_ara_ara.gif",
  "https://cdn.discordapp.com/attachments/620937132030296065/726648970121576498/tenor.gif"
      
];
  
if (m.content.startsWith('.ara')) {
  if (m.channel.type == "dm") return m.channel.send("Sorry, this command isn't available on dm!")
  const embed = new EmbedBuilder()
  
  .setAuthor({ name: `${m.author.username} : ara ara`, iconURL: `${m.author.avatarURL()}`})
  .setColor(m.member.displayHexColor)
  .setImage(Ara[Math.floor(Math.random() * Ara.length)])
  
  m.channel.send({embeds: [embed]});
}

// [3y] Fun: Press F to pay Respecc
switch(m.content.toUpperCase()) {case '.F': m.channel.send(`${m.author.username} paid their respect.`)} // update this lame ass command

// [3z] Fun: Tableflip
if (m.content === '.tableflip'){m.channel.send('┬─┬ノ( º _ ºノ)').then((msg)=> {setTimeout(function(){msg.edit('(╯°□°）╯︵ ┻━┻');}, 750)});}

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
    .setDescription("```• Feedback Command •```\n**.Feedback**\nsubmit your feedback/idea using this command and it will appear on Oreo's DMs and <#682131008111247447>!\n\n```• Moderation (mod only) •```\n**.mute**\nphil swift would've been proud... eh i mean-\n\n**.unmute**\n-naem i he ...duorp neeb ev'dluow tfiws lihp\n\n**.kick**\nmess with the law, ya get the boot\n\n**.ban**\nthe only thing much more powerful than Thor's hammer\n\n```• Le Main Thing Commands •```\n**.hug** {user}\nonline anti-depressant (not guaranteed)\n\n**.pat** {user}\npa-patto shinaide kudasai!\n\n**.slap** {user}\nto s l a p p\n\n**.punch** {user}\nORA ORA ORA ORA\n\n**.bite** {user}\nÒwÓ\n\n**.waifu** {user or urself}\ni will rate how waifuable you are >:3 (with the power of rng of course)\n\n**.coin**\n*\"don't flip a coin for its outcome, flip a coin to know which outcome you're hoping for.\"*\n\n**.cookie** {user}\nhave an oreo. i hope ya feel better :>\n\n**.ask**\nask me anything you want! (yes and no questions only)\n\n**.fortune**\ni'm the best fortune teller around here!\n\n**.say**\ndon't make me say stupid stuff plz\n\n**.dance**\njust dance.\n\n**.neko**\ndo not ask.\n\n**.pout**\ni don't even know how should you describe this command\n\n**.bongo**\ncatto\n\n**.card**\ndraw a randomized card from a deck.\n\n**.dice**\na D6 dice. don't gamble.\n\n**.ahh**\nscream your hearts out! (DanZmeN tribute bcuz ye)\n\n**.run**\nNingerundayooo! Smokey!\n\n**.blob**\nwobble wobble\n\n**.kurbeh**\n<:kurbeh:629700959563677696>\n\n**.ree**\nREEEEEEEEEEEEEE\n\n**.what**\nnani the f-\n\n**.ara**\nonee-chan intensifies\n\n**.f**\npress F to pay respect.\n\n**.tableflip**\n(╯°□°）╯︵ ┻━┻\n\n```• Utility •```\n**.profile {user or urself}**\nto check your account information\n\n**.avatar {user or urself}**\nhey look it's you! or.. someone else xd\n\n**.help**\nto... wait a minute..\n\n**.aru**\nna..nani\n\n**.server**\nto check the server's information\n\n**.ping**\nif you're wondering how high is my ping... ||additionally oreo's wifi speed||\n\n**.system**\nthe invite link to『The System』\n\n**.members**\nto list the members available on the server (comming soon)**")
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
var callaru = ["yeah?","wot","sup","huh","ewot","nanda","apa",]
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


}); //end of messageCreate

aru.login(process.env.himitsu);