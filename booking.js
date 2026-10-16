$(document).ready(function() {
  console.log("Document ready");

  var basket = []; // Array to store selected tickets
  var totalAdult = 0;
  var totalChild = 0;
  var totalOAP = 0;
  var totalStudent = 0;
  var totalFamilyPass = 0;

  // Initialize datepicker
  $("#datepicker").datepicker({
    dateFormat: 'yy-mm-dd',
    showOn: "both",
    buttonText: "Choose Date",
    onSelect: function(dateText, inst) {
      $("#timeSelection").show(); // Show time selection after date selection
    }
  });

  // Show booking form when choosing seats button is clicked
  $("#chooseSeatsBtn").click(function() {
    console.log("Choose seats button clicked");
    $("#movieSelection").hide();
    $("#timeSelection").hide(); // Hide time selection
    $("#bookingForm").css("display", "block");
  });

  // Change button text to "Get Tickets" when the choose time button is clicked
  $("#chooseTimeBtn").click(function() {
    console.log("Choose time button clicked");
    $("#timeSelection").hide(); // Hide time selection
    $("#bookingForm").css("display", "block");
    $(this).text("Get Tickets"); // Change button text
  });

  // Function to calculate total price
  function calculateTotal() {
    console.log("Calculating total");
    var adults = parseInt($("#adults").val());
    var children = parseInt($("#children").val());
    var oaps = parseInt($("#oaps").val());
    var students = parseInt($("#students").val());
    var familyPass = parseInt($("#familyPass").val());

    var adultPrice = 10;
    var childPrice = 5;
    var oapPrice = 7;
    var studentPrice = 8;
    var familyPassPrice = 30;

    totalAdult = adults * adultPrice;
    totalChild = children * childPrice;
    totalOAP = oaps * oapPrice;
    totalStudent = students * studentPrice;
    totalFamilyPass = familyPass * familyPassPrice;

    var total = totalAdult + totalChild + totalOAP + totalStudent + totalFamilyPass;

    $("#total").html("Total Price: £" + total.toFixed(2));
    
    // Update individual prices in the basket only if tickets are added
    if (basket.length > 0) {
      updateBasket();
    }
  }

  // Calculate total when the calculate button is clicked
  $("#bookingForm button").click(calculateTotal);

  // Add selected tickets to the basket when the "Get Tickets" button is clicked
  $("#chooseTimeBtn").click(function() {
    var adults = parseInt($("#adults").val());
    var children = parseInt($("#children").val());
    var oaps = parseInt($("#oaps").val());
    var students = parseInt($("#students").val());
    var familyPass = parseInt($("#familyPass").val());
    
    // Clear previous contents of the basket
    basket = [];

    // Add selected tickets to the basket with prices
    basket.push(
      { type: "Adult", quantity: adults, price: totalAdult },
      { type: "Child", quantity: children, price: totalChild },
      { type: "OAP", quantity: oaps, price: totalOAP },
      { type: "Student", quantity: students, price: totalStudent },
      { type: "Family Pass", quantity: familyPass, price: totalFamilyPass }
    );

    // Update basket display
    updateBasket();
  });

// Function to update basket display
function updateBasket() {
  $("#basketList").empty(); // Clear previous contents
  
  // Iterate over basket and add items to the list if quantity is greater than zero
  basket.forEach(function(item) {
    if (item.quantity > 0) {
      $("#basketList").append("<li>" + item.quantity + " " + item.type + " - £" + item.price.toFixed(2) + "</li>");
    }
  });
  
  // Display totals for each ticket type only if quantity is greater than zero
  if (totalAdult > 0) {
    $("#basketList").append("<li class='total-item'>Total Adult: £" + totalAdult.toFixed(2) + "</li>");
  }
  if (totalChild > 0) {
    $("#basketList").append("<li class='total-item'>Total Child: £" + totalChild.toFixed(2) + "</li>");
  }
  if (totalOAP > 0) {
    $("#basketList").append("<li class='total-item'>Total OAP: £" + totalOAP.toFixed(2) + "</li>");
  }
  if (totalStudent > 0) {
    $("#basketList").append("<li class='total-item'>Total Student: £" + totalStudent.toFixed(2) + "</li>");
  }
  if (totalFamilyPass > 0) {
    $("#basketList").append("<li class='total-item'>Total Family Pass: £" + totalFamilyPass.toFixed(2) + "</li>");
  }
}


  // Confirm booking when the confirm booking button is clicked
  $("#confirmBookingBtn").click(function() {
    console.log("Confirm booking button clicked");

    // Calculate total price
    calculateTotal();

    // Show confirmation popup
    var confirmed = confirm("Your booking has been confirmed. Click OK to proceed This is were payment would then be taken.");
    if (confirmed) {
      window.location.href = "booking.html";
    }
  });
});
  
  
  
  
  




