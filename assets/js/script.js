const currentYear = new Date().getFullYear(); // Current year

function newDate(dateString) {
  // Convert the input string to a Date object
  const date = new Date(dateString);
  const now = new Date();

  // If the date has already passed this year, bump it to next year
  if (date < now) {
    return new Date(currentYear + 1, date.getMonth(), date.getDate());
  } else {
    return date;
  }
}

const dates = [
  new Date(),
  newDate(`${currentYear}-12-25`),
  newDate(`${currentYear}-01-01`),
  newDate(`${currentYear}-02-14`),
]; // Array of dates to be used in the countdown

function calculateDateDiff(date1, date2) {
  // Calculates the difference between two dates and returns the result in days.
  const numDay = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
  return numDay;
}

function displayDateDiff(elementId, date1, date2) {
  // Takes the result of the previous function and displays it in the HTML elements with corresponding id's
  var daysRemaining = calculateDateDiff(date1, date2);
  var htmlElement = document.getElementById(elementId);
//  if (daysRemaining < 0) {
//    daysRemaining = daysRemaining + 365; // If the difference is negative, add 365 days to it
//  }
  htmlElement.innerText = daysRemaining;
}

// Display the countdowns
for (let i = 1; i < dates.length; i++) {
  displayDateDiff(`my-element${i}`, dates[0], dates[i]);
}


// if (numDay < 0) {
//   // //currentYear = currentYear + 1; // If the difference is negative, set the year to the next year
//   // dates[i] = new Date(`${currentYear + 1}-${dates[i].getMonth()}-${dates[i].getDate()}`);
//   // console.log(dates[i]);
//   // // Update the date to the next year
//   // };