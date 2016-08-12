'use strict'

function Git(){
	this.info = {
		name: 'Git',
		trigger: 'git',
		args: []
	}
}

Git.prototype.run = function(args, cb){
	switch(args[0]){
		default: 
			cb('Help me to be better ! https://github.com/Lunik/Floodix')
			break
	}
}

module.exports = new Git()