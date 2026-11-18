const BOOK_TITLE = "The fundamentals of JavaScript";

function isBookApplicable(searchString) {
  const normalizedSearch = searchString.trim().toLowerCase();
  return BOOK_TITLE.toLowerCase().includes(normalizedSearch);
}

console.log(isBookApplicable("javascript")); // true
console.log(isBookApplicable("javascript ")); // true
console.log(isBookApplicable("python")); // false
console.log(isBookApplicable("JavaScript")); // true
console.log(isBookApplicable("JAVASCRIPT")); // true
