let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*EL ANTILINK ESTA ACTIVADO PERO ERES UN BASADO CRACK, NO TE PUEDO ELIMINAR ERES ADMIN🧐🍷*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「ANTI-LINKS」*\n*HASTA PRONTO GIL, ${await this.getName(m.sender)} ROMPISTE LAS REGLAS PAJIN HDTPM SERAS ELIMINADO*${isBotAdmin ? '' : '\n\n*EL BOT NO ES ADMIN NECESITA EL PODER PARA ELIMINAR A ESE GAY😣*'}`, author, ['DESACTIVAR ANTILINKS', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*EL PROPIETARIO DE ESTE BOT NO TIENE ACTIVADO (#enable restrict*')
}
return !0
}
