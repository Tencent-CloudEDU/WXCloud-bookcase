const cloud = require('wx-server-sdk')
cloud.init({})
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    return await db.collection('mybook').where({
      _openid: "ocdyO4u6-0Gf92PZUWAsEK4LxkuI"
    })
      .update({
        data: {
          price: "100元"
        },
      })
  } catch (e) {
    console.error(e)
  }
}