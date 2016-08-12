var Discord = require('discord.js')

var config = require('../configs/config.json')
var Log = require('./log.js')
var Message = require('./message.js')

function botReady(err, token, a, b, c){
	if(err){
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