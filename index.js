const {
   config 
} = require('./settings/settings');
const { 
    default: makeWASocket, 
    prepareWAMessageMedia, 
    useMultiFileAuthState, 
    DisconnectReason, 
    fetchLatestBaileysVersion,
    generateWAMessageFromContent, 
    generateWAMessageContent, 
    jidDecode, 
    proto, 
    baileys,
    downloadContentFromMessage, 
    fetchLatestWaWebVersion,
    generateMessageID,
    Browsers,
    MessageRetryMap 
} = require("@whiskeysockets/baileys");

//———————————————[ MODULEA ]———————————————\\
const { 
   Telegraf, 
   Markup 
} = require('telegraf');
const axios = require('axios');
const pino = require('pino');
const readline = require("readline");
const fs = require('fs');
const figlet = require('figlet');
const chalk = require("chalk");
const crypto = require('crypto');
const {
   Boom
} = require('@hapi/boom');

//———————————————[ LIBRARY ]———————————————\\
const {
   smsg, 
   sendGmail, 
   formatSize, 
   isUrl, generateMessageTag, 
   getBuffer, 
   getSizeMedia, 
   runtime, 
   fetchJson, 
   sleep 
} = require('./library/myfunc');

const path = require('path');
const { tmpdir } = require('os');
const Crypto = require('crypto');
const ff = require('fluent-ffmpeg');
const FileType = require('file-type');
const webp = require('node-webpmux');
const bot = new Telegraf(global.token);
const usePairingCode = true;

const img = fs.readFileSync('./library/media/Thumbnail.jpg');

const { 
   welcomeBanner,
   promoteBanner 
} = require("./library/welcome");

const rl = readline.createInterface({ 
   input: process.stdin, 
   output: process.stdout 
})
const question = (text) => {
return new Promise((resolve) => {
   rl.question(text, resolve) 
 });
}

const sendTelegramNotification = async (message) => {
  try {
    await axios.post(`https://api.telegram.org/bot${global.token}/sendMessage`, {
      chat_id: global.teleId,
      text: message
    });
  } catch (error) {
    console.log(error);
  }
};

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState("./session");
    const Deunamist = makeWASocket({
        printQRInTerminal: !usePairingCode,
        syncFullHistory: false,
        markOnlineOnConnect: true,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        generateHighQualityLinkPreview: true,
        patchMessageBeforeSending: (msg) => {
          function self(msg) {
            const im = msg?.interactiveMessage || msg?.message?.interactiveMessage || Object.values(msg || {}).find(v => v?.message?.interactiveMessage)?.message?.interactiveMessage
            const c = !!im?.carouselMessage?.cards?.every(i => i?.nativeFlowMessage?.buttons)
            if(!im?.nativeFlowMessage?.buttons && !c) return msg
            const obj = { name: "cta_url", buttonParamsJson: "" };
            const ctaify = but => Array.isArray(but) ? but.flatMap(b => [obj, b]) : but

            if(im?.nativeFlowMessage?.buttons)
        im.nativeFlowMessage.buttons = ctaify(im.nativeFlowMessage.buttons)
            if (c)
              for (const card of im.carouselMessage.cards)
                if (Array.isArray(card.nativeFlowMessage?.buttons))
                  card.nativeFlowMessage.buttons = ctaify(card.nativeFlowMessage.buttons)
                    return msg
          }
          msg = self(msg)
          return msg
        },
        version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        logger: pino({
            level: 'silent' // Set 'fatal' for production
        }),
        auth: state
    });

    if (!Deunamist.authState.creds.registered) {
        console.log(chalk.hex("#E6E6FA")(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⣴⡤⣤⡀
⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⣿⣶⣄⣀⣀⡀⣀⡀⠀⠀⠀⠀⣸⣤⣻⠻⣾⡇
⠀⠀⠀⠀⠀⠀⢉⣽⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⡿⠳⣄⠀⠘⢿⢻⣿⣟⠇
⠀⢠⣤⣤⣤⣾⣿⣿⣿⡟⠋⠀⠀⢉⡿⢿⠛⣿⡿⡑⡀⠘⣷⡀⢀⡏⠉⠀⠀
⠀⠘⠿⢿⡿⠋⣱⡿⠋⠀⠀⠀⡌⠉⡧⠆⠿⠵⢼⡀⠱⡀⠈⠙⠛⢲⣶⠀⠀
⠀⠀⠀⣿⡓⠊⠁⢀⠀⢀⡆⠀⡇⠀⡇⠀⢀⠀⠀⡇⠀⡇⠀⠈⠻⡏⠁⠀⠀
⠀⠀⣰⠇⠉⢙⠏⠁⠀⢸⠁⢀⠷⡀⢣⠀⠸⠆⠀⡇⡸⢣⠀⢇⠀⣿⠀⠀⠀
⡤⠞⢁⣠⠆⢸⠀⠀⢠⠏⠀⡜⠉⠑⠬⠆⠀⠀⠩⠗⠉⠀⢃⠘⡄⡿⠀⠀⠀
⠙⠛⢹⠏⠀⢸⠀⣠⠋⣠⣾⣶⣶⣦⣄⠀⠀⠀⢨⣶⣶⣶⣬⣆⠹⣇⠀⠀⠀
⢠⠖⠋⣀⣠⣼⣯⠤⠚⢏⠀⠣⣘⡫⠇⠀⠀⠀⠀⢎⣃⠇⠈⡟⣝⢾⠃⠀⠀
⠈⠛⠛⢻⣿⣧⡘⡄⠰⢌⣢⠄⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⡱⠻⠾⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣹⣿⣦⣀⢳⣎⣑⣦⡀⠀⠀⠁⠀⣀⣴⣿⣞⣳⠆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢉⡽⣿⠏⣾⠿⢷⣷⣿⣿⣿⣽⣿⡿⣽⣟⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣰⠋⢰⢿⠚⢿⡿⡿⠋⠘⢿⣟⣻⢽⣿⣷⣿\n\n–INFORMATION\nName: Deunamist\nVersion: 1,0\nDeveloper: Farel Destroyer\n\n–SOCIAL\nTiktok: farelmodsss11\nTelegram: FarelModsss\nWhatsApp: 082313154195\nGithub: Farelmods-uxzs\nSaluran WhatsApp: https://whatsapp.com/channel/0029Vb6iQE01noz5mRYBW001\n`));

const phoneNumber = await question(chalk.hex("#E6E6FA")(`Enter Your WhatsApp Number :\n`));
       const code = await Deunamist.requestPairingCode(phoneNumber, "D7EPPELI");
        console.log(chalk.hex("#DDA0DD")(`Pairing Code :\n${code} `));
    }

    const store = {};
    Deunamist.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    Deunamist.ev.on('messages.upsert', async chatUpdate => {
        try {
            mek = chatUpdate.messages[0];
            if (!mek.message) return;
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
            if (!Deunamist.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
            let m = smsg(Deunamist, mek, store);
            require("./제 I'am Fαяєℓ")(Deunamist, m, chatUpdate, store);
        } catch (error) {
            console.error("Error processing message upsert:", error);
        }
    });

    Deunamist.getFile = async (PATH, save) => {
        let res;
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0);
        let type = await FileType.fromBuffer(data) || { mime: 'application/octet-stream', ext: '.bin' };
        filename = path.join(__filename, '../' + new Date * 1 + '.' + type.ext);
        if (data && save) fs.promises.writeFile(filename, data);
        return { res, filename, size: await getSizeMedia(data), ...type, data };
    };

    Deunamist.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    };

    Deunamist.sendText = (jid, text, quoted = '', options) => Deunamist.sendMessage(jid, { text, ...options }, { quoted });

    Deunamist.sendAsSticker = async (jid, path, quoted, options = {}) => {
		const buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
		let buffer
	 if (options && (options.packname || options.author)) {
            buffer = await writeExif(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }
		await Deunamist.sendMessage(jid, { sticker: buffer, ...options }, { quoted });
		return buff;
	}

    Deunamist.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer = options && (options.packname || options.author) ? await writeExifVid(buff, options) : await videoToWebp(buff);
        await Deunamist.sendMessage(jid, { sticker: buffer, ...options }, { quoted });
        return buffer;
    };

    Deunamist.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
    };

    // Tambahan fungsi send media
    Deunamist.sendMedia = async (jid, path, caption = '', quoted = '', options = {}) => {
        let { mime, data } = await Deunamist.getFile(path, true);
        let messageType = mime.split('/')[0];
        let messageContent = {};
        
        if (messageType === 'image') {
            messageContent = { image: data, caption: caption, ...options };
        } else if (messageType === 'video') {
            messageContent = { video: data, caption: caption, ...options };
        } else if (messageType === 'audio') {
            messageContent = { audio: data, ptt: options.ptt || false, ...options };
        } else {
            messageContent = { document: data, mimetype: mime, fileName: options.fileName || 'file' };
        }

        await Deunamist.sendMessage(jid, messageContent, { quoted });
    };

    Deunamist.sendPoll = async (jid, question, options) => {
        const pollMessage = {
            pollCreationMessage: {
                name: question,
                options: options.map(option => ({ optionName: option })),
                selectableCount: 1,
            },
        };

        await Deunamist.sendMessage(jid, pollMessage);
    };

    Deunamist.setStatus = async (status) => {
        await Deunamist.query({
            tag: 'iq',
            attrs: { to: '@s.whatsapp.net', type: 'set', xmlns: 'status' },
            content: [{ tag: 'status', attrs: {}, content: Buffer.from(status, 'utf-8') }],
        });
        console.log(chalk.yellow(`Status updated: ${status}`));
    };

    Deunamist.public = true;

    Deunamist.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            if (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) {
                connectToWhatsApp();
            }
        } else if (connection === 'open') {
Deunamist.sendText(Deunamist.user.id, `Deunamist Berhasil Tersambung`);
Deunamist.newsletterFollow("120363404335163058@newsletter");
        }
    });

    Deunamist.ev.on('error', (err) => {
        console.error(chalk.red("Error: "), err.message || err);
    });

    Deunamist.ev.on('creds.update', saveCreds);
    
    Deunamist.ev.on('group-participants.update', async (update) => {
    const { id, author, participants, action } = update
    try {
      if (!Deunamist.public) return
      const metadata = await Deunamist.groupMetadata(id)
      for (let participant of participants) {
        let profile
        try {
          profile = await Deunamist.profilePictureUrl(participant, 'image')
        } catch {
          profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png'
        }
        let text = ''
        if (action === 'add') {
          text =
            (!author || author.length < 1)
              ? `@${participant.split('@')[0]} join via *link group*`
              : author !== participant
              ? `@${author.split('@')[0]} telah *menambahkan* @${participant.split('@')[0]} kedalam grup`
              : ''
          let img = await welcomeBanner(profile, participant.split('@')[0], metadata.subject, 'welcome')
          await Deunamist.sendMessage(id, {
            image: img,
            caption: text,
            footer: "Dєυηαмιѕт Cнαяιту", 
            mentions: [participant, author],
          })
        } else if (action === 'remove') {
          text =
            (!author || author.length < 1)
              ? `@${participant.split('@')[0]} leave group`
              : author !== participant
              ? `@${author.split('@')[0]} telah *mengeluarkan* @${participant.split('@')[0]} dari grup`
              : ''
          await Deunamist.sendMessage(id, { text, mentions: [participant, author] })
        } else if (action === 'promote') {
          let img = await promoteBanner(profile, participant.split('@')[0], metadata.subject, 'promote')
          text = `@${author.split('@')[0]} telah mempromote @${participant.split('@')[0]} sebagai admin`
          await Deunamist.sendMessage(id, {
            image: img, 
            caption: text,
            footer: "Dєυηαмιѕт Cнαяιту", 
            mentions: [author, participant],
          })
        } else if (action === 'demote') {
          text = `@${author.split('@')[0]} telah mendemote @${participant.split('@')[0]}`
          await Deunamist.sendMessage(id, { text, mentions: [author, participant] })
        }
      }
    } catch (e) {
      console.error(e)
    }
  })
}

connectToWhatsApp();