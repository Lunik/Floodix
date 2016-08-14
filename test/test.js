'use strict'

var path = require('path')
var fs = require('fs')

global.__base = path.join(__dirname, '..', '/')
global.__config = require(path.join(__base, 'configs/config.json'))

var assert = require('chai').assert

fs.writeFileSync(path.join(__base, 'data/xp.json'), JSON.stringify({
  '42': {
    'last': new Date(),
    'lvl': 2,
    'missing': 30,
    'xp': 27
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
    }
  ]

  modules.forEach(function (module) {
    describe(module.name, function () {
      var m = require(path.join(__base, 'src/modules/' + module.name + '.js'))
      module.tests.forEach(function (test) {
        describe('run(' + test.name + ')', function () {
          this.timeout(10000)
          it('Sould return string.', function (done) {
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
      it('Sould write into log.', function (done) {
        Log.print('test', function(){
          fs.readFile(path.join(__base, 'logs/log-' + (new Date()).getDate() + '-' + ((new Date()).getMonth() + 1)), function(err, data) {
            if (err) throw err
            var text = data.toString()
            if(!text.match('test')) throw 'Log not found.'
            done()
          })
        })
      })
    })
  })
})
