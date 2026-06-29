// you are now viewing aru's soul ;)

const Discord = require('discord.js');
const client = new Discord.Client()

// this is the code lines for aru's profile.
client.on('ready', () => {
  console.log(`I'm Online! sending heartbeat...`);
  client.user.setStatus('dnd')
  client.user.setActivity("err..",{type:"WATCHING"});
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

client.on('guildMemberAdd', member => {
  member.send(`Kon'nichiwa! Welcome to 『The System』:D`);
});

//### this section contains the codes for the non-async commands. ###
client.on('message', message => {

  switch(message.content.toUpperCase()) {
    case 'ARU GO TO SLEEP':
      if (!message.member.roles.some(r=>["572924409107447818"].includes(r.id)) )
      return message.channel.send("there's only one cookie who can tell me that <:suspicion_glare:651426206322786317>");
        resetBot(message.channel);
        break;}

        function resetBot(channel) {
          // send channel a message that you're resetting bot [optional]
          channel.send("fine... oyasumi everyone <:zz:574758368233652235>")
          .then(() => client.destroy())
        }

const args = message.content.slice().trim().split(/ +/g);
const command = args.shift().toLowerCase();

if (command === '.feedback') { // 0.suggestion command to report bugs or well... suggestions.
  const feedback = args.join(" ")
  const embed = new RichEmbed()
  .setTitle(`${message.author.tag} sent ↓`)
  .setColor(0x00C8FF)
  .setThumbnail(`${message.author.avatarURL}`)
  .setDescription(feedback)
  client.users.get("526404165401051140").send(embed);
  client.channels.get(`682131008111247447`).send(embed);
  message.channel.send(":white_check_mark: Feedback sent!");
  }

// 1.announcement command for announcing text in a specific channel.
if (command === '.ann') { //for the "announcement" channel. (embed)
if (message.channel.type == "dm") return message.channel.send("ooh you found an easteregg :0")
if (!message.member.roles.some(r=>["572924409107447818"].includes(r.id)) )
return message.channel.send("You can't do that...");
const sayAnnouncement = args.join(" ")
const embed = new RichEmbed()
.setTitle(`🔔 Announcement:`)
.setColor(0x00C8FF)
.setDescription(sayAnnouncement)
.setFooter(' ');
client.channels.get(`567270905093554176`).send(embed);
message.channel.send("Announcement posted!")
}

if (command === '.ann2'){ //for the "announcement" channel. (with no embeds)
if (message.channel.type == "dm") return message.channel.send("ooh you found an easteregg :0")
const sayAnnouncement2 = args.join(" ")
if (!message.member.roles.some(r=>["572924409107447818"].includes(r.id)) )
return message.channel.send("You can't do that...");
client.channels.get(`567270905093554176`).send(sayAnnouncement2)
message.channel.send("Announcement posted!")
} 

if (command === '.poll') { //for the "poll" channel. (embed)
if (message.channel.type == "dm") return message.channel.send("ooh you found an easteregg :0")
if (!message.member.roles.some(r=>["572924409107447818"].includes(r.id)) )
return message.channel.send("You can't do that...");
const sayPoll = args.join(" ")
const embed = new RichEmbed()
.setTitle(`🔔 Poll:`)
.setColor(0x00C8FF)
.setDescription(sayPoll)
.setFooter(' ');
client.channels.get(`686926248370372610`).send(embed);
message.channel.send("Poll posted!")
}
if(command === ".pollsay"){
  if (message.channel.type == "dm") return message.channel.send("ooh you found an easteregg :0")
  const AruSayPoll = args.join(" ");
if (!message.member.roles.some(r=>["572924409107447818"].includes(r.id)) )
return message.channel.send("ooh you found an easteregg :0");
  client.channels.get(`686926248370372610`).send(AruSayPoll);
}

//aru say command hehehe
if(command === ".as"){
  if (message.channel.type == "dm") return message.channel.send("ooh you found an easteregg :0")
  const AruSay = args.join(" ");
if (!message.member.roles.some(r=>["572924409107447818"].includes(r.id)) )
return message.channel.send("ooh you found an easteregg :0");
  client.channels.get(`620937132030296065`).send(AruSay)
}
if(command === ".oneword"){
  if (message.channel.type == "dm") return message.channel.send("ooh you found an easteregg :0")
  const AruSayOneWord = args.join(" ");
if (!message.member.roles.some(r=>["572924409107447818"].includes(r.id)) )
return message.channel.send("ooh you found an easteregg :0");
  client.channels.get(`695405823798542460`).send(AruSayOneWord)
}

// 2.help command for a list of available commands.
if (message.content === '.help') {
  const embed = new RichEmbed()
    .setTitle(`Command List (Beta)`)
    .setColor(0x00C8FF)
    .setDescription("```• Feedback Command •```\n**.Feedback**\nsubmit your feedback/idea using this command and it will appear on Oreo's DMs and <#682131008111247447>!\n\n```• Moderation (mod only) •```\n**.mute**\nphil swift would've been proud... eh i mean-\n\n**.unmute**\n-naem i he ...duorp neeb ev'dluow tfiws lihp\n\n**.kick**\nmess with the law, ya get the boot\n\n**.ban**\nthe only thing much more powerful than Thor's hammer\n\n```• Le Main Thing Commands •```\n**.hug** {user}\nonline anti-depressant (not guaranteed)\n\n**.pat** {user}\npa-patto shinaide kudasai!\n\n**.slap** {user}\nto s l a p p\n\n**.punch** {user}\nORA ORA ORA ORA\n\n**.bite** {user}\nÒwÓ\n\n**.waifu** {user or urself}\ni will rate how waifuable you are >:3 (with the power of rng of course)\n\n**.cookie** {user}\nhave an oreo. i hope ya feel better :>\n\n**.ask**\nask me anything you want! (yes and no questions only)\n\n**.fortune**\ni'm the best fortune teller around here!\n\n**.say**\ndon't make me say stupid stuff plz\n\n**.dance**\njust dance.\n\n**.neko**\ndo not ask.\n\n**.pout**\ni don't even know how should you describe this command\n\n**.bongo**\ncatto\n\n**.dice**\na D6 dice. don't gamble.\n\n**.ahh**\nscream your hearts out! (DanZmeN tribute bcuz ye)\n\n**.run**\nNingerundayooo\n\n**.blob**\nwobble wobble\n\n**.kurbeh**\n<:kurbeh:629700959563677696>\n\n**.ree**\nREEEEEEEEEEEEEE\n\n**.what**\nnani the f-\n\n**.ara**\nonee-chan intensifies\n\n**.f**\npress F to pay respect.\n\n**.tableflip**\n(╯°□°）╯︵ ┻━┻\n\n**.AHHbomination**\nuhh i don't remember this command being here... oh well\n\n```• Utility •```\n**.profile {user or urself}**\nto check your account information\n\n**.avatar {user or urself}**\nhey look it's you! or.. someone else xd\n\n**.help**\nto... wait a minute..\n\n**.aru**\nna..nani\n\n**.server**\nto check the server's information\n\n**.ping**\nif you're wondering how high is my ping... ||additionally oreo's wifi speed||\n\n**.system**\nthe invite link to『The System』\n\n**.members**\nto list the members available on the server (comming soon)**")
    .setFooter(`this took me two days to make for some reason`);
  message.channel.send(embed);
}

// 3.quote of the day command. because you are wise.
  if (command === '.qotd') {
    if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
    if (!message.member.roles.some(r=>["572924409107447818"].includes(r.id)) )
  return message.channel.send("denied.");
    const sayQOTD = args.join(" ")
    message.channel.send('Quote updated <:kirbpc:631157167746973697>')
    const embed = new RichEmbed()
      .setTitle(`Oreo's Quote of the day:`)
      .setColor(0xB5651D)
      .setDescription(sayQOTD);
    client.channels.get(`622648747658051606`).send(embed);
}

// 6.emotes command
var AHH = [
  "https://i.imgur.com/BG6inrc.png",
  "https://cdn.discordapp.com/attachments/620937132030296065/662590221875150868/1578044160318-951x823.png",
  "https://i.imgur.com/BG6inrc.png",
  "https://i.imgur.com/BG6inrc.png",
  "https://i.imgur.com/BG6inrc.png",
]
  if (message.content === '.AHH') {
  const embed = new RichEmbed()
    .setAuthor(`${message.author.username} :`,`${message.author.avatarURL}`)
    .setColor(0x3333CC)
    .setImage(AHH[Math.floor(Math.random() * AHH.length)])
    .setFooter('srsly why do u like to scream so much :P')
  message.channel.send(embed);
}
  if (message.content === '.ahh') {
  const embed = new RichEmbed()
    .setAuthor(`${message.author.username} :`,`${message.author.avatarURL}`)
    .setColor(0x3333CC)
    .setImage(AHH[Math.floor(Math.random() * AHH.length)])
    .setFooter('srsly why do u like to scream so much :P')
  message.channel.send(embed);
}

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
  "Hush <:kurbeh:629700959563677696>"
];
  if (message.content === '.ask') {
  message.channel.send(aruask[Math.floor(Math.random() * aruask.length)])  
}

var aruask2 = [
  "a","spaghetti"
];
  if (message.content === '.ask2') {
  message.channel.send(aruask2[Math.floor(Math.random() * aruask2.length)])  
}

  if (message.content === '.tableflip') {
  message.channel.send("(╯°□°）╯︵ ┻━┻");
}
  if (message.content === '.dice') {
    if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  const embed = new RichEmbed()
  .setTitle(`🎲 ${message.author.username} rolled a:`)
  .setColor(message.member.displayHexColor)
  .setDescription(Math.floor(Math.random() * 6) + 1)
message.channel.send(embed);
}

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
"https://cdn.discordapp.com/attachments/573101060852416513/746722151071219742/rem.gif"

]
if (message.content === '.dance') {
  if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
const embed = new RichEmbed()
  .setAuthor(`${message.author.username} :`,`${message.author.avatarURL}`)
  .setColor(message.member.displayHexColor)
  .setImage(dancelinks[Math.floor(Math.random() * dancelinks.length)])
message.channel.send(embed);
}

if (message.content === '.run') {
  if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
const embed = new RichEmbed()
  .setAuthor(`${message.author.username} : nope nope nope nope`,`${message.author.avatarURL}`)
  .setColor(message.member.displayHexColor)
  .setImage("https://cdn.discordapp.com/attachments/553082144423936003/695944105536258089/nigerundayo.gif")
message.channel.send(embed);
}

var danceblobs = [
  "https://cdn.discordapp.com/attachments/620937132030296065/650327807070830592/645711992673533969-1.gif",
  "https://cdn.discordapp.com/attachments/620937132030296065/665553643537170433/677395972243472emoji.gif",
  "https://cdn.discordapp.com/attachments/620937132030296065/684686155090100224/6196_Party_Blob_Reverse_78906.gif",

];
  if (message.content === '.blob') {
    if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  const embed = new RichEmbed()
    .setAuthor(`${message.author.username} :`,`${message.author.avatarURL}`)
    .setColor(message.member.displayHexColor)
    .setImage(danceblobs[Math.floor(Math.random() * danceblobs.length)])
  message.channel.send(embed);
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
  if (message.content === '.neko') {
    if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  const embed = new RichEmbed()
    .setAuthor(`${message.author.username} :`,`${message.author.avatarURL}`)
    .setColor(message.member.displayHexColor)
    .setImage(Neko[Math.floor(Math.random() * Neko.length)])
    .setFooter('Have a neko ≧OwO≦')
  message.channel.send(embed);
}

var Bongo = [
  "https://cdn.discordapp.com/attachments/553082144423936003/715009542848643102/tenor.gif",
  "https://cdn.discordapp.com/attachments/553082144423936003/714087470131707914/Neko_Bang.gif"
  ];
  if (message.content === '.bongo') {
    if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  const embed = new RichEmbed()
    .setAuthor(`${message.author.username} :`,`${message.author.avatarURL}`)
    .setColor(message.member.displayHexColor)
    .setImage(Bongo[Math.floor(Math.random() * Bongo.length)])
  message.channel.send(embed);
}

  if (message.content === '.kurbeh') {
    if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  const embed = new RichEmbed()
    .setAuthor(`${message.author.username} :`,`${message.author.avatarURL}`)
    .setColor(message.member.displayHexColor)
    .setImage("https://cdn.discordapp.com/attachments/620937132030296065/656520919694442536/1570186807797-768x768.png")
  message.channel.send(embed);
}

if (message.content === '.ree') {
  if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
const embed = new RichEmbed()
  .setAuthor(`${message.author.username} :`,`${message.author.avatarURL}`)
  .setColor(message.member.displayHexColor)
  .setImage("https://cdn.discordapp.com/attachments/553082144423936003/709207112634466364/699271165411344emoji.gif")
  .setFooter('REEEEEEE')
message.channel.send(embed);
}

var what = [
"https://cdn.discordapp.com/attachments/620937132030296065/714093065098362913/unnamed.gif",
"https://media.giphy.com/media/l1IBhDuqBY767LHGM/giphy.gif",

];
if (message.content.startsWith('.what')) {
  if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")

  const embed = new RichEmbed()
  .setAuthor(`${message.author.username} : ...`,`${message.author.avatarURL}`)
  .setColor(message.member.displayHexColor)
  .setImage(what[Math.floor(Math.random() * what.length)])
message.channel.send(embed);
}

var AruFortune = [
  "||it'll only get worse from now on..||",
  "||i can sense something bad is about to happen..||",
  "||oh about that... i don't know HAHA||",
  "||what? ask again please i was looking at my monitor||",
  "||hmm? oh, didn't see you there, ask again||",
  "||your day will get better, i promise :)||",
  "||i can sense your RNG luck increasing||"
  
  ];
  if (message.content.startsWith('.fortune')) {
    if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  
    const embed = new RichEmbed()
    .setAuthor(`${message.author.username} :`,`${message.author.avatarURL}`)
    .setColor(0x00C8FF)
    .setDescription(AruFortune[Math.floor(Math.random() * AruFortune.length)])
  message.channel.send(embed);
  }

  var Ara = [
"https://cdn.discordapp.com/attachments/642699261892624395/717581826423521320/community_image_1425833327.gif",
"https://cdn.discordapp.com/attachments/642699261892624395/717589536829603882/tumblr_n0x2qamh4X1r45wgho1_500.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/726646649077629069/chika_ara_ara.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/726646967945396224/Ara-ara-raphiel.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/726647353695797358/Akeno_ara_ara.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/726648970121576498/tenor.gif"
    
    ];
    if (message.content.startsWith('.ara')) {
      if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
    
      const embed = new RichEmbed()
      .setAuthor(`${message.author.username} : ara ara`,`${message.author.avatarURL}`)
      .setColor(message.member.displayHexColor)
      .setImage(Ara[Math.floor(Math.random() * Ara.length)])
    message.channel.send(embed);
    }

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
    if (message.content.startsWith('.pout')) {
      if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
    
      const embed = new RichEmbed()
      .setAuthor(`${message.author.username} :`,`${message.author.avatarURL}`)
      .setColor(message.member.displayHexColor)
      .setImage(poutlinks[Math.floor(Math.random() * poutlinks.length)])
    message.channel.send(embed);
    }
    
    var crylinks = ["https://cdn.discordapp.com/attachments/620937132030296065/728925985805959188/himouto1.gif",
    "https://cdn.discordapp.com/attachments/620937132030296065/728925994144235621/taiga1.gif",
    "https://cdn.discordapp.com/attachments/620937132030296065/728925999302967316/kon.gif",
    "https://cdn.discordapp.com/attachments/620937132030296065/728926013702012998/kanna1.gif",
    "https://cdn.discordapp.com/attachments/620937132030296065/728926017045004338/wata1.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932048521134080/giphy_1.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932074563567647/giphy.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932092733554708/original_1.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932165043093504/UjIb9DT.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932183586242640/432.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932259780100146/source_1.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932310539436082/WearyCourageousAsianporcupine-size_restricted.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932348594356264/original.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932363249254459/73b13bcd2590cd93ca1ca9bbc7f917be.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932382769676378/7239144f9492a477092d05271e10657b9e1a335b_00.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932397273579571/1563221881_1482272358_anime-cry-cute-gif-Favim.com-2453915.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932397004881991/93456.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932446816436254/0f3.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932459156209664/AnguishedBestEft-size_restricted.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932473605718046/Anime-Cry-GIF-Anime-Cry-Crying-Discover-Share-GIFs.gif",
    "https://cdn.discordapp.com/attachments/573101060852416513/728932535194615820/bocchi_cri.gif"
];
    if (message.content.startsWith('.cry')) {
      if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
    
      const embed = new RichEmbed()
      .setAuthor(`${message.author.username} :`,`${message.author.avatarURL}`)
      .setColor(message.member.displayHexColor)
      .setImage(crylinks[Math.floor(Math.random() * crylinks.length)])
    message.channel.send(embed);
    }

  if (message.content.startsWith('.waifu')) {
    if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
    const member = message.mentions.members.first()

  const waifu1 = new RichEmbed()
  .setTitle(message.author.tag)
  .setThumbnail(message.author.avatarURL)
  .setColor(0x00C8FF)
  .setDescription(`you are ${Math.floor(Math.random() * 100) + 0}/100 waifuable uwu`)

if (!member) {
  return message.channel.send(waifu1)
}

const waifu2 = new RichEmbed()
  .setTitle(`${member.user.tag}`)
  .setThumbnail(`${member.user.avatarURL}`)
  .setColor(0x00C8FF)
  .setDescription(`you are ${Math.floor(Math.random() * 100) + 0}/100 waifuable uwu`)
message.channel.send(waifu2)

}

var coinflip = ["Heads!","Tails!"]
if (message.content === '.coinflip') {
  message.channel.send(coinflip[Math.floor(Math.random() * coinflip.length)])
}

if (message.content.startsWith('.slap')) {
  if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  const member = message.mentions.members.first()

  if (!member) {
    return message.channel.send(
      `but... who..?`
    )
  }

  const embed = new RichEmbed()
  .setDescription(`${message.author} **slapped** ${member}**!**`)
  .setColor(message.member.displayHexColor)
  .setImage("https://i.imgur.com/Li9mx3A.gif")
message.channel.send(embed);

}

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

if (message.content.startsWith('.pat')) {
  if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  const member = message.mentions.members.first()

  if (!member) {
    return message.channel.send(
      `but... who..?`
    )
  }

  const embed = new RichEmbed()
  .setDescription(`${message.author} **gave** ${member} **a pat!**`)
  .setColor(message.member.displayHexColor)
  .setImage(patlinks[Math.floor(Math.random() * patlinks.length)])
message.channel.send(embed);

}

var kisslinks = ["http://i.imgur.com/kJEr7Vu.gif","http://i.imgur.com/p6hNamc.gif",
"http://i.imgur.com/LBWIJpu.gif","http://i.imgur.com/ql3FvuU.gif","http://i.imgur.com/AicG7H6.gif",
"http://i.imgur.com/PPw83Ug.gif","https://cdn.nekos.life/kiss/kiss_130.gif",
"https://cdn.nekos.life/kiss/kiss_016.gif","https://cdn.nekos.life/kiss/kiss_006.gif",
"https://cdn.nekos.life/kiss/kiss_085.gif","https://cdn.nekos.life/kiss/kiss_072.gif",
"https://cdn.nekos.life/kiss/kiss_121.gif","https://cdn.nekos.life/kiss/kiss_094.gif",
"https://cdn.nekos.life/kiss/kiss_040.gif","https://cdn.nekos.life/kiss/kiss_133.gif",
"https://cdn.nekos.life/kiss/kiss_034.gif","https://cdn.nekos.life/kiss/kiss_103.gif",
"https://cdn.nekos.life/kiss/kiss_135.gif"
]

if (message.content.startsWith('.kiss')) {
  if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  const member = message.mentions.members.first()

  if (!member) {
    return message.channel.send(
      `but... who..?`
    )
  }

  const embed = new RichEmbed()
  .setDescription(`${message.author} **gave** ${member} **a kiss!**`)
  .setColor(message.member.displayHexColor)
  .setImage(kisslinks[Math.floor(Math.random() * kisslinks.length)])
message.channel.send(embed);

}

var huglinks = ["https://cdn.discordapp.com/attachments/620937132030296065/695996058819494038/tenor.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/695994095000354826/tenor.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/728325460798472242/hugkon.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/728325525013135440/noragamikofuku.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/728325532965666916/wataten1.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/728325537600241764/hugcatgif.gif",
"https://cdn.discordapp.com/attachments/620937132030296065/728325545439527002/animefriends.gif"];

if (message.content.startsWith('.hug')) {
  if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  const member = message.mentions.members.first()

  if (!member) {
    return message.channel.send(
      `but... who..?`
    )
  }

  const embed = new RichEmbed()
  .setDescription(`${message.author} **gave** ${member} **a hug!**`)
  .setColor(message.member.displayHexColor)
  .setImage(huglinks[Math.floor(Math.random() * huglinks.length)])
message.channel.send(embed);

}

var bitelinks = ["https://cdn.discordapp.com/attachments/676118559612600371/711758483728498709/bite1.gif",
"https://cdn.discordapp.com/attachments/676118559612600371/711758483292160041/bite2.gif",
"https://cdn.discordapp.com/attachments/676118559612600371/711758453806202940/bite3.gif"];

if (message.content.startsWith('.bite')) {
  if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  const member = message.mentions.members.first()

  if (!member) {
    return message.channel.send(
      `but... who..?`
    )
  }

  const embed = new RichEmbed()
  .setDescription(`${message.author} **bites** ${member}**!**`)
  .setColor(message.member.displayHexColor)
  .setImage(bitelinks[Math.floor(Math.random() * bitelinks.length)])
message.channel.send(embed);

}

if (message.content.startsWith('.punch')) {
  if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  const member = message.mentions.members.first()

  if (!member) {
    return message.channel.send(
      `but... who..?`
    )
  }

  const embed = new RichEmbed()
  .setDescription(`${message.author} **Ora Ora'd** ${member} **!**`)
  .setColor(message.member.displayHexColor)
  .setImage("https://i.imgur.com/TOx70Jp.gif")
message.channel.send(embed);

}

var highfive = ["https://cdn.discordapp.com/attachments/573101060852416513/746635374146748416/9e9111c879d0e5ecf5bc1e8249e7f140.gif",
"https://cdn.discordapp.com/attachments/573101060852416513/746635416135794709/200.gif",
"https://cdn.discordapp.com/attachments/573101060852416513/746635453511368754/Pr1rEzX.gif",
"https://cdn.discordapp.com/attachments/573101060852416513/746635463141490720/68747470733a2f2f7061312e6e61727669692e636f6d2f363437352f61366637393535326334333566613633343432323535.gif",
"https://cdn.discordapp.com/attachments/573101060852416513/746635562097705000/5e0.gif",
"https://cdn.discordapp.com/attachments/573101060852416513/746635581391372339/tenor.gif",
"https://cdn.discordapp.com/attachments/573101060852416513/746635650450587648/tenor_1.gif",
"https://cdn.discordapp.com/attachments/573101060852416513/746635672236064768/unnamed.gif",
"https://cdn.discordapp.com/attachments/573101060852416513/746635696160374824/fcb1446b74166b0860ace50ed8b33686.gif",
"https://cdn.discordapp.com/attachments/573101060852416513/746635698743934976/rvBVoey.gif",
"https://cdn.discordapp.com/attachments/573101060852416513/746635759125135370/lls.gif"]

if (message.content.startsWith('.highfive')) {
  if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  const member = message.mentions.members.first()

  if (!member) {
    return message.channel.send(
      `but... who..?`
    )
  }

  const embed = new RichEmbed()
  .setDescription(`${message.author} **high five'd** ${member} **!**`)
  .setColor(message.member.displayHexColor)
  .setImage(highfive[Math.floor(Math.random() * highfive.length)])
message.channel.send(embed);

}

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

if (message.content.startsWith('.cookie')) {
  if (message.channel.type == "dm") return message.channel.send("Sorry, this command isn't available on dm!")
  const member = message.mentions.members.first()

  if (!member) {
    return message.channel.send(
      `but... who..?`
    )
  }

  const embed = new RichEmbed()
  .setDescription(`${member} **got a <:heavenly_cookie:637822807631331329> from ${message.author}**`)
  .setImage(cookiegive[Math.floor(Math.random() * cookiegive.length)])
  .setColor(message.member.displayHexColor)
message.channel.send(embed);

}



  if (message.content === '.f') {
  message.channel.send(`${message.author.username} paid their respect ;-;`);
}
  if (message.content === '.F') {
  message.channel.send(`${message.author.username} paid their respect ;-;`);
}
  if (message.content === 'no u') {
    message.channel.send('<:noudeflector:556419350861578241>');
    message.channel.send(':)');
}
if (message.content === 'aru') {
  message.channel.send("yeah?");
}
if (message.content === 'Aru') {
  message.channel.send("yeah?");
}
if (message.content === '.color') {
  message.channel.send("https://media.discordapp.net/attachments/564722903267016704/576528359421509635/hextable.jpg")
}
if (message.content === '.test') {message.channel.send('test (10kms)')
  .then(msg => {
    msg.delete(10000)
  })
  .catch();
}
if (command === '.test1') {
  if (message.channel.type == "dm") return message.channel.send("hmm, yes. This is DEFINETELY a server.")
  const embed = new Discord.MessageEmbed()
    .setColor(message.member.displayHexColor)
    .setDescription(`desc`);
  message.channel.send(embed);
}

if (message.content === '.test2') {
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(message.member.displayHexColor)
	.setTitle('this is a title')
	.setDescription('this is a description')
message.channel.send(exampleEmbed);
  }

if(command === ".say"){message.channel.send("due to a bug, this command has been disabled.")}

if(command === ".h"){message.channel.send("h")}

//(feel free to add more misc commands above.)

// 7.to fetch the author's avatar link (and tagged person).
if (message.content.startsWith('.avatar')) {
  if (message.channel.type == "dm") return message.channel.send(
    "Sorry, this command isn't available on dm!")
  const member = message.mentions.members.first()

  const avembed1 = new RichEmbed()
  .setAuthor(`Here is ${message.author.username}'s avatar :`)
  .setTitle(` `)
  .setColor(message.member.displayHexColor)
  .setImage(`${message.author.avatarURL}`)

  if (!member) {
    return message.channel.send(avembed1)
  }

  const avembed2 = new RichEmbed()
  .setAuthor(`Here is ${member.user.tag}'s avatar :`)
  .setTitle(` `)
  .setColor(0x00C8FF)
  .setImage(`${member.user.avatarURL}`);
message.channel.send(avembed2)

}

// 8.used to fetch the server info where the command is triggered.
  if (message.content === '.server') {
    if (message.channel.type == "dm") return message.channel.send("hmm, yes. This is DEFINETELY a server.")
    const embed = new RichEmbed()
      .setTitle('Here is the server info :)')
      .setColor(0x00C8FF)
      .setThumbnail(`${message.guild.iconURL}`)
      .setDescription(`**Server name:** ${message.guild.name}\n**Member Count:** ${message.guild.memberCount}`);
    message.channel.send(embed);
}

// 9.to fetch the author information
if (message.content.startsWith('.profile')) {
  if (message.channel.type == "dm") return message.channel.send(
    "Sorry, this command isn't available on dm!")
  const member = message.mentions.members.first()

  const profembed1 = new RichEmbed()
  .setTitle(`${message.author.username}'s profile:`)
  .setColor(message.member.displayHexColor)
  .setThumbnail(`${message.author.avatarURL}`)
  .setDescription(`**•Account Username:**\n${message.author.username}#${message.author.discriminator}\n**•Account ID:**\n${message.author.id}\n**•Account Created At:**\n${message.author.createdAt}\n`);

  if (!member) {
    return message.channel.send(profembed1)
  }

  const profembed2 = new RichEmbed()
  .setTitle(`${member.user.username}'s profile:`)
  .setColor(0x00c8ff)
  .setThumbnail(`${member.user.avatarURL}`)
  .setDescription(`**•Account Username:**\n${member.user.username}#${member.user.discriminator}\n**•Account ID:**\n${member.user.id}\n**•Account Created At:**\n${member.user.createdAt}\n`);
message.channel.send(profembed2)

}

// 10.rules and members cmd (REMEMBER TO UPDATE ME)
  if (message.content === '.rule') {
  message.channel.send('check <#556862352339894290> for rules ;)');
}

  if (message.content === '.rules') {
  message.channel.send('check <#556862352339894290> for rules ;)');
}

  if (message.content === '.members') {
  message.channel.send('<:soontm:662611931475214376>')
}

// 11.(Beta) MODERATION COMMANDS!!! now... wear the boot and wield the hammer with pride!
//here's the kick command...
if (message.content.startsWith('.kick')) {
  if (message.channel.type == "dm") return message.channel.send("This is dm. U got noone to kick.")
  const member = message.mentions.members.first()

  if (!member) {
    return message.channel.send(
      `succesfully kicked the air!`
    )
  }

  if (!member.kickable) {
    return message.reply(`I can't kick this user. Sorry!`)
  }

  if (!message.member.roles.some(r=>["572924409107447818","688222780248162493"].includes(r.id)) )
  return message.channel.send("but you don't have the boots to do so...");

  return member
    .kick()
    .then(() => message.channel.send(`buh bay ${member.user.tag}!`))
    .catch(() => message.reply(`Sorry, an error occured.`))
}
//and here's the ban command
if (message.content.startsWith('.ban')) {
  if (message.channel.type == "dm") return message.channel.send("This is dm. U got noone to kick.")
  const member = message.mentions.members.first()

  if (!member) {
    return message.channel.send(
      `succesfully banned the air!`
    )
  }

  if (!member.bannable) {
    return message.reply(`I can't ban this user. Sorry!`)
  }

  if (!message.member.roles.some(r=>["572924409107447818","688222780248162493"].includes(r.id)) )
  return message.channel.send("but you don't have the hammer to do so...");

  return member
    .ban()
    .then(() => message.channel.send(`and don't come back, ${member.user.tag}!`))
    .catch(() => message.reply(`Sorry, an error occured.`))
}
//muteeee
if (message.content.startsWith('.mute')) {
  if (message.channel.type == "dm") return message.channel.send("This is dm. U got noone to unmute.")
  const member = message.mentions.members.first()

  if (!member) {
    return message.channel.send(
      `shut up, air!`
    )
  }

  if (!message.member.roles.some(r=>["572924409107447818","688222780248162493","621293786785513492"].includes(r.id)) )
  return message.channel.send("but you dont have the Flex Tape® to do so...");

  var role = message.guild.roles.find(role => role.name === "Muted");

  return member
  .addRole(role)
  .then(() => message.channel.send(`${member.user.tag} is FlexTapped®.`))
  .catch(() => message.reply(`Sorry, an error occured.`))
}
//unmutee
if (message.content.startsWith('.unmute')) {
  if (message.channel.type == "dm") return message.channel.send("This is dm. U got noone to unmute.")
  const member = message.mentions.members.first()

  if (!member) {
    return message.channel.send(
      `unmuted the air!`
    )
  }

  if (!message.member.roles.some(r=>["572924409107447818","688222780248162493","621293786785513492"].includes(r.id)) )
  return message.channel.send("but you dont have the Flex Tape® to do so...");

  var role = message.guild.roles.find(role => role.name === "Muted");

  return member
  .removeRole(role)
  .then(() => message.channel.send(`${member.user.tag} is unmuted.`))
  .catch(() => message.reply(`Sorry, an error occured.`))
}

// 12.our server's ad bcuz y not :kek:
  if (message.content === '.system') {
  const embed = new RichEmbed()
    .setTitle(`The System (システム)'s\nServer Invite.`)
    .setColor(0x00C8FF)
    .setThumbnail("https://cdn.discordapp.com/attachments/564722903267016704/623169343815024640/Logopit_1568476913407.jpg")
    .setDescription("[ **http://bit.ly/TSystem** ]");
  message.channel.send(embed);
}

//^ add new "if" or for non async-required com commands here.


//WARNING, THIS IS A TESTING SECTION FOR NEW FEATURES.

if(message.content === '.ok') {
  message.react('👌');
}

if(message.content === '.coffin') {
  message.channel.send('https://tenor.com/view/rip-coffin-black-ghana-celebrating-gif-16743302')
}

if (message.content === '.AHHbomination') {
  const embed = new RichEmbed()
  .setImage("https://i.imgur.com/BG6inrc.png")
  .setAuthor(`.`,`https://i.imgur.com/BG6inrc.png`)
  .setThumbnail("https://i.imgur.com/BG6inrc.png")
  .setFooter(`.`,`https://i.imgur.com/BG6inrc.png`)
  message.channel.send(embed);
}


}); //non-async section closing.

//### this section is for async-required commands. ###
client.on('message', async message => {

// async configuration:


//uptime calculations.
  let totalSeconds = (client.uptime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;

// 1.this command sends aru's current status and description (credits going to be added soon).
  if (message.content === '.aru') {
    if (message.channel.type == "dm") return message.channel.send("This can only be done on servers...")
    const m = await message.channel.send("Me?");
    m.delete();

    const embed = new RichEmbed()
      .setTitle(`Hello, my name is Aru, Hajimemashite ;)`)
      .setColor(0x00C8FF)
      .setThumbnail("https://cdn.discordapp.com/attachments/634155872263864360/677859137723564052/Aru2.png")
      .setDescription(`•Ping\n-My Latency is ${m.createdTimestamp - message.createdTimestamp}ms.\n-My API Latency is ${Math.round(client.ping)}ms\n-I've been around for ${hours} hour(s)`);
    message.channel.send(embed);
}

// 2. a command that will only send the ping instead of the whole information.
  if (message.content === '.ping') {
    const m = await message.channel.send("Pinging...");
    m.delete();
    message.channel.send(`-Me and Oreo's internet speed is ${m.createdTimestamp - message.createdTimestamp}ms.\n-My API Latency is ${Math.round(client.ping)}ms`)
  }



//^ add new "if" for async required command here.

}); // async section closing

client.login('totally-not-a-hardcoded-token'); //the bot token login

// note from the future: before you ask i've LEARNED from my mistakes since.