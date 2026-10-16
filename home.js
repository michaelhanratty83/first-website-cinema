// Function to toggle hidden content visibility
function toggleContent() {
  // Get the hidden content element
  var content = document.querySelector(".hidden-content");
  // Get the button element
  var button = document.querySelector(".show-more-btn");

  // Check if the hidden content is currently hidden
  if (content.style.display === "none") {
    // If hidden, display the content and change the button text to "Show Less"
    content.style.display = "block";
    button.textContent = "Show Less";
  } else {
    // If visible, hide the content and change the button text to "Show More"
    content.style.display = "none";
    button.textContent = "Show More";
  }
}

// jQuery code
$(document).ready(function() {
  // When the changeButton is clicked
  $('#changeButton').click(function() {
    // Get the current source of the main image
    var currentSrc = $('#mainImage').attr('src');
    
    // Define the new image source based on the current source
    var newSrc;
    if (currentSrc === 'cinema.jpg') {
      newSrc = 'cinema2.jpg';
    } else if (currentSrc === 'cinema2.jpg') {
      newSrc = 'cinema3.jpg';
    } else {
      newSrc = 'cinema.jpg';
    }
    
    // Change the source of the main image to the new image
    $('#mainImage').attr('src', newSrc);

    // Set the width and height of the new image to match the original image
    var originalWidth = $('.cinema-image').first().width();
    var originalHeight = $('.cinema-image').first().height();
    $('#mainImage').css({'width': originalWidth + 'px', 'height': originalHeight + 'px'});
  });
});

// Another toggleContent function definition with slightly different logic
function toggleContent() {
  var content = document.querySelector(".hidden-content");
  var btn = document.querySelector(".show-more-btn");
  // Check if the content is hidden or not
  if (content.style.display === "none" || content.style.display === "") {
    // If hidden or initial state, show the content and change button text to "Show Less"
    content.style.display = "block";
    btn.textContent = "Show Less";
  } else {
    // If visible, hide the content and change button text to "Show More"
    content.style.display = "none";
    btn.textContent = "Show More";
  }
}

// Event listener for the newsletter form submission
document.getElementById("newsletterForm").addEventListener("submit", function (event) {
  // Prevent default form submission behavior
  event.preventDefault();
  // Get user input for name and email
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  // Create a subscriber object
  var subscriber = {
    name: name,
    email: email
  };
  // Save subscriber info to local storage
  localStorage.setItem("subscriber", JSON.stringify(subscriber));
  // Display a confirmation message
  alert("Thank you for subscribing!");
  // Clear the form after submission
  document.getElementById("newsletterForm").reset();
});

// Event listener for name input to allow only letters
var nameInput = document.getElementById("name");
nameInput.addEventListener("input", function(event) {
  var inputValue = event.target.value;
  // Regular expression to allow only letters
  var lettersOnly = /^[A-Za-z]+$/;
  // Check if the input matches the regular expression
  if (!lettersOnly.test(inputValue)) {
    // If input contains numbers or special characters, remove them
    event.target.value = inputValue.replace(/[^A-Za-z]/g, '');
  }
});

// Function to set a cookie with expiration date
setCookie = (cName, cValue, expDays) => {
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

// Function to get the value of a cookie
getCookie = (cName) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;
  // Loop through cookie array to find the specified cookie
  cArr.forEach(val => {
    if(val.indexOf(name) === 0) value = val.substring(name.length);
  })
  return value;
}

// Event listener for cookies consent button click
document.querySelector("#cookies-btn").addEventListener("click", () => {
  // Hide the cookies notification
  document.querySelector("#cookies").style.display = "none";
  // Set a cookie to remember user consent for 28 days
  setCookie("cookie", true, 28);
})

// Function to display cookies notification if user has not given consent
cookieMessage = () => {
  if(!getCookie("cookie"))
    document.querySelector("#cookies").style.display = "block";  
}  

// Event listener for window load event to display cookies message
window.addEventListener("load", cookieMessage);



