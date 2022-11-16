let yts = require('yt-search')
let handler = async (m, { text }) => {
if (!text) return m.reply('Cari apa?')
let results = await yts(text)
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `
📝 *${v.title}* (${v.url})
⏳ DURACIÓN: ${v.timestamp}
📆 PUBLICADO ${v.ago}
`.trim()
case 'channel': return `
👨‍💻 *${v.name}* (${v.url})
🤓 _${v.subCountLabel} suscriptores_
📽 ${v.videoCount} VIDEO/S
`.trim()
}
}).filter(v => v).join('\n========================\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['general']
handler.command = /^yts(earch)?$/i
module.exports = handler
