function parseDateString(dateString) {
    const [format, date] = dateString.split(" ");

    const [first, second, year] = date.split("-");

    let day;
    let month;

    if (format === "MDY") {
        month = Number(first);
        day = Number(second);
    } 
    else if (format === "DMY") {
        day = Number(first);
        month = Number(second);
    }
    return {
        day: day,
        month: month,
        year: Number(year)
    };
}