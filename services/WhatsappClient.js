const qrcode = require('qrcode-terminal');
const {Client, LocalAuth} = require("whatsapp-web.js");
const whatsapp = new Client({
    authStrategy: new LocalAuth()
});
 
whatsapp.on('qr', qr => {
    qrcode.generate(qr, {
        small: true
    })
});

whatsapp.on("message", async message => {
    if (message.body === "30/10/2023") {
        message.reply("The day she said 'Yes!' at 3:44 AM.");
    } else if (message.body === "Dhiyu" || message.body === "dhiyuuuu" || message.body === "dhiyuuu" || message.body === "dhiyuu" || message.body === "Dhiyuuu" || message.body === "Dhiyuu" || message.body === "Dhiyuuu") {
        message.reply("Dhairya ♥️ digu");
    } else if (message.body === "hello" || message.body === "Hello" || message.body === "Hey") {
        message.reply("Hey there! Dhairya here. Jay Swaminarayan! How can I help you? Please drop a message as I may be busy.");
    }     
})

whatsapp.on("ready", () => {
    console.log("Client is ready!")
})

module.exports = whatsapp;
// whatsapp.initialize()