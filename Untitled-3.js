function toggleContent() {
  var content = document.querySelector(".hidden-content");
  var button = document.querySelector(".show-more-btn");

  if (content.style.display === "none") {
    content.style.display = "block";
    button.textContent = "Show Less";
  } else {
    content.style.display = "none";
    button.textContent = "Show More";
  }
}

$(document).ready(function() {
  $('#changeButton').click(function() {
    
    var currentSrc = $('#mainImage').attr('src');
    
    
    var newSrc;
    if (currentSrc === 'cinema.jpg') {
      newSrc = 'cinema2.jpg';
    } else if (currentSrc === 'cinema2.jpg') {
      newSrc = 'cinema3.jpg';
    } else {
      newSrc = 'cinema.jpg';
    }
    
    
    $('#mainImage').attr('src', newSrc);

    
    var originalWidth = $('.cinema-image').first().width();
    var originalHeight = $('.cinema-image').first().height();
    $('#mainImage').css({'width': originalWidth + 'px', 'height': originalHeight + 'px'});
  });
});

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

document.getElementById("newsletterForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subscriber = {
    name: name,
    email: email
  };
  
  localStorage.setItem("subscriber", JSON.stringify(subscriber));
  
  alert("Thank you for subscribing!");
  
  document.getElementById("newsletterForm").reset();
});


var nameInput = document.getElementById("name");


nameInput.addEventListener("input", function(event) {
  var inputValue = event.target.value;
  
  
  var lettersOnly = /^[A-Za-z]+$/;
  
  
  if (!lettersOnly.test(inputValue)) {
    
    event.target.value = inputValue.replace(/[^A-Za-z]/g, '');
  }
});

setCookie = (cName, cValue, expDays) => {
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

getCookie = (cName) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;
  cArr.forEach(val => {
      if(val.indexOf(name) === 0) value = val.substring(name.length);
  })

  return value;
}

document.querySelector("#cookies-btn").addEventListener("click", () => {
  document.querySelector("#cookies").style.display = "none";
  setCookie("cookie", true, 28);
})


cookieMessage = () => {
  if(!getCookie("cookie"))
    document.querySelector("#cookies").style.display = "block";  
}  

window.addEventListener("load", cookieMessage);









  