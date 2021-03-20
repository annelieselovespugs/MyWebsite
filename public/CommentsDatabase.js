const commentInput = $("#comment_input");
const latestComment = $("#latest_comment");
const sendComment = $("#send_comment");
const horseOutput = $("#horse_output");

//Connect to firebase and store in var firestore
var firestore = firebase.firestore();
const databaseDocumentRef = firestore.doc("comments/latestComments");



function commentSuccess() {
  console.log("Comment Submitted!");
}

function generalErrorHandler(error) { //error or "errer"? It was originally "errer", was that a typo...? Oh well.
    console.log("Got an error", error);
};

function submitComment() {
    //console.log('submitting comment: ' + commentInput.val());
    databaseDocumentRef.set(
      {
          latestComment : commentInput.val()
      }
    ).then(commentSuccess).catch(generalErrorHandler);
}

function getLatestComment(){
  //console.log("Got latest vote");
  databaseDocumentRef.get().then(showLatestComment);
}

function showLatestComment(Data){
  if (Data && Data.exists){
    var documentData = Data.data();
  }
  $("#display_comment").html(documentData.latestComment);
}



sendComment.click(submitComment); 
$("#show_latest_comment").click(getLatestComment);
