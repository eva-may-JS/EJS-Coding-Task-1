const currentYear = new Date().getFullYear(); // Current year

function newDate(dateString) {
  // Takes a date string in the format YYYY-MM-DD and returns a Date object.
  // If the date is in the past, it will return the same date in the next year.
  const date = new Date(dateString); // Convert the input string to a Date object
  const now = new Date();

  // If the date has already passed this year, bump it to next year
  if (date < now) {
    return new Date(currentYear + 1, date.getMonth(), date.getDate());
  } else {
    return date;
  }
}

// Array of dates to be used in the countdown
const dates = [
  new Date(),
  newDate(`${currentYear}-12-25`),
  newDate(`${currentYear}-01-01`),
  newDate(`${currentYear}-02-14`),
  newDate(`${currentYear}-10-31`),
  newDate(`${currentYear}-03-17`),
  newDate(`${currentYear}-11-05`),
];

function calculateDateDiff(date1, date2) {
  // Calculates the difference between two dates and returns the result in days.
  const numDay = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
  return numDay;
}

function displayDateDiff(elementId, date1, date2) {
  // Takes the result of the previous function and displays it in the HTML elements with corresponding id's
  const daysRemaining = calculateDateDiff(date1, date2);
  const htmlElement = document.getElementById(elementId);
  htmlElement.innerText = daysRemaining;
}

// Display the countdowns
for (let i = 1; i < dates.length; i++) {
  displayDateDiff(`my-element${i}`, dates[0], dates[i]);
}

// --- Reorder cards based on soonest date ---


function findCardByTitle(title) {
  // Finds card by their title
  const allCards = document.querySelectorAll('.card');
  for (let card of allCards) {
    const cardTitle = card.querySelector('.card-title');
    if (cardTitle && cardTitle.textContent.includes(title)) {
      return card.closest('.col-12');
    }
  }
  return null;
}

// Define events
const events = [
  {
    title: "Christmas",
    date: newDate(`${currentYear}-12-25`),
    card: null
  },
  {
    title: "New Year",
    date: newDate(`${currentYear}-01-01`),
    card: null
  },
  {
    title: "Valentine's",
    date: newDate(`${currentYear}-02-14`),
    card: null
  },
  {
    title: "Halloween",
    date: newDate(`${currentYear}-10-31`),
    card: null
  },
  {
    title: "St. Patrick's",
    date: newDate(`${currentYear}-03-17`),
    card: null
  },
  {
    title: "Bonfire Night",
    date: newDate(`${currentYear}-11-05`),
    card: null
  },
];

// Attach card elements to events
events.forEach(event => {
  event.card = findCardByTitle(event.title);
});

// Sort events by soonest date
events.sort((a, b) => a.date - b.date);

// Build fragment and re-append cards
const row = document.querySelector('.row');
const fragment = document.createDocumentFragment();
events.forEach(event => {
  if (event.card) {
    fragment.appendChild(event.card);
  }
});
row.appendChild(fragment);
