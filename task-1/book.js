function isBookApplicable(searchString) {
    if (!searchString) {
        return false;
    }
    const title = 'The fundamentals of JavaScript'.toLowerCase();
    const searchValue = searchString.trim().toLowerCase()

    return title.includes(searchValue)
}
