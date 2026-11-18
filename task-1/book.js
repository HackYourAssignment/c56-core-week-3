function isBookApplicable(searchString) {
  const title = "The fundamentals of JavaScript";

  const search = searchString.trim().toLowerCase();
  const book = title.toLowerCase();

  return book.includes(search);
}

// Test
console.log(isBookApplicable("JavaScript")); // true
console.log(isBookApplicable("javascript")); // true
console.log(isBookApplicable("Python")); // false
console.log(isBookApplicable("  JavaScript  ")); // true
console.log(isBookApplicable("HTML")); // false