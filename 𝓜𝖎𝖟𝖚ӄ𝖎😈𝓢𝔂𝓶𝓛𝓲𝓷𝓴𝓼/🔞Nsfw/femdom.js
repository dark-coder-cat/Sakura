// ⦿──────────────────────────────────────────────────────────────────⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const akaneko = require(`akaneko`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
// ⦿──────────────────────────────────────────────────────────────────⦿
module.exports = {
  name: `femdom`,
  description: `ꜰᴇᴍᴀʟᴇ ᴅᴏᴍɪɴᴀᴛɪᴏɴ?`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      // ⦿──────────────────────────────────────────────────────────────────⦿
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      // ⦿──────────────────────────────────────────────────────────────────⦿
      if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
        console.log(ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ);
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
            `*⦿𝐌𝐢𝐳𝐮𝐤𝐢™   ⬡••••••••⬡*
❗ 𝙈𝙚𝙚6 𝙐𝙥𝙙𝙖𝙩𝙚 𝙋𝙚𝙣𝙙𝙞𝙣𝙜

*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐢𝐳𝐮𝐤𝐢™!`,
            MessageType.text
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      } else {
        console.log(`No commits to pull`);
      }
      if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === `120363022474862829@g.us`) {
        return await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              url: await akaneko.nsfw.femdom(),
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              contextInfo: {
                mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
              },
              caption: `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

Nsfw Topic: *Femdom*
Asked By? @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ} (admin)`,
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === `120363025343298860@g.us` && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝗔𝗵𝗺 •@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
シ︎𝐆𝐫𝐨𝐮𝐩👓${_𝔏𝔞𝔟_.HASH}`,
            MessageType.text,
            {
              contextInfo: {
                mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
      } else {
        if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin) {
          return await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              {
                url: _𝔏𝔞𝔟_.ERROR,
              },
              MessageType.image,
              {
                quoted: chat,
                mimetype: Mimetype.png,
                caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, *ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..*`,
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
        } else {
          return await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              {
                url: await akaneko.nsfw.femdom(),
              },
              MessageType.image,
              {
                mimetype: Mimetype.jpeg,
                contextInfo: {
                  mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
                },
                caption: `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

Nsfw Topic: *Femdom*
Asked By? @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ} (admin)`,
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
        }
      }
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿──────────────────────────────────────────────────────────────────⦿
