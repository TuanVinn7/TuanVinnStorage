const canvafy = require("canvafy")

async function welcomeBanner(avatar, name, subject, type) {
    const title = name
    const desc = (type == "welcome" ? "Selamat datang di " : "Telah keluar dari grup ") + subject
    const background = "https://img1.pixhost.to/images/10293/662786925_upload.jpg"
    const welcome = await new canvafy.WelcomeLeave()
    .setAvatar(avatar)
    .setBackground("image", background)
    .setTitle(title.length > 20 ? (title.substring(0, 16) + "..") : title)
    .setDescription(desc.length > 70 ? (desc.substring(0, 65) + "..") : desc)
    .setBorder("#0080FF")
    .setAvatarBorder("#0080FF")
    .setOverlayOpacity(0.1)
    .build()
    return welcome
}

async function promoteBanner(avatar, name, type) {
    const title = name
    const desc = type == "promote" ? "Telah menjadi admin" : "Telah di berhentikan menjadi admin"
    const background = "https://img1.pixhost.to/images/10293/662786925_upload.jpg"
    const welcome = await new canvafy.WelcomeLeave()
    .setAvatar(avatar)
    .setBackground("image", background)
    .setTitle(title.length > 20 ? (title.substring(0, 16) + "..") : title)
    .setDescription(desc.length > 70 ? (desc.substring(0, 65) + "..") : desc)
    .setBorder("#0080FF")
    .setAvatarBorder("#0080FF")
    .setOverlayOpacity(0.1)
    .build()
    return welcome
}

module.exports = { welcomeBanner, promoteBanner }
      
