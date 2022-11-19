let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/Te crees muy verga bot.mp3'
conn.sendFile(m.chat, vn, 'Te crees muy verga bot.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Te crees muy verga bot/
handler.command = /^(Te crees muy verga bot)/

module.exports = handler