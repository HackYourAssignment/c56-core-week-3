function isBookApplicable(searchString) {
    const bookTitle = "The fundamentals of JavaScript";
    
    
    if (typeof searchString !== 'string') {
        return false;
    }
    
    
    const normalizedTitle = bookTitle.toLowerCase();
    const normalizedSearch = searchString.trim().toLowerCase();
    
  
    if (normalizedSearch === '') {
       return false;
}
    
return normalizedTitle.includes(normalizedSearch);
} 


