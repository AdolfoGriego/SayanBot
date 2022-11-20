let fs = require('fs')
let fetch = require('node-fetch')
let { youtubeSearch } = require('@bochilteam/scraper')
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
let caption = `📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
📝 *DESCRIPCIÓN:* ${description}
📆 *PUBLICADO:* ${publishedTime}
⏳ *DURACIÓN:* ${durationH}
👀 *VISTAS:* ${viewH}
📎 *URL:* ${url}`.trim()
let buttons = [
{ buttonId: `${usedPrefix}getaud ${url}`, buttonText: { displayText: 'AUDIOS🎵' }, type: 1 },
{ buttonId: `${usedPrefix}getvid ${url}`, buttonText: { displayText: 'VIDEO📽' }, type: 1 }]
let buttonMessage = {
image: await fetch(thumbnail),
caption: caption,
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
title: 'WhatsAppBot',
body: null,
thumbnail: fs.readFileSync('./src/logo.png'),
sourceUrl: `https://chat.whatsapp.com/IE9bL1KB1laDzB7tZCB0WR`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m }) 
} catch {
m.reply('*ERROR VUELVE INTENTARLO DE NUEVO*')
}}
handler.command = /^(play3)$/i
module.exports = handler
