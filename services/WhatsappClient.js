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
    // Check for the specific date
    if (message.body === "30/10/2023") {
        message.reply("The day she said 'Yes!' at 3:44 AM.");
    } 
    // Match variations of "Dhiyu" (case-insensitive and handle extra "u"s)
    else if (/^dhiyu{2,}$|dhiyu$/i.test(message.body)) {
        message.reply("Dhairya ♥️ digu");
    } 
    // Handle greetings
    else if (["hello", "Hello", "Hey"].includes(message.body)) {
        message.reply("Hey there! Dhairya here. Jay Swaminarayan! How can I help you? Please drop a message as I may be busy.");
    }     
});

whatsapp.on("ready", () => {
    console.log("Client is ready!")
})

module.exports = whatsapp;
// whatsapp.initialize()