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
