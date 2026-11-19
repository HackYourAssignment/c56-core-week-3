function isBookApplicable(searchString) {
  // Your code here
  let bookTitle = "The fundamentals of JavaScript";
  let cleanedSearchString = searchString.trim().toLowerCase();
  return bookTitle.toLowerCase().includes(cleanedSearchString);
}
console.log(isBookApplicable("fundamentals")); // true
console.log(isBookApplicable("JavaScript")); // true
console.log(isBookApplicable("Python")); // false
console.log(isBookApplicable("  javascript  ")); // true