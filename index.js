const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const fs = require('fs-extra');
const { mainMenu, subMenus } = require('./lib/menu.js');
const config = require('./config.js');

async function startMira() {
  const { state, saveCreds } = await useMultiFileAuthState('./session');
  const sock = makeWASocket({ auth: state, printQRInTerminal: true });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message) return;
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text || "";
    const from = msg.key.remoteJid;

    // .menu ගැහුවම
    if (text === `${config.prefix}menu`) {
      // Random Posh Image එක ගන්නවා
      let imgPath = config.menuImages[Math.floor(Math.random() * config.menuImages.length)];
      // Image එකත් එක්ක Menu එක යවනවා
      if (fs.existsSync(imgPath)) {
        await sock.sendMessage(from, { image: fs.readFileSync(imgPath), caption: mainMenu });
      } else {
        await sock.sendMessage(from, { text: mainMenu });
      }
    }

    // 1,2,3,4 ගැහුවම Sub Menu යනවා
    if (["1","2","3","4"].includes(text.trim())) {
      let reply = subMenus[text.trim()];
      await sock.sendMessage(from, { text: reply });
    }
  });
}

startMira();
console.log("MIRA BOT Started - Pair Code එක Log එකේ එනවා...");
