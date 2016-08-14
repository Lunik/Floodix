'use strict'

function Git () {
  this.info = {
    name: 'Git',
    triggers: ['git'],
    args: []
  }
}

Git.prototype.run = function (user, args, cb) {
  var git = function (args) {
    switch (args[0]) {
      default:
        return 'help me to be better ! https://github.com/Lunik/Floodix'
        break
    }
  }

  cb(git(args))
}

module.exports = new Git()
