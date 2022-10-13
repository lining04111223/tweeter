
$(document).ready(() => {
//The function render the data to the page
const renderTweets = function(data) {
  for (const dataid of data) {
  const $tweet = createTweetElement(dataid);

// Test / driver code (temporary)
  $('.articles-container').prepend($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  }
}

//The function create new tweet
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
  console.log("datasend",dataToSendToServer);

  // send the information to the server via a POST request
   $.ajax({
    url: '/tweets',
    method: 'POST',
    data: dataToSendToServer
   })
   .then((data) => {
    loadtweets();  
    console.log("tweetdata",data);
   })
   .catch((err) => {
    console.log("err",err);
   });
  });
  

  // make an AJAX request for all the tweets
  const loadtweets = function(){
  $.ajax({
    url: '/tweets',
    method: 'GET'
  })
  .then((data) => {

    renderTweets(data);    
    console.log("get",data);
  })
  .catch((err) => {
    console.log(err);
  });
  }
  loadtweets();

});