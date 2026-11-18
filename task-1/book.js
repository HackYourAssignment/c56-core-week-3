function isBookApplicable(searchString) {
  const title = "The fundamentals of JavaScript";
  return title.toLowerCase().includes(searchString.trim().toLowerCase());
  
}

console.log(isBookApplicable("javascript"));
// Output: true

console.log(isBookApplicable("javascript "));
// Output: true

console.log(isBookApplicable("python"));
// Output: false

console.log(isBookApplicable("JavaScript"));
// Output: true

console.log(isBookApplicable("JAVASCRIPT"));
// Output: true