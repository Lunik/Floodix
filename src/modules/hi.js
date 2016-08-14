'use strict'

function Hi () {
  this.info = {
    name: 'Hi',
    triggers: ['hi', 'hello', 'bonjour', 'salut', 'yo'],
    args: []
  }
}

Hi.prototype.run = function (user, args, cb) {
  var hi = function (args) {
    return 'Hi !'
  }

  cb(hi(args))
}

module.exports = new Hi()
