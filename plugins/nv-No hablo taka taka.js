let util = require('util')
let path = require('path')


let handler = async (m, { conn }) => {
let vn = './src/No hablo taka taka.mp3'
conn.sendFile(m.chat, vn, 'No hablo taka taka.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /No hablo taka taka/i
handler.command = new RegExp


handler.fail = null
handler.exp = 100
module.exports = handler