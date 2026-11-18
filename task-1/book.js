function isBookApplicable(searchString) {
  const title = "The fundamentals of JavaScript";
    const normalizedSearch = searchString.trim().toLowerCase();
    return title.toLowerCase().includes(normalizedSearch);
}

console.log(isBookApplicable("javascript")); // true
console.log(isBookApplicable("javascript ")); // true
console.log(isBookApplicable("python")); // false
console.log(isBookApplicable("JAVASCRIPT")); // true
