var me = document.currentScript;
//var text = document.createTextNode('new text');

fetch('https://yepi.io/api/quote', {
	method: 'get'
}).then(function(response) {
	return response.text();
}).then(function(text) {
	var quote = document.createTextNode(text + ' - Kanye West');
	me.parentNode.insertBefore(quote, me);
}).catch(function(err) {
	// Error :(
});
