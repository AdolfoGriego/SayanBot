let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*◉ ${usedPrefix + command} WhatsApp-Bot*`
let teks = encodeURI(text)

if (command == 'attp') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${teks}`, 'error.webp', '', m, { asSticker: true })}
    
if (command == 'attp2') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp2?apikey=${lolkeysapi}&text=${teks}`, 'error.webp', '', m, { asSticker: true })}

if (command == 'ttp5') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp6?apikey=${lolkeysapi}&text=${teks}`, 'error.webp', '', m, { asSticker: true })}
    
if (command == 'ttp4') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp5?apikey=${lolkeysapi}&text=${teks}`, 'error.webp', '', m, { asSticker: true })}
    
if (command == 'ttp3') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp3?apikey=${lolkeysapi}&text=${teks}`, 'error.webp', '', m, { asSticker: true })}
    
if (command == 'ttp2') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp2?apikey=${lolkeysapi}&text=${teks}`, 'error.webp', '', m, { asSticker: true })}
    
if (command == 'ttp') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=${lolkeysapi}&text=${teks}`, 'error.webp', '', m, { asSticker: true })}
    
}

handler.command = handler.help = ['ttp', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'attp', 'attp2']
module.exports = handler
