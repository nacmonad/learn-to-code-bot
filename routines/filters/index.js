const popularityLimitFilter = function(event) {

  //tweeter--> event.user.screen_name
  //tweeter followers --> event.user.followers_count
  //follower/friend ratio --> event.user.followers_count/event.user.friends_count >>> 10
  //
  if(event.user.followers_count/event.user.friends_count > 1) return true;
  return false;

}

const replyCountFilter = function(event) {
  if(event.reply_count > 1) return true;
  return false;
}

module.exports = {
  popularityLimitFilter,
  replyCountFilter
}
