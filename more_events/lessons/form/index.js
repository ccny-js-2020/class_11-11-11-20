$("#first-form").submit(function(e){
  //"e" or "event" are values and attributes that belong to the event
  //here, e.preventDefault() is used in order to not refresh the page once the form is submitted
  //the natural behavior of a form is to refresh the page. this prevents that
  e.preventDefault();

  var username = $("#username-input").val();
  var password = $("#password-input").val();

  var creds = {
    username: username,
    password: password
  }

  console.log(creds);
});
