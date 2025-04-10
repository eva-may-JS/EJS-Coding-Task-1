var today = new Date(); // Get the current date
var christmas = new Date("2025-12-25"); // Set the date for Christmas
var newYear = new Date("2026-01-01"); // Set the date for New Year

function calculateDateDiff(date1, date2) {
  // Calculates the difference between two dates and returns the result in days.
  var numDay = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
  return numDay;
}

function displayDateDiff(elementId, date1, date2) {
  // Takes the result of the previous function and displays it in the HTML element with id "my-element"
  // and "my-element2" respectively.
  var daysRemaining = calculateDateDiff(date1, date2);
  var htmlElement = document.getElementById(elementId);
  htmlElement.innerText = daysRemaining;
}

// Display the countdown for Christmas and New Year
displayDateDiff("my-element", today, christmas);
displayDateDiff("my-element2", today, newYear);
