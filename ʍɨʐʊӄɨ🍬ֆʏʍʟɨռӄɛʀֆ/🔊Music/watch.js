// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { ytv } = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/youmaker`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const request = require(`request`);
const yts = require(`yt-search`);
const axios = require(`axios`);
const vers = require(`../../package.json`);
const fs = require(`fs`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `watch`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}watch <youtube video name>

🔸𝐔𝐬𝐢𝐧𝐠 𝐋𝐢𝐧𝐤? ${ᴋᴇɪ}ytvideo
🔎𝐒𝐞𝐚𝐫𝐜𝐡 𝐘𝐨𝐮𝐓𝐮𝐛𝐞? ${ᴋᴇɪ}ytsearch`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (arg.length === 0) {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
        const ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ
          .ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            ꜱᴇɴᴅᴇʀɪᴅ,
            ꜱᴇɴᴅᴇʀeceived,
            𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
            𝓜𝓮𝓮ʍօʀɛ
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (𝓜𝖎𝖟𝖚ӄ𝖎.body.includes("http")) {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
        const ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ
          .ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            ꜱᴇɴᴅᴇʀɪᴅ,
            ꜱᴇɴᴅᴇʀeceived,
            𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
            𝓜𝓮𝓮ʍօʀɛ
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else {
        const LinkForGroups = await yts(arg.join(` `));
        const GroupVideos = LinkForGroups.videos.slice(0, 1);
        const filename = `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${ꜱᴇɴᴅᴇʀɪᴅ}_${Date.now()}`;
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        const DVideo = async (url, text = "") => {
          let mime = "";
          var download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
              mime = res.headers["content-type"];
              request(uri)
                .pipe(fs.createWriteStream(filename))
                .on("close", callback);
            });
          };
          download(url, filename, async function () {
            let media = fs.readFileSync(filename);
            let type = mime.split("/")[0] + "Message";
            if (mime === "image/gif") {
              type = MessageType.video;
              mime = Mimetype.gif;
            }
            if (mime.split("/")[0] === "audio") {
              mime = Mimetype.mp4Audio;
            }
            await ӄʀǟӄɨռʐ
              .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, media, type, {
                quoted: chat,
                contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                mimetype: mime,
                caption: text,
              })
              .then(fs.unlinkSync(filename))
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
          }).catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
        };
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        await GroupVideos.forEach(async function (youfound) {
          if (youfound.seconds > "1800") {
            console.log(`
${youfound.videoId}
${youfound.url}
${youfound.title}
${youfound.description}
${youfound.timestamp}
${youfound.duration}
${youfound.ago}
${youfound.views}
${youfound.author.name}
${youfound.thumbnail}`);
            const media = await ӄʀǟӄɨռʐ.prepareMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              { url: youfound.thumbnail },
              MessageType.image,
              {
                mimetype: Mimetype.jpeg,
              }
            );
            const buttons = [
              {
                buttonId: `${ᴋᴇɪ}list`,
                buttonText: { displayText: `${ᴋᴇɪ}list` },
                type: 1,
              },
            ];
            const buttonMessage = {
              contentText: `•@${ꜱᴇɴᴅᴇʀeceived}, 🎥𝐕𝐢𝐝𝐞𝐨
𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗼𝗼𝘀𝗲 𝗙𝗶𝗹𝗲 𝗦𝗺𝗮𝗹𝗹𝗲𝗿 𝗧𝗵𝗲𝗻 𝟯𝟬𝗺𝗶𝗻𝘂𝘁𝗲𝘀!


🍻𝐓𝐢𝐭𝐥𝐞⤞ ${youfound.title}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧⤞ ${youfound.timestamp}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧⤞ ${youfound.description}
🔗𝐋𝐢𝐧𝐤⤞ ${youfound.url}`,
              footerText: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ*  _${
                vers.vers
              }_\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(4)}s_\n📅𝐃𝐚𝐭𝐞: _${Clock}_`,
              buttons: buttons,
              headerType: 4,
              imageMessage: media.message.imageMessage,
            };
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                buttonMessage,
                MessageType.buttonsMessage,
                {
                  quoted: chat,
                  contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                }
              )
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
          } else {
            await ytv(youfound.url)
              .then(async (gotResp) => {
                console.log(youfound.url);
                const { dl_link, thumb, title, filesizeF, filesize } = gotResp;
                console.log(
                  dl_link +
                    "\n" +
                    thumb +
                    "\n" +
                    title +
                    "\n" +
                    filesizeF +
                    "\n" +
                    filesize
                );
                axios
                  .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                  .then(async (a) => {
                    const captionsYtmp4 = `𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚👋🏻 •@${ꜱᴇɴᴅᴇʀeceived},    
🎥𝐕𝐢𝐝𝐞𝐨 𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝘆 𝗼𝗳 𝐕𝐢𝐝𝐞𝐨!


🍻𝐓𝐢𝐭𝐥𝐞⤞ ${youfound.title}
🙈𝐕𝐢𝐞𝐰𝐬⤞ ${youfound.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧⤞ ${youfound.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫⤞ ${youfound.author.name}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧⤞ ${youfound.description}
🔗𝐋𝐢𝐧𝐤⤞ ${youfound.url}`;
                    DVideo(thumb, captionsYtmp4);
                    DVideo(dl_link);
                  });
              })
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
          }
        });
      }
    } catch (ℓαвєяяσя) {
      await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(
        `⬡==========================⬡    🍁 ` +
          ℓαвєяяσя +
          `🍁    ⬡==========================⬡`
      );
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
