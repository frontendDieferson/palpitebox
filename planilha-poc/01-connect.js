const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1hDvxbsiEn9AeMLPaKT9M2bgjbAMzlw7BB_TZzPv53Hs')

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)
  } catch (err) {
    console.log(err)
  }
}
run()
