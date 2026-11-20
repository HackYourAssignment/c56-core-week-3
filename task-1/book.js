function isBookApplicable(searchString) {
    const bookTitle = "The fundamentals of JavaScript";
    if (!searchString.trim()) return false;
    return bookTitle.toLowerCase().includes(searchString.trim().toLowerCase());
}

console.log(isBookApplicable("JavaScript")); 
console.log(isBookApplicable("JavaScript "));
console.log(isBookApplicable("fundamentals"));
console.log(isBookApplicable("Python"));