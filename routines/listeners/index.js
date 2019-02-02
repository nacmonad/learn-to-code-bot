const tweeters = require('../tweeters');
const {popularityLimitFilter, replyCountFilter} = require('../filters');
const throttler = require('../throttler');

const learnToCodeListener = function(client) {
  return client.stream('statuses/filter', {track: 'learn to code'}, function(stream) {
    //sensor
    stream.on('data', function(event) {
      const throttler = require('../throttler');
      console.log("THROTTLE COUNT: " + throttler())
      //THROTTLE_LIMIT
      if(throttler) {
        //filter
        if(popularityLimitFilter(event) ||
          false //add more filters
           ) {
          //actuator
          tweeters(event, client);
        }
      } else {
        console.log("do nothing")
      }




    });

    stream.on('error', function(error) {
      console.log(error)
      throw error;
    });
  });
}

module.exports = learnToCodeListener;
