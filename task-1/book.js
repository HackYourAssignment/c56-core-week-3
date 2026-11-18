
function isBookApplicable(searchString) {
    const bookTitle = "The fundamentals of JavaScript";

    const search = searchString.trim().toLowerCase();

    return bookTitle.toLowerCase().includes(search);
}

// Test
console.log(isBookApplicable("javascript"));  // true
console.log(isBookApplicable("FUNDAMENTALS")); // true
console.log(isBookApplicable("  JavaScript  ")); // true
console.log(isBookApplicable("Python"));      // false
console.log(isBookApplicable("the"));         // true
