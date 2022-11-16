let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('265' || '265')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
   
if (m.sender.startsWith('92' || '92')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('1' || '1')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('380' || '380')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('371' || '371')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('44' || '44')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('500' || '500')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('62' || '62')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('237' || '237')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('258' || '258')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('94' || '94')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('994' || '994')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('7' || '7')) {
global.db.data.users[m.sender].banned = true
m.reply(`Se detecto número facke seras eliminado\n\nHasta nunca`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

}}
export default handler
