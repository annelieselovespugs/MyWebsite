function loadSDCCRss(result) {
  result = xmlToJson(result);
  var items = result['rss']['channel']['item'];

var allItems = "";

console.log(items[0]);

for (i=0; i < items.length; i++){
  allItems += "<h1>" + items[i].title + "</h1>";
  allItems += "<p> (" + items[i].pubDate + ") </p>";
  allItems += "<p>" + items[i].description + "</p>";
  allItems += "<a href=" + "\"" + items[i].link + "\"" +">Click here to read more!</a>";
  allItems += "<br /><br />------------------------------------------------------------------------------<br /><br />";
}
  $("#sdccRSS").html(allItems);
}

function requestSDCCRss() {
  // Load chocolates JSON
  $.ajax({
    dataType: "xml",
    url: "https://cors-anywhere.herokuapp.com/https://www.pokemon.com/us/pokemon-news/rss",
    success : loadSDCCRss
  });
}

function requestRSSFeeds() {
  requestSDCCRss();
}


requestRSSFeeds();
