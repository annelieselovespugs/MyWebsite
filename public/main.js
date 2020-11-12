//$("#load_chocolate") = document.getElementById("#load_chocolate")
//First option is JQueary

function changeSomeHtml(){
  $("#load_chocolate").innerHTML = "THIS IS NEW";
}


function autoplayMusic() {
  var musicVar = document.getElementById("bg-music").autoplay;
  document.getElementById("bg-music").innerHTML = musicVar;
}
