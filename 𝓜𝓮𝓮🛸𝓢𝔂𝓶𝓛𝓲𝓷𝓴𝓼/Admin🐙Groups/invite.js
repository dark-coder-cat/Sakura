const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/catch");
const ꜱɪɢɴ = require(`../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 𝓜𝓮𝓮git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `invite`,
  description: `Use this command to send a group invite link in the group or personally to someone.`,
  async handle(ʍɛɛℓιєηт, chat, 𝓜𝓮𝓮6, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await 𝓜𝓮𝓮git.fetch();
    var Sender = 𝓜𝓮𝓮6.sender;
    var ɴᴇᴡ𝓜𝓮𝓮6 = await 𝓜𝓮𝓮git.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ɴᴇᴡ𝓜𝓮𝓮6.total != 0) {
      await ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.logGroup,
          `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (𝓜𝓮𝓮6.chatId === "120363025343298860@g.us" && !𝓜𝓮𝓮6.isSenderSUDO) {
      await ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.chatId,
          `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

*•@${personsending}*,
シ︎𝙎𝙥𝙖𝙢/𝙏𝙚𝙨𝙩 𝐆𝐫𝐨𝐮𝐩🛸 https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [𝓜𝓮𝓮6.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
      return;
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (!𝓜𝓮𝓮6.isSenderGroupAdmin) {
      return await ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.chatId,
          {
            url: ꜱɪɢɴ.ERROR,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: 
➛ ʜᴇʏ ᴛʜᴇʀᴇ ɴɪʙʙᴀ!💩

ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..
ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴄᴏᴍᴍᴀɴᴅ ʜᴇʀᴇ..
`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
    }
    if (!𝓜𝓮𝓮6.isGroup) {
      ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.chatId,
          `command only applicable in a group chat.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
      return;
    }
    const code = await ʍɛɛℓιєηт.groupInviteCode(𝓜𝓮𝓮6.chatId);
    if (𝓜𝓮𝓮6.isReply) {
      ʍɛɛℓιєηт
        .sendMessage(
          chat.message.extendedTextMessage.contextInfo.participant,
          `https://chat.whatsapp.com/` + code,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
      ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.chatId,
          `Invite link sent in DM, please check.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
      return;
    }
    ʍɛɛℓιєηт
      .sendMessage(
        𝓜𝓮𝓮6.chatId,
        `https://chat.whatsapp.com/` + code,
        MessageType.text
      )
      .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
    return;
  },
};
// ===============================================================================
// 🎮𝓜𝓮𝓮6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
