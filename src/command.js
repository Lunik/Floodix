'use strict'

var config = require('../configs/config.json')
var Log = require('./log.js')

var fs = require('fs')
var path = require('path')

function Command(){
	var self = this

	this.list = {}

	fs.readdir(path.join(__dirname, 'modules'), function(err, modules){
		if(err){ console.log(err) }

		modules.forEach(function(value){
			if(value.match(/.*\.js/)){
				var name = value.replace(/\.js/, '')
				var module = require(path.join(__dirname, 'modules', value))
				self.list[module.info.trigger] = module
			}
		})
	})
}

Command.prototype.getCommand = function(text){
	text = text.match(/[^ ]+|"(?:\\"|[^"])+"/g)
	text.forEach(function(value, index){text[index] = value.replace(/"/g, '')})
	return {
		trigger: text.splice(0, 1)[0],
		args: text	
	}
}

Command.prototype.exist = function(command){
	if(typeof this.list[command.trigger] !== 'undefined'){
		return true
	}
	return false
}

Command.prototype.isValid = function(command){
	for(let i in this.list[command.trigger].info.args){
		let arg = this.list[command.trigger].info.args[i]
		
		// if required argument is not defined
		if(arg.require && typeof command.args[i] === 'undefined'){
			return false
		}

		// if argument don't match format
		if(command.args[i] && !command.args[i].match(new RegExp(arg.format))){
			return false
		}
	}

	return true
}

Command.prototype.process = function(command, cb){
	this.list[command.trigger].run(command.args, cb)
}

module.exports = new Command()