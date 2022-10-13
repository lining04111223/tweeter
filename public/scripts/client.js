/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from initial-tweets.json

$(document).ready(() => {

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

<footer class="tweet-footer">${timeago.format(dataid.created_at)}
 <div class="icon-group">        
   <i class="fas fa-flag"></i>         
   <i class="fas fa-retweet"></i>      
   <i class="fas fa-heart"></i>       
   </div> 
</footer>
</article>`
return $tweet;
}



// grab the form
  const $form = $('.form-inline');

  // listen for the form to submit
  $form.on('submit', (event) => {
    event.preventDefault(); // hey browser, we've got this! don't do what you would normally do
  // get the data from the form
  const dataToSendToServer = $form.serialize();
  console.log(dataToSendToServer);

  // send the information to the server via a POST request
   $.ajax({
    url: '/tweets',
    method: 'POST',
    data: dataToSendToServer
   })
   .then((tweetdata) => {
    console.log("tweetdata",tweetdata);
   })
   .catch((err) => {
    console.log("err",err);
   });
  });
  

  // make an AJAX request for all the tweets
  $.ajax({
    url: '/tweets',
    method: 'GET'
  })
  .then((data) => {

    renderTweets(data);    
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });



});