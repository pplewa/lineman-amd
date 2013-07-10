require ['js/Modules/MySubModule'], (MySubModule) ->
	module = new MySubModule
	html = JST['app/templates/hello.us'](text: module.getHello())
	document.body.innerHTML += html