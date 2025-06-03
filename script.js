
function isEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function isPassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
}


$('#submitbtn').click(function(){
    let errormsg ="";
    $("#success").hide();

    if($("#name").val() == '' || $("#email").val() == '' || $("#phone").val() == '' || $("#password").val() == '' || $("#confPass").val() == ''){
        errormsg += "<p> Enter all required fields </p>";
    }else{
        if ($("#age").val() !== '') {
          const ageNum = $("#age").val();
          if ($.isNumeric(ageNum) == false || ageNum < 0 || ageNum > 200) {
              errormsg += "<p>Age must be a number between 0 and 200</p>";
          }
        }
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
        $("#error").hide();
    }else{
        $("#error").html(errormsg).show();
    }
});

// Show Password
$("#showPass").click(function() {
    const passInput = $("#password");
    const isPassword = passInput.attr("type") === "password";
    passInput.attr("type", isPassword ? "text" : "password");
    $(this).text(isPassword ? "Hide" : "Show");
  });
  
  $("#showConPass").click(function() {
    const confPassInput = $("#confPass");
    const isPassword = confPassInput.attr("type") === "password";
    confPassInput.attr("type", isPassword ? "text" : "password");
    $(this).text(isPassword ? "Hide" : "Show");
  });
  

  //Live Validation
  function validatePhoneNumber() {
    const phoneVal = $("#phone").val();
    const isValid = phoneVal.length === 10;
  
    if (phoneVal === "") {
      $("#phoneError").remove();
    } else if (!isValid) {
      if ($("#phoneError").length === 0) {
        $('<p id="phoneError" style="color: red; font-size: 0.9em;">Phone number must be exactly 10 digits.</p>').insertAfter("#phone");
      }
    } else {
      $("#phoneError").remove();
    }
  }
  
  $("#phone").on("input", function() {
    let val = $(this).val();
    val = val.replace(/\D/g, '');
    if (val.length > 10) val = val.substring(0, 10);
    $(this).val(val);
    validatePhoneNumber();
  });
  
