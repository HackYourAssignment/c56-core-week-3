function isBookApplicable(searchString) {
 const title = "The fundamentals of JavaScript";
 const cleanSearch = searchString.trim().toLowerCase();
 return title.toLowerCase().includes(cleanSearch);
}

console.log(isBookApplicable("javascript"));
console.log(isBookApplicable("python"));
console.log(isBookApplicable("JavaScript"));
console.log(isBookApplicable("JAVASCRIPT"));
console.log(isBookApplicable("  javascript  "));
