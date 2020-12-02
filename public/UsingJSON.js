//function pressLoadButton(){
//  $("#play_a_game").click(ajaxTheGame);
//}

//function ajaxTheGame(){
//  $.ajax({url: "game.html", success: loadContent});
//}

//function loadContent(result) {
//  $("#game_content").html(result);
//}

//$("#play_a_game").click(ajaxTheGame);


//Below funcrions are for the UsingJSON.html page
function pressLoadArticlesButton(){

  $("#load-articles").click(getTheData);
}

function getTheData(){
  $.ajax({
    datatype: "json",
    url: "https://firebasestorage.googleapis.com/v0/b/advancedtopicscs.appspot.com/o/blogArticles.json?alt=media&token=478d06a6-d7e5-4cac-a92d-7670dea8de17",
    success: showTheData
  });
}

function showTheData(theData){
  var allTheData = "";
  for (i=0; i < theData.length; i++){
    allTheData += "<h1>" + theData['type'] + "</h1>";
  }
  $("#the-articles").html(allTheData);
}

getTheData();



$("#load-articles").click(getTheData);
