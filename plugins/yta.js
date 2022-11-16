const { servers, yta } = require('../lib/y2mate')
let handler = async(m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) return m.reply('*⚠ INSERTA EL COMANDO MAS EL ENLACE DEL VIDEO DE YOUTUBE*')
let chat = global.db.data.chats[m.chat]
let server = (args[1] || servers[0]).toLowerCase()
let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
conn.sendFile(m.chat, dl_link, title + '.mp3', null, m, false, { mimetype: 'audio/mp4' })}              
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['general']
handler.command = /^yt(a|mp3)$/i
module.exports = handler
