var tweetsList = [
  'Learn to code . https://youtu.be/bUXBHKZ9H1M',
  '#LearnToCode https://youtu.be/bUXBHKZ9H1M'
]

module.exports = function() {
  return tweetsList[Math.floor(Math.random()*tweetsList.length)];
}
