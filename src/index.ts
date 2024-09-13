import axios from 'axios';
import * as dotenv from 'dotenv'

dotenv.config()
const botToken = process.env.BOT_TOKEN;
const botUsername = '@DavidSparker';
const message = 'Hello, this is a test message from my bot!';

async function sendMessage() {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await axios.post(url, {
      chat_id: 7369854825,
      text: message,
    });
    console.log('Message sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

sendMessage();