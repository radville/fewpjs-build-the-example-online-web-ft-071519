// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.getElementsByClassName("like-glyph")
for (const heart of hearts) {
  heart.addEventListener("click", function() {
    mimicServerCall()
      .then(function(serverMessage){
        if (heart.innerHTML === EMPTY_HEART) {
          heart.innerHTML = FULL_HEART;
          heart.classList.add("activated-heart")
        } else {
          heart.innerHTML = EMPTY_HEART;
          heart.classList.remove("activated-heart")
        }
      })
      .catch(function(error) {
        document.getElementById("modal").classList.remove("hidden");
        alert("Something went wrong!");
        setTimeout(function(){document.getElementById("modal").classList.add("hidden")}, 5000);
      });
  })
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
