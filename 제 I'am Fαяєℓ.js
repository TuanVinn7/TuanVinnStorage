const { 
   config
} = require('./settings/settings');
const { 
   fQ 
} = require('./settings/fakeQ');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const chalk = require("chalk");
const util = require("util");
const moment = require("moment-timezone");
const speed = require('performance-now');
const { 
   spawn, 
   exec, 
   execSync
} = require('child_process');
const JsConfuser = require("js-confuser");
const crypto = require('crypto');
const {
   tiktok
} = require('./library/scrapers.js');
const SESSION_FILE = "./session/ai_sessions.json";

let sessions = fs.existsSync(SESSION_FILE) ? JSON.parse(fs.readFileSync(SESSION_FILE)) : {};

function saveSession() {
  fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));

}
const {
   default: makeWASocket, 
   proto, 
   generateWAMessage, 
   generateWAMessageFromContent, 
   getContentType, 
   prepareWAMessageMedia, 
   baileys
} = require("@whiskeysockets/baileys");
module.exports = Deunamist = async (Deunamist, m, chatUpdate, store) => {
try {
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? Deunamist.user.id.split(":")[0] || Deunamist.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? prefa;
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");
const isChannel = from.endsWith("@newsletter");
const botNumber = await Deunamist.decodeJid(Deunamist.user.id);
const isBot = botNumber.includes(senderNumber)
const newOwner = JSON.parse(fs.readFileSync("./database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const isPremium = premium.includes(m.sender)
const isOwner = newOwner.includes(m.sender)
const isCmd = body.startsWith(prefix) ? true : false
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : "";
const eai = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "7eppeli - WaBot";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const groupMetadata = isGroup ? await Deunamist.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const { 
  smsg, 
  sendGmail, 
  formatSize, 
  isUrl, 
  generateMessageTag, 
  getBuffer, 
  getSizeMedia, 
  runtime, 
  fetchJson, 
  sleep
  } = require('./library/myfunc'); 
  
//———————————————[ DATA FUNCTION ]———————————————\\
let statusUser = "Free User"

if (isOwner && isPremium) {
  statusUser = "Developer"
} else if (isOwner) {
  statusUser = "Owner"
} else if (isPremium) {
  statusUser = "Premium"
}

//———————————————[ RUNTIME ]———————————————\\  
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");
 
 //———————————————[ CONSOLE ]———————————————\\
if(command) {
  console.log(chalk.hex("#6f00f")(`
  < Deunamist - Console >
    - Command : ${prefix + command}, 
    - From : ${senderNumber}
  `)) 
}
const titit = null;

//———————————————[ REPLY ]———————————————\\
const reply = (teks) => {
  const msg = {
    orderMessage: {
      thumbnail: rellImg, 
      itemCount: '00000000',
      message: teks,
      orderTitle: "Dєυηαмιѕт Cнαяιту",
      totalAmount1000: '25000',
      totalCurrencyCode: 'IDR'
    }
  };
  return Deunamist.sendMessage(m.chat, msg, { quoted:fQ.revPayQ })
}

//———————————————[ FUNGSI ]———————————————\\

//———————————————[ BUTTON ]———————————————\\
const rButton = (teks) => {
  const msg = {
    interactiveMessage: {
      title: teks, 
      image: rellImg, 
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "Dєυηαмιѕт Cнαяιту",
            url: "biodata.deunamistbot.my.id",
            copy_code: "제 I'am Fαяєℓ",
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "Dєυηαмιѕт Cнαяιту",
            button_title: "Select Ur Button"
          }
        }),
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "Telegram Creator",
              url: "https://t.me/FarelModsss"
            })
          }, 
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "Bug Menu\'s", 
              id: ".bugmenu"
            })
          }, 
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "Owner Menu\'s", 
              id: ".ownmenu"
            })
          }, 
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "Thanks To", 
              id: ".tqto"
            })
          }
        ]
      }
    }
  };
  
  return Deunamist.sendMessage(m.chat, msg, { quoted: fQ.revPayQ })
}

const rBug = (teks) => {
  const msg = {
    interactiveMessage: {
      title: teks, 
      image: rellImg, 
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "Dєυηαмιѕт Cнαяιту",
            url: "biodata.deunamistbot.my.id",
            copy_code: "제 I'am Fαяєℓ",
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "Dєυηαмιѕт Cнαяιту",
            button_title: "Select Bug Type"
          }
        }),
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "Telegram Creator",
              url: "https://t.me/FarelModsss"
            })
          }, 
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "Private Bug", 
              id: ".d-private"
            })
          }, 
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "Group Bug", 
              id: ".d-group"
            })
          }
        ]
      }
    }
  };
  
  return Deunamist.sendMessage(m.chat, msg, { quoted: fQ.revPayQ })
}

const rellImg = fs.readFileSync('./library/media/Thumbnail.jpg');

//———————————————[ COMMAND ]———————————————\\
switch (command) {
case "menu": {
const msg = `
┌─╼ *⟮ DEUNAMIST ⟯* 
│➔ *Name Bot : Deunamist
│➔ *Version* : 1.0
│➔ *Developer* : biodata.deunamistbot.my.id
│➔ *Status User* : ${statusUser}
│➔ *RunTime* : ${runtime (process.uptime())}
└─────────────────`;
rButton(msg);
}
break

case "ownermenu": {
const teks = `
┌─╼ *⟮ DEUNAMIST ⟯* 
│➔ *Name Bot : Deunamist
│➔ *Version* : 1.0
│➔ *Developer* : biodata.deunamistbot.my.id
│➔ *Status User* : ${statusUser}
│➔ *RunTime* : ${runtime (process.uptime())}
└─────────────────
┌─╼ *⟮ Owner Menu\'s ⟯*
│➔ ${prefix}addown
│➔ ${prefix}addprem
│➔ ${prefix}delown
│➔ ${prefix}delprem
│➔ ${prefix}self
│➔ ${prefix}public
└─────────────────`;
rButton(teks);
}
break

case "tqto": {
const tq = `
┌─╼ *⟮ Thanks To ⟯*
│→ Farelmods - Me
│→ 7eppeli.pdf - My Teacher
│→ Vynx - Best Bro
│→ WilhamOffc - Best Bro
│→ Faxz - Best Bro
│→ Banz - My Patner
│→ Kyzz - My Patner
│→ Yan - My Patner
│→ Pikri - My Patner
│→ Shimizu - My Patner
└─────────────────`;
rButton(tq);
}
break

case "bugmenu": {
const bak = `
┌─╼ *⟮ FAREL DESTROYER ⟯* 
│➔ *Name Bot : Deunamist
│➔ *Version* : 1.0
│➔ *ID sender* : ${m.sender}
│➔ *Developer* : biodata.deunamistbot.my.id
│➔ *Status User* : ${statusUser}
│➔ *RunTime* : ${runtime (process.uptime())}
└─────────────────`;
rBug(bak);
}
break

case "public": { 
if (!isBot && !isOwner) return reply(`\`Sorry Ngentd Lu Bukan Owner Gw😹\``)
Deunamist.public = true
reply(`*\`Self-Destruct Mode \`*`)
}
break

case "self": { 
if (!isBot && !isOwner) return reply(`\`Sorry Ngentd Lu Bukan Owner Gw😹\``)
Deunamist.public = false
reply(`*\`Public-Destruct Mode\`*`)
}
break

case "addowner":
case "addown":{
if (!isBot && !isOwner) return reply(`\`Sorry Ngentd Lu Bukan Owner Gw😹\``)
if (!args[0]) return reply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××*_`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Deunamist.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`*\`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!\`*`)
newOwner.push(prrkek)
fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(newOwner))
reply(`*\`Nomor ${prrkek} Telah Menjadi Owner Bot!!\`*`)
}
break

case "delowner":
case "delown":{
if (!isBot && !isOwner) return reply(`\`Sorry Ngentd Lu Bukan Owner Gw😹\``)
if (!args[0]) return reply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××*_`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = newOwner.indexOf(ya)
newOwner.splice(unp, 1)
fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(newOwner))
reply(`*\`Nomor ${ya} Telah Di Hapus Dari Database Owner Bot!\`*`)
}    
break

case "addprem":{
if (!isBot && !isOwner) return reply(`Sorry Ngentd Lu Bukan Owner Gw😹`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Deunamist.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
premium.push(prrkek)
fs.writeFileSync("./lib/Database/premium.json", JSON.stringify(premium))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break

case "delprem":{
if (!isBot && !isOwner) return reply(`Sorry Ngentd Lu Bukan Owner Gw😹`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync("./lib/Database/premium.json", JSON.stringify(premium))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break

case "cekidch": case "idch": {
if (!q) return reply("linkchnya?!")
if (!q.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
let result = q.split('https://whatsapp.com/channel/')[1]
let res = await Deunamist.newsletterMetadata("invite", result)
let teks = `
𝑵𝒆𝒘𝒔𝒍𝒆𝒕𝒕𝒆𝒓 𝑰𝒅 : ${res.id}
𝑵𝒆𝒘𝒔𝒍𝒆𝒕𝒕𝒆𝒓 𝑵𝒂𝒎𝒆 : ${res.name}
𝑵𝒆𝒘𝒔𝒍𝒆𝒕𝒕𝒆𝒓 𝑭𝒐𝒍𝒍𝒐𝒘𝒆𝒓𝒔 : ${res.subscribers}
𝑵𝒆𝒘𝒔𝒍𝒆𝒕𝒕𝒆𝒓 𝑺𝒕𝒂𝒕𝒖𝒔 : ${res.state}
𝑽𝒆𝒓𝒊𝒗𝒊𝒆𝒅? : ${res.verification == "✅" ? "𝑽𝒆𝒓𝒊𝒗𝒊𝒆𝒅? " : "❎"}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
isForwarded: true, 
forwardingScore: 250208,
forwardedNewsletterMessageInfo: {
newsletterName: "</𖥂 𝐃𝐞𝐮𝐧𝐚𝐦𝐢𝐬𝐭 𝐕𝟏.𝟎𖥂\\>", 
newsletterJid: "120363418280148811@newsletter", 
serverId: 999
}
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Dєυηαмιѕт Cнαяιту`
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ video: { url: `https://files.catbox.moe/igld9p.mp4` } }, { upload: Deunamist.waUploadToServer })),
title: `</𝑵𝒆𝒘𝒔𝒍𝒆𝒕𝒕𝒆𝒓 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏\\>`,
gifPlayback: true,
subtitle: `Farelmods`,
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Id Channel",
"copy_code": `${res.id}`
})
},
{
"name": "cta_url",
"buttonParamsJson": JSON.stringify({
"display_text": "Saluran Developer",
"url": "https://whatsapp.com/channel/0029VbAPI4fJ93wWgQZNC62M",
"merchant_url": "https://whatsapp.com/channel/0029VbAPI4fJ93wWgQZNC62M",
})
}
]
})
})} 
}}, {userJid: m.sender, quoted: fQ.revPayQ})
await Deunamist.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case "tourl": {
  if (!/image|video/.test(mime)) return reply('Kirim atau reply gambar/video yang ingin diubah ke URL!');

  const fetch = (await import('node-fetch')).default;
  const FormData = (await import('form-data')).default;
  const { ImageUploadService } = require('node-upload-images');
  const { fromBuffer } = require('file-type');
  const mediaData = m.quoted ? await m.quoted.download() : await m.download();

  // Fungsi upload ke pixhost.to (untuk gambar)
  async function uploadPixhost(buffer) {
    const service = new ImageUploadService('pixhost.to');
    const { directLink } = await service.uploadFromBinary(buffer, 'upload.png');
    return directLink;
  }

  // Fungsi upload ke catbox.moe (untuk gambar & video)
  async function uploadCatbox(buffer) {
    let { ext } = await fromBuffer(buffer);
    let bodyForm = new FormData();
    bodyForm.append("fileToUpload", buffer, "file." + ext);
    bodyForm.append("reqtype", "fileupload");
    let res = await fetch("https://catbox.moe/user/api.php", {
      method: "POST",
      body: bodyForm
    });
    return await res.text();
  }

  let url;
  if (/image/.test(mime)) {
    try {
      url = await uploadPixhost(mediaData);
    } catch {
      url = await uploadCatbox(mediaData);
    }
  } else {
    url = await uploadCatbox(mediaData);
  }

  await Deunamist.sendMessage(m.chat, { text: `*Url :* ${url}\n*Expired :* Permanen` }, { quoted: m });
}
break

case "spamngl": {
  if(!isOwner && isPremium) return reply("Only Owner");
  if(!q) return reply(" Contoh:\n/spamngl Username,Pesan,100");
  const z = q.trim();
  const [usernameR, messageR, loopsR] = z.split(",");
  const username = usernameR.toLowerCase().replace(/\s/g, "");
  const message = messageR.toLowerCase().replace(/\s/g, "");
  const loops = loopsR ? loopsR.replace(/\D/g, "") : 1;
  
  reply("Memulai spam ngl");
  for (let i = 1; i < loops; i++) {
    try {
      const arr = new Uint8Array(21);
      crypto.getRandomValues(arr);
      const deviceId = Array.from(arr, x => x.toString(16).padStart(2, "0")).join("");
      const body = `username=${username}&question=${encodeURIComponent(message)}&deviceId=${deviceId}`;
      await fetch("https://ngl.link/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
        body
      })
    } catch(k) {
      m.reply("Error:" + k);
    }
  }
  reply(`Sukses spam ngl ke ${username} sebanyak ${loops}×`);
}
break

default:
if (budy.startsWith('>')) {
if (!isOwner) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
reply(evaled);
} catch (err) {
reply(String(err));
}
}
}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});