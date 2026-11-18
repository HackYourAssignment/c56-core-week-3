function parseDateString(dateString) {
    const [value1, value2, year] = dateString.slice(4).split('-');
    if (dateString[0] === 'D') {
        return {
            day: parseInt(value1),
            month: parseInt(value2),
            year: parseInt(year)
        };
    }
    return {
        day: parseInt(value2),
        month: parseInt(value1),
        year: parseInt(year)
    }
}