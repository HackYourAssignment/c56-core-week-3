function parseDateString(dateString){
    let part = dateString.split(" ");
    let format = part[0];
    let dateParts = part[1].split("-");

    let day;
    let month;
    let year = Number(dateParts[2]);

    if (format === "MDY") {
        month = Number(dateParts[0]);
        day = Number(dateParts[1]);
    } else if (format === "DMY") {
        day = Number(dateParts[0]);
        month = Number(dateParts[1]);
    }
    else{
        console.log("Invalid format");
    }

    let result = {
        day: day,
        month: month,
        year: year
    };

    return result;
}

console.log(parseDateString("MDY 10-21-1983"));
console.log(parseDateString("DMY 21-10-1983"));
console.log(parseDateString("YMD 1983-10-21"));