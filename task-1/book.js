function isBookApplicable(searchString) {
const search=searchString.trim().toLowerCase();
return 'The fundamentals of JavaScript'.toLowerCase().includes(search);
}
console.log(isBookApplicable('javaScript')); 
console.log(isBookApplicable('Python'));
console.log(isBookApplicable('JAVASCRIPT'));
console.log(isBookApplicable('javaScript'));