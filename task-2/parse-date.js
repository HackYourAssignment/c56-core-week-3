
function parseDateString(dateString) {
    let parts = dateString.split(" ");
    let format = parts[0];

    if (format !== "MDY" && format !== "DMY") {
        return "Invalid format";
    }

    if (!parts[1]) {
        return "Invalid date";
    }

    let date = parts[1].split("-");

    if (date.length !== 3) {
        return "Invalid date";
    }

    let day;
    let month;
    let year = Number(date[2]);

    if (format === "MDY") {
        month = Number(date[0]);
        day = Number(date[1]);
    } else if (format === "DMY") {
        day = Number(date[0]);
        month = Number(date[1]);
    }

    if (
        !Number.isInteger(day) ||
        !Number.isInteger(month) ||
        !Number.isInteger(year) ||
        month < 1 || month > 12 ||
        day < 1 || day > 31
    ) {
        return "Invalid date";
    }

    return { day, month, year };
}

console.log(parseDateString("MDY 10-21-1983"));
console.log(parseDateString("DMY 21-10-1983"));
console.log(parseDateString("XYZ 10-21-1983"));
console.log(parseDateString("MDY 15-40-2024"));
