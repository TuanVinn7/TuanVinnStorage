const fs = require("fs");

const config = {
  conftpanel1: {
    egg: "15", // Egg ID
    nestid: "5", // nest ID
    loc: "1", // Location ID
    domain: "biodata.deunamistbot.my.id", // Domain
    apikey: "", //ptla
    capikey: "-" //ptlc
  }
}

module.exports = { config }

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
