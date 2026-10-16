// Function to toggle the visibility of the hidden content
function toggleContent() {
    var content = document.querySelector(".hidden-content");
    var btn = document.querySelector(".show-more-btn");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        btn.textContent = "Show Less";
    } else {
        content.style.display = "none";
        btn.textContent = "Show More";
    }
}

// Function to handle form submission for newsletter subscription
document.getElementById("newsletterForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subscriber = {
        name: name,
        email: email
    };
    // Saving subscriber info to local storage
    localStorage.setItem("subscriber", JSON.stringify(subscriber));
    // Display a confirmation message
    alert("Thank you for subscribing!");
    // Clear the form after submission
    document.getElementById("newsletterForm").reset();
});

// Function to set a cookie with the specified name, value, and expiration days
function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

// Function to get the value of a cookie by its name
function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0) value = val.substring(name.length);
    });
    return value;
}

// Function to show the cookie message if the cookie is not set
function cookieMessage() {
    if (!getCookie("cookie")) {
        document.querySelector("#cookies").style.display = "block";
    }  
}

// Event listener to hide the cookie message when the user clicks the "OK" button
document.querySelector("#cookies-btn").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
    setCookie("cookie", true, 28);
});

// Invoke the cookieMessage function when the window loads
window.addEventListener("load", cookieMessage);

// jQuery code for changing the main image
$(document).ready(function() {
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
