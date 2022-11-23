let handler = async (m, { conn }) => {
m.reply(`
*HOLA BUSCAS INTALAR ESTE BOT AQUI TE DEJO LOS COMANDOS Y SI NO SABES COMO INSTALARLO ENTRA AL GRUPO AQUI TE DEJO EL ENLACE*
ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:
$ termux-setup-storage
$ apt update 
$ apt upgrade -y
$ pkg install git -y
$ pkg install nodejs -y
$ pkg install ffmpeg -y
$ pkg install imagemagick -y
$ pkg install yarn -y
$ git clone https://github.com/AdolfoGriego/WhatsAppBot
$ cd WhatsAppBot
$ ls
$ yarn install
$ npm install
$ npm update
$ npm start

*GRUPO OFICIAL DEL BOT:*
https://chat.whatsapp.com/IE9bL1KB1laDzB7tZCB0WR

*GRUPO DE AMISTAD:*
https://chat.whatsapp.com/IUNdYngu5AlCJFHuHHuen4
`)
}
handler.command = /^(infohost)$/i
module.exports = handler
