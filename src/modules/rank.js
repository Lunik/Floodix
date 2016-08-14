'use strict'

var path = require('path')

var Xp = require(path.join(__base, 'src/worker/xp.js'))

function Rank () {
  this.info = {
    name: 'Rank',
    triggers: ['rank', 'lvl'],
    args: []
  }
}

Rank.prototype.run = function (user, args, cb) {
  var rank = function (user) {
    var XpWorker = new Xp(true)
    var xp = XpWorker.getUser(user)
    var rank = XpWorker.getRank(user) + '/' + XpWorker.userCount()

    return '\n**Level ' + xp.lvl + '**. \n'
    + 'Next level in **' + xp.missing + 'xp**.\n'
    + 'Total **' + xp.xp + 'xp**.\n'
    + 'Rank **' + rank + '.**'
  }
  cb(rank(user))
}

module.exports = new Rank()
