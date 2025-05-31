
function isEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function isPassword(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
}


$('#submitbtn').click(function(){
    var errormsg ="";

    if($("#email").val() == '' || $("#phone").val() == '' || $("#password").val() == '' || $("#confPass").val() == ''){
        errormsg += "<p> Enter all required fields </p>";
    }else{
        if(isEmail($("#email").val()) == false){
            errormsg += "<p> Email ID is not valid </p>";
        }
        if($.isNumeric($("#phone").val()) == false || $("#phone").val().length !=10){
            errormsg += "<p>Phone No. is not valid. It should have 10 digits.</p>";
        }
        if (isPassword($("#password").val()) == false) {
            errormsg += "<p> Password must be at least 6 characters, include uppercase, lowercase, and a number </p>";
        }
        if($("#password").val() != $("#confPass").val()){
            errormsg += "<p>Password and Confirm-Password are not same</p>";
        }
    }
    
    if(errormsg == ""){
        $("#success").html("You are Registered!").show();
    }else{
        $("#error").html(errormsg).show();
    }
});

// Show Password
$("#showPass").hover(
    function() {
      $("#password").attr("type", "text");
    },
    function() {
      $("#password").attr("type", "password");
    }
);

$("#showConPass").hover(
    function() {
      $("#confPass").attr("type", "text");
    },
    function() {
      $("#confPass").attr("type", "password");
    }
);
