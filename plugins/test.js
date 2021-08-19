const XTroid = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const Config = require('../config');

XTroid.addCMD({pattern: '222', fromMe: true, deleteCommand: false,}, (async (message, match) => {

var rows = [

 {title: 'Row 1', description: "Hello it's description 1", rowId:"rowid1"},

 {title: 'Row 2', description: "Hello it's description 2", rowId:"rowid2"}

]

var sections = [{title: "Section 1", rows: rows}]

var button = {

 buttonText: 'Click Me!',

 description: "Hello it's list message",

 sections: sections,

 listType: 1

}
await message.client.sendMessage(message.jid, "hiiiiiiii", MessageType.text)
await message.client.sendMessage(message.jid, button, MessageType.listMessage)
 
 
 
 const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
]

const buttonMessage = {
    contentText: "Hi it's button message",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}

await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

    }));
