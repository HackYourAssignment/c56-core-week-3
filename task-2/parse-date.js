function parseDateString(dateString) {
    const space=dateString.split(' ');
    const  format=space[0];
    const date=space[1].split('-');

    let year, month, day;
    if (format === 'MDY') {
        month = parseInt(date[0]);
        day = parseInt(date[1]);
        year = parseInt(date[2]);
    }else if (format === 'DMY') {
        day = parseInt(date[0]);
        month = parseInt(date[1]);
        year = parseInt(date[2]);
    }
    return {day:day, month:month, year:year};
}
console.log(parseDateString('MDY 10-21-1983'));
console.log(parseDateString('DMY 21-10-1983'));
console.log(parseDateString('MDY 03-15-2024'));
console.log(parseDateString('DMY 15-03-2024'));
