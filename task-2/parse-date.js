// Your code here
const parseDateString = (dateString) => {
    // "MDY 10-21-1983" | "DMY 21-10-1983"
    const [format, datePart] = dateString.split(' ');

    if (format === 'MDY') {
        const [month, day, year] = datePart.split('-').map(Number);
        return ({ day, month, year })
    } else if (format === 'DMY') {
        const [day, month, year] = datePart.split('-').map(Number);
        return ({ day, month, year });
    } else {
        return undefined;
    }
}

