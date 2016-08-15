'use strict'

var path = require('path')
var fs = require('fs')

global.__base = path.join(__dirname, '..', '/')
global.__config = require(path.join(__base, 'configs/config.json'))
__config.clientid = '0'
__config.api.imgur = process.env.IMGUR_API || __config.api.imgur

var assert = require('chai').assert

fs.writeFileSync(path.join(__base, 'data/xp.json'), JSON.stringify({
  '42': {
    'last': new Date() - 60000,
    'lvl': 2,
    'missing': 0,
    'xp': 27
  },
  '7': {
    'last': new Date() - 60000,
    'lvl': 10,
    'missing': 0,
    'xp': 1000
  }
}))

describe('Module', function () {
  var modules = [
    {
      name: 'github',
      tests: [{
        name: 'Default',
        user: {},
        args: []
      }]
    },
    {
      name: 'help',
      tests: [{
        name: 'Default',
        user: {},
        args: []
      }]
    },
    {
      name: 'hi',
      tests: [{
        name: 'Default',
        user: {},
        args: []
      }]
    },
    {
      name: 'imgur',
      tests: [{
        name: 'Default',
        user: {},
        args: ['cat']
      }]
    },
    {
      name: 'ping',
      tests: [{
        name: 'Default',
        user: {},
        args: []
      },
        {
          name: 'Ping Hostname',
          user: {},
          args: ['google.fr']
        }]
    },
    {
      name: 'rank',
      tests: [{
        name: 'Default',
        user: {
          id: '42'
        },
        args: []
      }]
    },
    {
      name: 'version',
      tests: [{
        name: 'Default',
        user: {},
        args: []
      }]
    },
    {
      name: 'pokemon',
      tests: [{
        name: 'pokemon unknown',
        user: {},
        args: ['unknown']
      },
      {
        name: 'pokemon Pikachu',
        user: {},
        args: ['Pikachu']
      }]
    }
  ]

  modules.forEach(function (module) {
    describe(module.name, function () {
      var m = require(path.join(__base, 'src/modules/' + module.name + '.js'))
      describe('run()', function () {
        this.timeout(10000)
        module.tests.forEach(function (test) {
          it(test.name, function (done) {
            m.run(test.user, test.args, function (res) {
              assert.typeOf(res, 'string')
              done()
            })
          })
        })
      })
    })
  })
})

describe('Worker', function () {
  describe('Log', function () {
    var Log = require(path.join(__base, 'src/worker/log.js'))
    describe('print()', function () {
      it('Logs are writted into file.', function (done) {
        Log.print('test', function () {
          fs.readFile(path.join(__base, 'logs/log-' + (new Date()).getDate() + '-' + ((new Date()).getMonth() + 1)), function (err, data) {
            if (err) throw err
            var text = data.toString()
            if (!text.match('test')) throw 'Log not found.'
            done()
          })
        })
      })
    })
  })
  describe('Save', function () {
    var Save = require(path.join(__base, 'src/worker/save.js'))
    describe('Contructor()', function () {
      it('Save a structure.', function (done) {
        var interval = new Save('test', {}, 10, function () {
          clearInterval(interval)
          fs.readFile(path.join(__base, 'data/test.json'), function (err, data) {
            if (err) throw err
            var text = data.toString()
            if (!text.match('{}')) throw 'Data not found.'
            done()
          })
        })
      })
    })
  })

  describe('Config', function () {
    var Config = require(path.join(__base, 'src/worker/config.js'))
    describe('Load ()', function () {
      it('Load config.', function (done) {
        var c = new Config()
        c.load(path.join(__base, 'configs/config.json'))
        done()
      })
    })
  })

  describe('Xp', function () {
    var Xp = require(path.join(__base, 'src/worker/xp.js'))
    var XpWorker = new Xp(false)
    describe('Pex()', function () {
      it('User: 42', function (done) {
        var res = XpWorker.pex({
          id: '42'
        })
        assert.typeOf(res, 'string')
        done()
      })
      it('User: Unknown', function (done) {
        var res = XpWorker.pex({
          id: '7'
        })
        assert.typeOf(res, 'string')
        done()
      })
      it('User: Bot', function (done) {
        var res = XpWorker.pex({
          bot: true
        })
        assert(!res)
        done()
      })
    })
  })

  describe('Command', function () {
    var Command = require(path.join(__base, 'src/worker/command.js'))
    var CommandWorker = new Command(false)
    describe('GetCommand(). Command: Ping', function () {
      it('Command: ping google.fr', function (done) {
        var res = CommandWorker.getCommand('ping google.fr')
        assert.typeOf(res, 'object')
        assert.equal(res.trigger, 'ping')
        assert.lengthOf(res.args, 1)
        done()
      })
      it('ommand: Unknown', function (done) {
        var res = CommandWorker.getCommand('')
        assert.typeOf(res, 'object')
        assert(!res.trigger)
        assert.lengthOf(res.args, 0)
        done()
      })
    })
    describe('Exist()', function () {
      it('Command: ping google.fr', function (done) {
        assert(CommandWorker.exist({
          trigger: 'ping',
          args: ['google.fr']
        }))
        done()
      })
      it('Command: Unknown', function (done) {
        assert(!CommandWorker.exist({
            trigger: '',
            args: []
          }))
        done()
      })
    })
    describe('isValid()', function () {
      it('Command: Ping google.fr', function (done) {
        assert(CommandWorker.isValid({
          trigger: 'ping',
          args: ['google.fr']
        }))
        done()
      })
      it('Command: ping http://google.fr', function (done) {
        assert(!CommandWorker.isValid({
            trigger: 'ping',
            args: ['http://google.fr']
          }))
        done()
      })
      it('Command: imgur', function (done) {
        assert(!CommandWorker.isValid({
            trigger: 'imgur',
            args: []
          }))
        done()
      })
    })
    describe('Process()', function () {
      it('Command: hi', function (done) {
        CommandWorker.process({}, {
          trigger: 'hi',
          args: []
        }, function (res) {
          assert.typeOf(res, 'string')
          done()
        })
      })
    })
  })

  describe('Message', function () {
    var Message = require(path.join(__base, 'src/worker/message.js'))
    var MessageWorker = new Message({
      on: function (trigger, cb) {}
    })
    describe('Process()', function () {
      it('Message: @Floodix hi', function (done) {
        MessageWorker.process({
          author: {
            name: 'test'
          },
          cleanContent: '@Floodix hi'
        }, function (res) {
          assert.typeOf(res, 'string')
          done()
        })
      })
      it('Message: @Floodix coucou', function (done) {
        MessageWorker.process({
          author: {
            name: 'test'
          },
          cleanContent: '@Floodix coucou'
        }, function (res) {
          assert(!res)
          done()
        })
      })
      it('Message: @Floodix imgur', function (done) {
        MessageWorker.process({
          author: {
            name: 'test'
          },
          cleanContent: '@Floodix imgur'
        }, function (res) {
          assert.typeOf(res, 'string')
          done()
        })
      })
    })
  })
})
