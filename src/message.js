'use strict'

var config = require('../configs/config.json')
var Log = require('./log.js')

var CommandWorker = require('./command.js')
/**
 *  Message handler.
 * @constructor
*/
function Message (bot) {
  var self = this
  bot.on('message', function(message){
    if(isMentionated(message)) {
      Log.print('[' + message.channel.name + '] ' + message.author.name + ': ' + message.cleanContent)
      self.process(message, function(results){
        bot.sendMessage(message, '<@'+message.author.id + '>\n' + results);
      })
    }
  })
}

Message.prototype.process = function(message, cb){
  var text = cleanMessageText(message)

  var command = CommandWorker.getCommand(text)

  if(!CommandWorker.exist(command)){
    cb('Unknown command.')
    return
  }

  if(!CommandWorker.isValid(command)){
    cb('Invalid command format.')
    return
  }

  CommandWorker.process(command, cb)
}

function cleanMessageText (message){
  var text = message.cleanContent.split(' ')
  text.splice(0, 1)
  return text.join(' ').trim().toLowerCase()
}

function isMentionated (message){
  for(let i in message.mentions){
    let user = message.mentions[i]
    if(user.id == config.clientid && message.content.split(' ')[0] === '<@' + config.clientid + '>'){
      return true
    }
  }
  return false
}

module.exports = Message