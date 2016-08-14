'use strict'

var path = require('path')
var fs = require('fs')

global.__base = path.join(__dirname, '..', '/')
global.__config = require(path.join(__base, 'configs/config.json'))

var assert = require('chai').assert

fs.writeFileSync(path.join(__base, 'data/xp.json'), JSON.stringify({
  '42': {
    'last': new Date() - 60000,
    'lvl': 2,
    'missing': 0,
    'xp': 27
  },
  '43': {
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
  describe('Save', function () {
    var Save = require(path.join(__base, 'src/worker/save.js'))
    describe('Contructor()', function(){
      it('Should save a struct.', function(done){
        var interval = new Save('test', {}, 10, function(){
          clearInterval(interval)
          fs.readFile(path.join(__base, 'data/test.json'), function(err, data) {
            if (err) throw err
            var text = data.toString()
            if(!text.match('{}')) throw 'Data not found.'
            done()
          })
        })
      })
    })
  })

  describe('Config', function(){
    var Config = require(path.join(__base, 'src/worker/config.js'))
    describe('Load ()', function(){
      it('Sould load config.', function(done){
        var c = new Config()
        c.load(path.join(__base, 'configs/config.json'))
        done()
      })
    })
  })

  describe('Xp', function(){
    var Xp = require(path.join(__base, 'src/worker/xp.js'))
    var XpWorker = new Xp(false)
    describe('Pex(42)', function(){
      it('Sould return a string', function(done){
        var res = XpWorker.pex({
          id: '42'
        })
        assert.typeOf(res, 'string')
        done()
      })
    })
    describe('Pex(Unknown)', function(){
      it('Sould return a string', function(done){
        var res = XpWorker.pex({
          id: '7'
        })
        assert.typeOf(res, 'string')
        done()
      })
    })
    describe('Pex(Bot)', function(){
      it('Sould return false', function(done){
        var res = XpWorker.pex({
          bot: true
        })
        assert(!res)
        done()
      })
    })
  })
})
