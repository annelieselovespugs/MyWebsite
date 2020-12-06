const horseInput = $("#horse_input");
const latestHorseBreed = $("#latest_vote");
const voteOnHorse = $("#vote_horse");
const horseOutput = $("#horse_output");

//Connect to firebase and store in var firestore
var firestore = firebase.firestore();
const databaseDocumentRef = firestore.doc("horses/latestHorseRating");



function voteSuccess() {
  console.log("vote saved!");
}

function generalErrorHandler(errer) {
    console.log("Got an error", error);
};

function submitHorseVote() {
    //console.log('submitting horse vote: ' + horseInput.val());
    databaseDocumentRef.set(
      {
          latestHorse : horseInput.val()
      }
    ).then(voteSuccess).catch(generalErrorHandler);
}

function getLatestVote(){
  //console.log("Got latest vote");
  databaseDocumentRef.get().then(showLatestVote);
}

function showLatestVote(Data){
  if (Data && Data.exists){
    var documentData = Data.data();
  }
  $("#display_horse").html(documentData.latestHorse);
}



voteOnHorse.click(submitHorseVote); 
$("#show_latest_horse").click(getLatestVote);
