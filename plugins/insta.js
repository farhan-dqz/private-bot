const Asena = require('../events');
const{MessageType} = require('@adiwajshing/baileys')
const tor = "Send a Warning to a user"
const rep = "*¡Please reply to the user for Advertirl!*"
const rap = "=== `` `1st warning``` ===\n\n"

Asena.addCommand({pattern: 'warn ?(.*)', fromMe: false, OnlyGroup: true, desc: tor}, (async (message, match) => {

    if (match[1] == '' && message.reply_message) {

        let group = await message.client.groupMetadata(message.jid);

        var jids = [];

        message = '';

        group['participants'].map(async (member) => {

            if (user.isAdmin) {

                message += '@' + user.id.split('@')[0] + ' ';

                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));

            }

        });

        await message.client.sendMessage(message.jid,rap + '*User:* ' + '@' + message.reply_message.jid.split('@')[0] , MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})

        

    }

    else if (match[1] !== '' && message.reply_message) {

        let group = await message.client.groupMetadata(message.jid);

        var jids = [];

        message = '';

        group['participants'].map(async (member) => {

            if (user.isAdmin) {

                message += '@' + user.id.split('@')[0] + ' ';

                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));

            }

        });

        await message.client.sendMessage(message.jid,rap + '*User:* ' + '@' + message.reply_message.jid.split('@')[0] + `\n*reson:* ${match [1]}`, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})

    }

    else if (!message.reply_message) {

        return message.client.sendMessage(message.jid,rep, MessageType.text);

    }

}));
