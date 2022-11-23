let util = require('util')
let path = require('path')


let handler = async (m, { conn }) => {
let vn = './src/Te voy a matar bot.mp3'
conn.sendFile(m.chat, vn, 'Te voy a matar bot.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Te voy a matar bot/i
handler.command = new RegExp


handler.fail = null
handler.exp = 100
module.exports = handler