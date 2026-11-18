function parseDateString(dateString) {
    const [format, dateValue] = dateString.split(' ');
    const parts = dateValue.split('-').map(Number);
    
    let day, month, year;
    
    if (format === 'MDY') {
        month = parts[0];
        day = parts[1];
        year = parts[2];
    } else if (format === 'DMY') {
        day = parts[0];
        month = parts[1];
        year = parts[2];
    }
    
    return { day, month, year };
} 
