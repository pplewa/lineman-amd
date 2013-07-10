define ['js/Modules/MyModule'], (MyModule) ->
	class MySubModule extends MyModule
		constructor: ->
		getHello: ->
			"#{@message} mate!"

	return MySubModule