//$("#load_chocolate") = document.getElementById("#load_chocolate")
//First option is JQueary

//Functions
function $requestAboutMe(){
  unloadContent();
  $.ajax({url: "AboutMe.html", success: loadContent})
}

//Events
$("#load_about_me").click(requestAboutMe);
