let util = require('util')
let path = require('path')


let handler = async (m, { conn }) => {
let vn = './src/Me duele me quema.mp3'
conn.sendFile(m.chat, vn, 'Me duele me quema.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Me duele me quema/i
handler.command = new RegExp


handler.fail = null
handler.exp = 100
module.exports = handler