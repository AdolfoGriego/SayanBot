let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/Ya antojaron.mp3'
conn.sendFile(m.chat, vn, 'Ya antojaron.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Ya antojaron/
handler.command = /^(Ya antojaron)/

module.exports = handler