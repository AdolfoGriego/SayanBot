process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
let { MessageType } = require('@adiwajshing/baileys')
let yts = require('yt-search')
let fs = require('fs')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async(m, { conn, command, text, isPrems, isOwner, DevMode, args, usedPrexi }) => {
conn.play = conn.play ? conn.play : {}
if (!text) throw '*COLOCA EL NOMBRE EJEMPLO: #play volar volar cartel de santa*'
try {
let results = await yts(text)
let vid = results.all.find(video => video.seconds < 3600)
let { dl_link, thumb, title, filesize, filesizeF } = await (/2$/.test(command) ? ytv : yta)(vid.url, 'id4')
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${dl_link}`)).text()
conn.sendFile(m.chat, thumb, 'error.jpg', `
✍️ *TITULO:* ${title}
*⚖ PESO:* ${filesizeF}
*📎 URL:* ${vid.url}
*📥 DESCARGA:* ${shortUrl}
`.trim(), m, false, { 
contextInfo: { externalAdReply: {
title: 'ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ',
body: '©WhatsAppBot', 
sourceUrl: `https://github.com/AdolfoGriego/WhatsAppBot`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})
conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*✍️ TITULO:* ${title}
*⚖ PESO:* ${filesizeF}
*📎 URL:* ${vid.url}
`.trim(), m)
} catch {
try {

m.reply(`*LA DESCARGA DEL AUDIO/VIDEO FALLO INTENTA CON ESTE COMANDO #play3 *[texto]*_`)  
let res = await (await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`))    
let json = await res.json()
conn.sendMessage(m.chat, { audio: { url: json.result.audio }, mimetype: 'audio/mp4', fileName: json.result.title + `.mp3`}, {quoted: m})

} catch  {
m.reply('*ERROR INTENTA DE NUEVO*')
}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['general']
handler.command = /^play2?$/i
module.exports = handler
