function isBookApplicable(searchString) {
  const trimmedString = searchString.trim().toLowerCase();
    if ('The fundamentals of JavaScript'.toLowerCase().includes(trimmedString)) {
      return true;
    }
    return false;
}