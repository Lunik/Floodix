var SaveWorker = require('./save.js')
var Log = require('./log.js')
var Save = require('./save.js')

var rand = require('crypto-rand')
var math = require('mathjs')

function Xp (useApi) {
  this.users = require('../data/xp.json')
  if(!useApi){
    this.SaveWorker = new Save('xp', this.users, 300000, function(){
      Log.print('Xp saved.')
    })
  }
}

Xp.prototype.pex = function (author) {
  if(author.bot){
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

  if (currentDate - user.last > 0) {
    user.last = currentDate
    var newXp = rand.randInt(1, 10)
    user.xp += newXp
    user.missing -= newXp

    if (user.missing <= 0) {
      user.lvl++
      user.missing = this.getXp(user.lvl + 1)
      message = ' you just advanced to **level ' + user.lvl + '** !'
      Log.print(author.name + ' is now level ' + user.lvl +'.')
    }
  }

  this.users[author.id] = user

  return message
}

Xp.prototype.getXp = function (lvl) {
  return math.round(2 * math.pow(lvl + math.sqrt(lvl / 2), 2))
}

Xp.prototype.getUser = function(user){
  return this.users[user.id]
}
module.exports = Xp
