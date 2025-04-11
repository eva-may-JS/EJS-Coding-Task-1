const dates = [new Date(), new Date("2025-12-25"), new Date("2026-01-01")]; // Array of dates to be used in the countdown

function calculateDateDiff(date1, date2) {
  // Calculates the difference between two dates and returns the result in days.
  const numDay = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
  return numDay;
}

function displayDateDiff(elementId, date1, date2) {
  // Takes the result of the previous function and displays it in the HTML element with id "my-element"
  // and "my-element2" respectively.
  var daysRemaining = calculateDateDiff(date1, date2);
  var htmlElement = document.getElementById(elementId);
  htmlElement.innerText = daysRemaining;
}

// Display the countdowns
displayDateDiff("my-element", dates[0], dates[1]); // Christmas countdown
displayDateDiff("my-element2", dates[0], dates[2]); // New Year countdown
