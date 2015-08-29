(function (global, document, $, undefined) {

var data= new Firebase("https://multiservicios.firebaseio.com/")

var userName = $("#user_name")
var userDni = $("#user_dni")


$("body").click(function(){
	console.log('click')
})

$("#button_send").click(function(){
	console.log("click")
	var uN = userName.val()
	var uD = userDni.val()

	data.push({name:uN, dni:uD})
	
})

console.log("cargado")
})(window, window.document, window.jQuery);


