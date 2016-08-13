# How to create modules ?

Follow this template

```
function MyModule(){
	this.info = {
		name: 'MyModule',
		trigger: 'mymodule',
		args: [{
			name: 'myFirstArg',
			require: true,
			format: /.*/
		},
		{
			name: 'mySecondArg',
			require: false,
			format: /.*/
		}]
	}
}

MyModule.prototype.run = function(user, args, cb){
	/* Doing so stuff */
	cb(myResults)
}

module.exports = new MyModule()
```
