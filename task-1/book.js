function isBookApplicable(searchString) {
  const bookTitle = 'The fundamentals of JavaScript';

  const cleanSearch = searchString.trim().toLowerCase();
  const cleanTitle = bookTitle.toLowerCase();

  return cleanTitle.includes(cleanSearch);
}

console.log(isBookApplicable("javascript")); 
console.log(isBookApplicable("javascript "));
console.log(isBookApplicable("python"));       
console.log(isBookApplicable("JavaScript"));   
console.log(isBookApplicable("JAVASCRIPT")); 
