'use strict'

function Hi () {
  this.info = {
    name: 'Hi',
    triggers: ['hi'],
    args: []
  }
}

Hi.prototype.run = function (user, args, cb) {
  var hi = function (args) {
    switch (args[0]) {
      default:
        return 'Hi !'
        break
    }
  }

  cb(hi(args))
}

module.exports = new Hi()
