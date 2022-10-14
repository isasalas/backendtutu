//const qrcode = require('qrcode-terminal');

import qrcode from 'qrcode-terminal';
import whatsappWebJs from 'whatsapp-web.js';
//import { Client } from 'whatsapp-web.js';
//import { LocalAuth } from 'whatsapp-web.js';

/*
const { Client } = require('whatsapp-web.js');
const client = new Client();*/

//const { Client, LocalAuth } = require('whatsapp-web.js');


const client = new whatsappWebJs.Client({
    authStrategy: new whatsappWebJs.LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});
/*
client.on('ready', () => {
    console.log('Client is ready!');
});*/


client.on('ready', () => {
    console.log('Whatsapp en linea');
    enviarMensaje();

});

const enviarMensaje = () => {
    // Number where you want to send the message.
    const number = "+59175040141";

    // Your message.
    const text = "este es un mensaje de prueba, no responda poque soy un bot, no soy real ok?";

    // Getting chatId from the number.
    // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
    const chatId = number.substring(1) + "@c.us";

    // Sending message.
    client.sendMessage(chatId, text);
}

/*
client.on('message', message => {
    if(message.body === '!ping') {
        message.reply('pong');
    }
});

client.on('message', message => {
    if(message.body === 'kinberly') {
        message.reply('tu patrone');
    }
});*/




client.initialize();

