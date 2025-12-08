const fs = require("fs");

const fQ = {
  revPayQ: {
    key: {
      remoteJid: "status@broadcast",
      participant: "13135550202@bot",
      fromMe: false
    },
    message: {
      interactiveMessage: {
        header: {
          hasMediaAttachment: true,
          jpegThumbnail: "", 
          title: " Dєυηαмιѕт Cнαяιту"
        },
        nativeFlowMessage: {
          buttons: [
            {
              name: "review_and_pay",
              buttonParamsJson: JSON.stringify({
                currency: "IDR",
                payment_configuration: "payment_settings",
                payment_type: "payment_method",
                total_amount: {
                  value: 1000000,
                  offset: 100
                },
                reference_id: "제 I'am Fαяєℓ",
                type: "physical-goods",
                order: {
                  status: "payment_requested",
                  description: "",
                  subtotal: {
                    value: 0,
                    offset: 100
                  },
                  order_type: "PAYMENT_REQUEST",
                  items: [
                    {
                      retailer_id: "X",
                      name: "by: @FarelModsss",
                      amount: {
                        value: 7205,
                        offset: 100
                      },
                      quantity: 25
                    }
                  ]
                },
                additional_note: "by: @FarelModsss",
                native_payment_methods:[],
                share_payment_status:false
              })
            }
          ]
        }
      }
    }
  }
}

module.exports = { fQ }

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
