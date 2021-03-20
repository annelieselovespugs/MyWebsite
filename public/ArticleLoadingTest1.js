//Below funcrions are for the UsingJSON.html page
//function pressLoadArticlesButton(){
//$("#load-articles").click(getTheData);
//}

function getTheData() {
  //$.ajax({
  //datatype: "json",
  //url: "https://firebasestorage.googleapis.com/v0/b/advancedtopicscs.appspot.com/o/blogArticles.json?alt=media&token=478d06a6-d7e5-4cac-a92d-7670dea8de17",
  //success: showTheData,
  //complete: thisRunsOnCompletion
  //});
  const db = firebase.firestore();

  db.settings({
    timestampsInSnapshots: true
  });

  const collection = db.collection('articles1');

  collection.get().then(snapshot => {

    snapshot.forEach(doc => {

      console.log(doc.data().name);
      console.log(doc.data().mail);

    });

  });

}

function showTheData(theData) {
  var allTheData = "";
  var holder = "";
  console.log(theData);

  for (i = 0; i < theData.length; i++) {
    //allTheData += "<h1>" + JSON.stringify(theData[i]) + "</h1>";
    //holder = JSON.parse(theData[i]);
    allTheData += "<h1>" + theData[i].headline + "</h1>";
    allTheData += "<h2>" + theData[i].author + "</h2>";
    allTheData += "<h3>" + theData[i].date + " | " + theData[i].numberOfLikes + "</h3>";
    allTheData += "<p>" + theData[i].body + "</p>";
    allTheData += "------------------------------------------------------------------------------";
  }
  $("#the-articles").html(allTheData);
}

function thisRunsOnCompletion() {
  console.log("getTheData() complete");
}

getTheData();
