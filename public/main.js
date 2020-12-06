/*var cookie = document.cookie;
var cookieType = "sugar";
if (!cookie){
  cookie = 1;
}
else if (cookie%2 == 0){
  cookieType = "chocolate chip";
  cookie++;
  document.cookie = cookie;
}
else{
  cookieType = "sugar";
  cookie++;
  document.cookie = cookie;
}
alert("You have visited the site " + cookie + " time(s), so you get a " + cookieType + " cookie.")*/




//$("#load_chocolate") = document.getElementById("#load_chocolate")
//First option is JQueary

document.getElementById("about_me").onclick = function(){
  location.href = "AboutMe.html";
}

document.getElementById("favorite_characters").onclick = function(){
  location.href = "FavoriteCharacters.html";
}

document.getElementById("fun_and_games").onclick = function(){
  location.href = "FunAndGames.html";
}


//Functions
/*function $requestAboutMe(){
  unloadContent();
  $.ajax({url: "AboutMe.html", success: loadContent})
}*/


//Events
//$("#load_about_me").click(requestAboutMe);
