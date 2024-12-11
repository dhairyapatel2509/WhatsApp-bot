const express = require('express')
const messageRouter = require("./routers/message.js"); 
const whatsapp = require('./services/WhatsappClient.js');
whatsapp.initialize();
 
const app = express();

app.use(express.json());

app.use(messageRouter);

app.listen(3000, () => console.log("Server is listening to Port 3000"));