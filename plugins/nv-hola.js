let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/hola.mp3'
conn.sendFile(m.chat, vn, 'hola.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Hi|Hola|hola/
handler.command = /^(hola|Hola?$)/

module.exports = handler