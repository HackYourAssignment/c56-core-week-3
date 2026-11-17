function isBookApplicable(searchString) {
  const bookName = "The fundamentals of JavaScript".toLowerCase();
  const result = bookName.includes(searchString.trim().toLowerCase());
  return result;
}

console.log(isBookApplicable("javascript"));
console.log(isBookApplicable("javascript "));
console.log(isBookApplicable("python"));
console.log(isBookApplicable("JavaScript"));
console.log(isBookApplicable("JAVASCRIPT"));
