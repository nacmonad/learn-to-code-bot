var count = 0;
var timer = setInterval(function(){
  count++;
}, 1000);

const LIMIT = 30*60

module.exports = function() {
      if(count > LIMIT) {
        count = 0;
        console.log("RESET THROTTLER!")
        return true;
      }
      return false;
}
