function isBookApplicable(searchString) {
  let bookTitle = "The fundamentals of JavaScript".toLowerCase();
   searchString = searchString.trim().toLowerCase();

  if (bookTitle.includes(searchString)) {
    return true;
  } else {
    return false;
  }
}

