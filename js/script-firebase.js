(function (global, document, $, undefined) {

    var ref = new Firebase("https://asistencia-hackspace.firebaseio.com");

    var refInfo = new Firebase("https://asistencia-hackspace.firebaseio.com/user_profile");

    var userEmail = $('#email');
    var userPassword = $('#password');

    var firstName = $('#first_name');
    var lastName = $('#last_name');
    var githubUser = $('#github');
    var twitterUser = $('#twitter');
    var infoUser= $('#info')

    $('#register-user').click(function () {
        var uE = userEmail.val();
        var uP = userPassword.val();

        ref.createUser({
            email    : uE,
            password : uP
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }
        });
        setTimeout(function(){
            ref.authWithPassword({
                email    : uE,
                password : uP,
            }, function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                }
            });
        }, 1000);

        $('#form_register').fadeOut(500);
        setTimeout(function(){
            $('#form_datos').fadeIn(300);
        }, 700);

    });
    $('#send-info').click(function () {
        //FIELD VALUES
        var fN = firstName.val();
        var lN = lastName.val();
        var gU = githubUser.val();
        var tU = twitterUser.val();
        var iU = infoUser.val();
        var uE = userEmail.val();
        var uP = userPassword.val();


        //SAVE DATA TO FIREBASE AND EMPTY FIELD
        refInfo.push({email: uE,first_name:fN, last_name:lN,github:gU, twitter:tU,info:iU});
    });


})(window, window.document, window.jQuery);
