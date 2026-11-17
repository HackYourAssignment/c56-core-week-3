function isBookApplicable(searchString) {
    if (!searchString) {
        return false;
    }
    const title = 'The fundamentals of JavaScript'.toLowerCase();
    const searchValue = searchString.trim().toLowerCase()

    return title.includes(searchValue)
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
