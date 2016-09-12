'use strict'
var path = require('path')

var cleverbot = require("cleverbot.io")
var bot = new cleverbot(__config.api.cleverbot.user, __config.api.cleverbot.key)

var Log = require(path.join(__base, 'src/worker/log.js'))

function Clever(){
	if(!__config.api.cleverbot.active){
    	return
    }
	bot.setNick('Floodix')
	bot.create(function (err, session) {
		if(err){
			Log.print(err)
		}
	})
}

Clever.prototype.process = function(message, cb){
	bot.ask(message, function(err, res){
		if(err){
			Log.print(err)
		}
		cb(res)
	})
}

module.exports = Clever
