'use strict'
var path = require('path')

var cleverbot = require("cleverbot.io")
var bot = new cleverbot(__config.api.cleverbot.user, __config.api.cleverbot.key)

var Log = require(path.join(__base, 'src/worker/log.js'))

function Clever(){
	var self = this
	bot.create(function (err, session) {
		console.log(session)
		if(err){
			Log.print(err)
		}
		self.session = session
		bot.setNick(session)
	})
}

Clever.prototype.process = function(message, cb){
	console.log(message)
	bot.ask(message, function(err, res){
		if(err){
			cb({
				err: err
			})
		}
		cb(res)
	})
}

module.exports = Clever