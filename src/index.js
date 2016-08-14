'use strict'

var path = require('path')

global.__base = path.join(__dirname, '..', '/')

var Discord = require('discord.js')

var config = require(path.join(__base, 'configs/config.json'))
var Log = require(path.join(__base, 'src/worker/log.js'))
var Message = require(path.join(__base, 'src/worker/message.js'))

function botReady (err, token, a, b, c) {
  if (err) {
    Log.print(err)
    return -1
  } else {
    var messageWorker = new Message(bot)
    Log.print('Bot started.')
  }
}

var bot = new Discord.Client()

Log.print('Bot starting...')
bot.loginWithToken(config.token, botReady)
