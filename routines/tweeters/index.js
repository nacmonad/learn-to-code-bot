module.exports = function(event, client) {
      console.log("DO SOMETHING BRUH!")
      console.log(event)
      console.log(event.text);
      if(nToss(3)) {
        harassUser(event,client);
      } else {
        respondToThread(event, client);
      }
      tweetCannedResponse(event,client);
}


function tweetCannedResponse(event, client){
  var tweetId = event.id_str;
  var tweet = require('./randomTweets')();
  console.log(tweet)

  //HOLY SHIT WE LIVE@@@@!!!!

  var retweetBody = 'RT @' + event.user.screen_name + ' ' + tweet;
  client.post('statuses/update',{status:retweetBody}, function(error, tweet, response) {
    if (!error) { console.log(tweet); }
  });



  // client.post('statuses/retweet/' + tweetId, function(error, tweet, response) {
  //   if (!error) { console.log(tweet); }
  // });
}

// true for 1/n
function nToss(n) {
  var rand = Math.round(n*Math.random());
  console.log("rand nToss: " + rand);
  if(rand < n-1 && rand < n) return true;
  return false;
}

function respondToThread(event, client) {
  console.log("respond to thread!");
  tweetCannedResponse(event,client);
}

function harassUser(event, client) {
    console.log("harass!");
    tweetCannedResponse(event,client);

}
