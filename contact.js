// Function to validate the contact form and show confirmation message
document.querySelector(".contact-form form").addEventListener("submit", function(event) {
    // Retrieving form input elements
    var nameInput = document.querySelector("input[name='name']");
    var emailInput = document.querySelector("input[name='email']");
    var phoneInput = document.querySelector("input[name='phone']");
    var messageInput = document.querySelector("textarea[name='message']");
    
    // Validate name input
    var lettersOnly = /^[A-Za-z]+$/;
    if (!lettersOnly.test(nameInput.value)) {
        alert("Please enter only letters in the name field.");
        event.preventDefault(); // Prevent form submission
        return;
    }
    
    // Validate email input
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert("Please enter a valid email address."); 
        event.preventDefault(); // Prevent form submission
        return;
    }
    
    // Validate phone input
    var phonePattern = /^\d{1,12}$/;
    if (!phonePattern.test(phoneInput.value)) {
        alert("Please enter a valid phone number with maximum 12 digits.");
        event.preventDefault(); // Prevent form submission
        return;
    }
    
    // Validate message input
    if (messageInput.value.trim() === "") {
        alert("Please enter a message.");
        event.preventDefault(); // Prevent form submission
        return;
    }
    
    // Show confirmation message
    alert("Message has been sent. We will contact you ASAP.");
});

// Get the map element
const map = document.querySelector('.map');

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Reveal the map when it's already visible on first load, and continue with the scroll fade-in effect.
function handleScroll() {
  if (!map) return;

  if (isInViewport(map)) {
    map.classList.add('fade-in');
    window.removeEventListener('scroll', handleScroll);
  }
}

handleScroll();
window.addEventListener('scroll', handleScroll);
