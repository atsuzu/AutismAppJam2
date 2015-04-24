$(document).ready(function(){
    $("#warning").hide();
   
    $("#submitLogin").click(function(){
        validate();
    });
});

function validate(){

    if( $("#usernameId").val() == "" )
   {
     $("#warning").empty();
     $("#warning").html("username cannot be empty!");
     // document.pinForm.pin.focus() ;
     $("#warning").show();
     return;
   }
   if( $("#passId").val() == "" )
   {        
     $("#warning").empty();
     $("#warning").html("password cannot be empty!");
     // document.pinForm.reenterPin.focus() ;
     $("#warning").show();
     return;
   }

   // check in database using ajax
    var my_data = {"user" : $("#usernameId").val(), "pass" : $("#passId").val()};

    $.ajax({
        url: "handleLogin.html", // Url to which the request is send
        type: "POST",           // Type of request to be send, called as method
        data: my_data,  // Data sent to server, a set of key/value pairs
        success: function(data)   // A function to be called if request succeeds
        {
            if (data == 'Invalid username or password!'){
                $("#warning").html(data);
                $("#warning").show();
            }
            else if (data == 'Sucessfully logged in!'){
                 window.location.replace("events.html");
            }

            // $("#warning").removeClass().addClass("alert alert-success error-resize center");
        }
    });     
   
}
