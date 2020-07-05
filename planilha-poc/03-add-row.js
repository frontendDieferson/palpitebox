const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1hDvxbsiEn9AeMLPaKT9M2bgjbAMzlw7BB_TZzPv53Hs')

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    // Nome	Email	Whatsapp	Cupom	Promo
    await sheet.addRow({
      Nome: 'Dieferson Soares',
      Email: 'diefersonfrontenddeveloper@gmail.com',
      whatsapp: '69 993928620',
      Cupom: 'aaa111',
      Promo: 'aaasssdddfff'
    })

  } catch (err) {
    console.log(err)
  }
}
run()
