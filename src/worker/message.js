'use strict'

var path = require('path')

var Log = require(path.join(__base, 'src/worker/log.js'))

var Command = require(path.join(__base, 'src/worker/command.js'))
var CommandWorker = new Command(false)
var Xp = require(path.join(__base, 'src/worker/xp.js'))
var XpWorker = new Xp(false)
var Clever = require(path.join(__base, 'src/worker/clever.js'))
var CleverWorker = new Clever()

/**
 *  Message handler.
 * @constructor
*/
function Message (bot) {
  var self = this
  self.bot = bot
  bot.on('message', function(message){
    self.handle(message, function(){})
  })
}

Message.prototype.handle = function(message, cb){
  var self = this
  self.watch(message)
    if (message.isMentioned({ 'id': __config.clientid })) {
      Log.print('[' + message.channel.name + '] ' + message.author.name + ': ' + message.cleanContent)
      self.process(message, function (results) {
        if (results) {
          message.reply(results)
          cb({
            type: 'command'
          })
        } else {
          if(!__config.api.cleverbot.active){
            cb({
              type: 'noclever'
            })
            return
          }
          CleverWorker.process(cleanMessageText(message), function(res){
            if(res !== ''){
              message.reply(results)
            }
            cb({
              type: 'clever'
            })
          })
        }
      })
    } else {
      cb({
        type: 'none'
      })
    }
}

Message.prototype.process = function (message, cb) {
  var text = cleanMessageText(message)

  var command = CommandWorker.getCommand(text)

  if (!CommandWorker.exist(command)) {
    cb(false)
    return
  }

  if (!CommandWorker.isValid(command)) {
    cb('Invalid command format.')
    return
  }

  CommandWorker.process(message.author, command, cb)
}

Message.prototype.watch = function (message) {
  var pex = XpWorker.pex(message.author)
  if (pex) {
    this.bot.reply(message, pex)
  }
  return 0
}

function cleanMessageText (message) {
  var text = message.cleanContent.split(' ')
  text.splice(0, 1)
  return text.join(' ').trim().toLowerCase()
}

module.exports = Message
