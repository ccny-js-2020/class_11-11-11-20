var currentUserNames = ["memer27", "jumbo-shrempf", "class-of-1984"];

$("#first-form").submit(function(e){
  e.preventDefault();

  var name = $("#name-input").val();
  var email = $("#email-input").val();
  var username = $("#username-input").val();
  var password = $("#password-input").val();

  var nameValid = true;
  var emailValid = true;
  var usernameValid = true;
  var passwordValid = true;
  
  if(name == ""){
    alert("please enter name");
    nameValid = false;
  } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1){
    alert("please enter valid email")
    emailValid = false;
  } else if (currentUserNames.indexOf(username) > -1){
    alert("username is already taken")
    usernameValid = false;
  } else if (password.length < 7){
    alert("password is invalid. It must be at least 7 characters");
    passwordValid = false;
  }

  if(nameValid && emailValid && usernameValid && passwordValid){
      var creds = {
        name: name,
        email: email,
        username: username,
        password: password,
      }

      console.log(creds);
  }


});
