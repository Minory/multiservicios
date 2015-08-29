(function (global, document, $, undefined) {
    var data = new Firebase("https://multiservicios.firebaseio.com");

    var userName = $("#user_name");
    var userDni = $("#user_dni");

    $('#button_send').click(function () {
        //FIELD VALUES
	      var uN = userName.val();
	      var uD = userDni.val();
        console.log("click");

        //SAVE DATA TO FIREBASE AND EMPTY FIELD
	      data.push({name:uN, dni:uD})
   });


})(window, window.document, window.jQuery);
