var rp = require('request-promise')

exports.main = (event, context) => {
  var res = rp('https://api.douban.com/v2/book/isbn/'+ event.isbn).then( html => {
    return html;
  }).catch( err => {
    console.log(err);
  })
  return res
}