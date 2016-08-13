'use strict'

function Help () {
  this.info = {
    name: 'Help',
    trigger: 'help',
    args: [{
      name: 'command',
      require: false,
      format: /.*/
    }]
  }
}

Help.prototype.run = function (args, cb) {
  var help = function (args) {
    switch (args[0]) {
      default:
        return '\n**Floodix Help**\n\n'
        + 'Talk to him with **Floodix**\n\n'
        + '[optional parameter]\n<required parameter>\n'
        + '\n__**General :**__\n\n'
        + '	**help**	[command]\n 		Show help.\n'
        + '\n__**Administration :**__\n\n'
        + '\n__**Other :**__\n\n'
        + '	**ping**	[ip/domain]	\n 		Ping the bot or an optional url/ip.\n'
        + '	**git**\n 		Repo git of the bot.'
        break
    }
  }

  cb(help(args))
}

module.exports = new Help()
