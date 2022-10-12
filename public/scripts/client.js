/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(data) {
  for (const dataid of data) {
  const $tweet = createTweetElement(dataid);

// Test / driver code (temporary)
  $('.articles-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  }
}

const createTweetElement = function(dataid) {
let $tweet = `
<article class="tweets-container"> 

<header class="tweeterheader">    
 <div class="user-profile">       
 <img class="avatars" src="${dataid.user.avatars}"></img>        
 <div>Newton</div>      
 </div>      
 <div class="tweeter-name">${dataid.user.handle}</div>     
 </header>  

<div class="tweet-text">${dataid.content.text}</div> 
<div class="border"></div> 

<footer class="tweet-footer">${dataid.created_at}
 <div class="icon-group">        
   <i class="fas fa-flag"></i>         
   <i class="fas fa-retweet"></i>      
   <i class="fas fa-heart"></i>       
   </div> 
</footer>
</article>`
return $tweet;
}

renderTweets(data);

