'use strict'

var path = require('path')

var Log = require(path.join(__base, 'src/worker/log.js'))
var Save = require(path.join(__base, 'src/worker/save.js'))

var rand = require('crypto-rand')
var math = require('mathjs')

function Xp (useApi) {
  this.users = require(path.join(__base, 'data/xp.json'))
  if (!useApi) {
    this.SaveWorker = new Save('xp', this.users, 300000, function () {
      Log.print('Xp saved.')
    })
  }
}

Xp.prototype.pex = function (author) {
  if (author.bot) {
    return false
  }
  var currentDate = new Date()

  var message = ''

  var user = this.users[author.id]

  if (typeof user === 'undefined') {
    user = {
      last: currentDate,
      lvl: 1,
      missing: this.getXp(2),
      xp: 0
    }
  }

  if (currentDate - user.last > 60000) {
    user.last = currentDate
    var newXp = rand.randInt(1, 10)
    user.xp += newXp
    user.missing -= newXp

    if (user.missing <= 0) {
      user.lvl++
      user.missing = this.getXp(user.lvl + 1)
      message = ' you just advanced to **level ' + user.lvl + '** !'
      Log.print(author.name + ' is now level ' + user.lvl + '.')
    }
  }

  this.users[author.id] = user

  return message
}

Xp.prototype.getXp = function (lvl) {
  return math.round(2 * math.pow(lvl + math.sqrt(lvl / 2), 2))
}

Xp.prototype.getUser = function (user) {
  return this.users[user.id]
}

Xp.prototype.userCount = function () {
  return Object.keys(this.users).length
}
Xp.prototype.getRank = function (user) {
  var rank = 1
  user = this.users[user.id]

  for (let i in this.users) {
    let u = this.users[i]

    if (u.xp > user.xp) {
      rank++
    }
  }

  return rank
}

module.exports = Xp
