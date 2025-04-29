const currentYear = new Date().getFullYear();

// Helper: Return a Date object for a given YYYY-MM-DD string.
// If that date has already passed this year, return the same date next year.
function getFutureDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  // Adjust to next year if the date is in the past
  if (date < now) {
    return new Date(currentYear + 1, date.getMonth(), date.getDate());
  }
  return date;
}

// Calculate the number of full days between two dates
function getDaysBetween(fromDate, toDate) {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((toDate - fromDate) / msPerDay);
}

// Display countdown in element with specified ID
function displayCountdown(elementId, fromDate, toDate) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = getDaysBetween(fromDate, toDate);
  }
}

// Find a card element by its title
function findCardByTitle(title) {
  const cards = document.querySelectorAll('.card');
  for (let card of cards) {
    const titleElement = card.querySelector('.card-title');
    if (titleElement && titleElement.textContent.includes(title)) {
      return card.closest('.col-12');
    }
  }
  return null;
}

// Define all holiday events
const events = [
  { title: "Christmas", date: getFutureDate(`${currentYear}-12-25`) },
  { title: "New Year", date: getFutureDate(`${currentYear}-01-01`) },
  { title: "Valentine's", date: getFutureDate(`${currentYear}-02-14`) },
  { title: "Halloween", date: getFutureDate(`${currentYear}-10-31`) },
  { title: "St. Patrick's", date: getFutureDate(`${currentYear}-03-17`) },
  { title: "Bonfire Night", date: getFutureDate(`${currentYear}-11-05`) },
];

// Display all countdowns
const today = new Date();
events.forEach((event, index) => {
  displayCountdown(`my-element${index + 1}`, today, event.date);
});

// Attach matching card elements and sort events by soonest date
events.forEach(event => {
  event.card = findCardByTitle(event.title);
});
events.sort((a, b) => a.date - b.date);

// Reorder the card elements visually based on sorted events
const row = document.querySelector('.row');
const fragment = document.createDocumentFragment();
events.forEach(event => {
  if (event.card) {
    fragment.appendChild(event.card);
  }
});
row.appendChild(fragment);
