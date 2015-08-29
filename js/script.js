(function (global, document, $, undefined) {
    var data = new Firebase("https://multiservicios.firebaseio.com");

    var userName = $("#user_name");
    var userDni = $("#user_dni");
    var userCuenta = $("#user_cuenta");
    var userTcuenta = $("#user_type_cuenta");

    $('#button_send').click(function () {
        //FIELD VALUES
	      var uN = userName.val();
	      var uD = userDni.val();
	      var uC = userCuenta.val();
	      var uTC = userTcuenta.val();
     

        //SAVE DATA TO FIREBASE AND EMPTY FIELD
	      data.push({name:uN, dni:uD, cuenta:uC, tipo_cuenta:uTC})
   });


})(window, window.document, window.jQuery);
