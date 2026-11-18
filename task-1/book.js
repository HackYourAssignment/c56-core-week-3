function isBookApplicable(searchString) {
  const bookTitle = "The fundamentals of JavaScript";
  const isApplicable = bookTitle.toLowerCase().includes(searchString.toLowerCase().trim())

  return isApplicable
}


console.log(isBookApplicable("javascript"));


console.log(isBookApplicable("javascript "));


console.log(isBookApplicable("python"));


console.log(isBookApplicable("JavaScript"));


console.log(isBookApplicable("JAVASCRIPT"));
