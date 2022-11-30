let fs = require('fs')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let menu = `
╭───────────────╮
├➤🙋‍♂️ *Hola, ${taguser} aqui esta el menu*
╰───────────────╯

╭───────────────╮
│ *❴INFORMACIÓN❵*
├➤ _${usedPrefix}runtime_
├➤ _${usedPrefix}infohost_
├➤ _${usedPrefix}tts *[lenguaje] [texto]*_
╰───────────────╯
╭───────────────╮
│*❴DESGARGAS❵*
├➤ _${usedPrefix}play *[texto]*_
├➤ _${usedPrefix}play2 *[texto]*_
├➤ _${usedPrefix}play3 *[texto]*_
├➤ _${usedPrefix}ytsearch *[texto]*_
├➤ _${usedPrefix}getaud *[url]*_
├➤ _${usedPrefix}getvid *[url]*_
├➤ _${usedPrefix}ytmp3 *[url]*_
├➤ _${usedPrefix}ytmp4 *[url]*_
├➤ _${usedPrefix}wikipedia *[texto]*_
├➤ _${usedPrefix}google *[texto]*_
├➤ _${usedPrefix}imagen *[texto]*_
├➤ _${usedPrefix}ig *[url]*_
├➤ _${usedPrefix}mediafire *[url]*_
├➤ _${usedPrefix}tiktok *[url]*_
╰───────────────╯
╭───────────────╮
│ *❴IMAGENES RANDOM❵*
├➤ _${usedPrefix}cat_
├➤ _${usedPrefix}dog_
├➤ _${usedPrefix}meme_
├➤ _${usedPrefix}logos_
╰───────────────╯

╭───────────────╮
│ *❴GRUPOS FUNCIONES❵*
├➤ _${usedPrefix}on welcome_
├➤ _${usedPrefix}off welcome_
├➤ _${usedPrefix}invocar *[texto]*_
╰───────────────╯

╭───────────────╮
│ *❴AUDIOS PARA JODER❵*
(uso sin prefijo)
├➤ _Hola_
├➤ _Waza_
├➤ _Ta bien_
├➤ _Te crees muy verga bot_
├➤ _Ya antojaron_
├➤ _Gracias bot_
├➤ _Bot puto_
├➤ _Sopa de macaco_
├➤ _Vapo Vapo_
├➤ _Me enamore_
├➤ _Estoy triste_
├➤ _Ven y sana mi dolor_
├➤ _Fanatica_
├➤ _No digas mamadas_
├➤ _Me duele me quema_
├➤ _No hablo taka taka_
╰───────────────╯

╭───────────────╮
│*❴JUEGOS❵*
├➤ _${usedPrefix}ppt_
├➤ _${usedPrefix}manco_
├➤ _${usedPrefix}math_
├➤ _${usedPrefix}pregunta_
╰───────────────╯

╭───────────────╮
│*❴STICKERS❵*
├➤ _${usedPrefix}sticker *[url]*_
├➤ _${usedPrefix}attp *[texto]*_
├➤ _${usedPrefix}attp2 *[texto]*_
├➤ _${usedPrefix}attp3 *[texto]*_
├➤ _${usedPrefix}ttp *[texto]*_
├➤ _${usedPrefix}ttp2 *[texto]*_
├➤ _${usedPrefix}ttp3 *[texto]*_
├➤ _${usedPrefix}ttp4 *[texto]*_
├➤ _${usedPrefix}ttp5 *[texto]*_
├➤ _${usedPrefix}toimg *[sticker]*_
├➤ _${usedPrefix}togif *[sticker]*_
├➤ _${usedPrefix}sticker *[imagen]*_
├➤ _${usedPrefix}tourl *[imagen]*_
├➤ _${usedPrefix}tourl *[video]*_
├➤ _${usedPrefix}tourl *[audio]*_
╰───────────────╯

╭───────────────╮
│*❴CAMBIADOR DE VOZ❵*
├➤ _${usedPrefix}fat *[nota de voz]*_
├➤ _${usedPrefix}bass *[nota de voz]*_
├➤ _${usedPrefix}blown *[nota de voz]*_
├➤ _${usedPrefix}deep *[nota de voz]*_
├➤ _${usedPrefix}fast *[nota de voz]*_
├➤ _${usedPrefix}robot *[nota de voz]*_
├➤ _${usedPrefix}slow *[nota de voz]*_
├➤ _${usedPrefix}tupai *[nota de voz]*_
├➤ _${usedPrefix}vibra *[nota de voz]*_
├➤ _${usedPrefix}nightcore *[nota de voz]*_
├➤ _${usedPrefix}earrape *[nota de voz]*_
├➤ _${usedPrefix}reverse *[nota de voz]*_
├➤ _${usedPrefix}smooth *[nota de voz]*_
╰───────────────╯

╭───────────────╮
│*❴CREADOR Y BOT OFICIAL❵*
├➤ _${usedPrefix}update_
├➤ _${usedPrefix}banchat_
├➤ _${usedPrefix}unbanchat_
╰───────────────╯
`.trim()
let buttons = [
{ buttonId: '#owner', buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑' }, type: 1 },
{ buttonId: '#runtime', buttonText: { displayText: '𝐑𝐔𝐍𝐓𝐈𝐌𝐄' }, type: 1 },
{ buttonId: '#infohost', buttonText: { displayText: '𝐈𝐍𝐅𝐎𝐇𝐎𝐒𝐓' }, type: 1 }]
let buttonMessage = {
image: fs.readFileSync('./Menu2.jpg'),
caption: menu.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭',
body: null,
thumbnail: fs.readFileSync('./src/logo.png'),
sourceUrl: `https://chat.whatsapp.com/IE9bL1KB1laDzB7tZCB0WR`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(menucompleto|comandos|allmenu|info|speed|estado|menú|menu|help|\?)$/i
handler.fail = null
module.exports = handler
