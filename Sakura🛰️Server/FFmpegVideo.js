`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const { MessageType } = require(`@adiwajshing/baileys`);
const Sakura_Buttons = require(`./Sakura_Buttons`);
const { YouTube_Video } = require(`./youmaker`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
const vers = require(`../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const cleanRF = require(`./cleanRF`);
const TinyURL = require("tinyurl");
const fs = require(`fs`);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
exports.FFmpegVideo = async (ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat, Found, userBadge) => {
try {
var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
const defaultnm = ֆǟӄʊʀǟ.commandName;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
var FFmpegFile = `./Sakura☕Shop/${Date.now().toString()}_${աɦօֆɛռȶɦǟȶ.toString()}.mp4`;
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
await Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🌿𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁!
║🎬 𝗙𝗶𝗹𝗲 𝗧𝘆𝗽𝗲: _Video_
║⏰ 𝗪𝗮𝗶𝘁 𝗧𝗶𝗺𝗲: _Depends on Length of file._
╚════════════╝`
);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
YouTube_Video(Found.url).then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res;
TinyURL.shorten(dl_link).then(
async function (DirectFile) {
require(`child_process`).exec(
`ffmpeg -i '${DirectFile}' '${FFmpegFile}'`,
async (Error) => {
if (Error) {
console.log(
`⬡═══════════════════| 🔺𝐅𝐅𝐦𝐩𝐞𝐠 𝐄𝐫𝐫𝐨𝐫🔺 |═══════════════════⬡` +
Error
);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
} else {
console.log(
`⬡═══════════════════| 🥂𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝🥂 |═══════════════════⬡`
);
try {
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ֆǟӄʊʀǟ.chatId,
fs.readFileSync(FFmpegFile),
MessageType.video,
{ mimetype: "video/mp4" }
);
await ӄʀǟӄɨռʐ
.sendMessage(
ֆǟӄʊʀǟ.chatId,
{
contentText: `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║🍻 𝗧𝗶𝘁𝗹𝗲: ${Found.title}
║🙈 𝗩𝗶𝗲𝘄𝘀: ${Found.views}
║⏰ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${Found.timestamp}
║✒️ 𝗔𝘂𝘁𝗵𝗼𝗿: ${Found.author.name}
║✒️ 𝗥𝗲𝗹𝗲𝗮𝘀𝗲𝗱: ${Found.ago}
║📜 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}
║🦋 𝗗𝗶𝗿𝗲𝗰𝘁-𝗗𝗹: ${DirectFile}
║🔗 𝗟𝗶𝗻𝗸: ${Found.url}
╚════════════╝`,
footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
buttons: [
{
buttonId: `${ᴋᴇɪ}help`,
buttonText: { displayText: `${ᴋᴇɪ}help` },
type: 1,
},
],
headerType: 5,
videoMessage: media.message.videoMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
await cleanRF.cleanRF(FFmpegFile);
} catch (Error) {
console.log(
`⬡═══════════════════| 🔺𝐅𝐅𝐦𝐩𝐞𝐠 𝐄𝐫𝐫𝐨𝐫🔺 |═══════════════════⬡` +
Error
);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
}
}
}
);
},
async function (Error) {
console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
}
);
});
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
} catch (Error) {
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
}
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
