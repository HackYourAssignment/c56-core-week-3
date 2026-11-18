function parseDateString(dateString) {

    const parts = dateString.split(" ")
    const dateValue = parts[1].split("-")


    Number(dateValue[0]);
    Number(dateValue[1]);
    Number(dateValue[2]);

    if (parts[0] === "MDY") {
        return {
            day: dateValue[1],
            month: dateValue[0],
            year: dateValue[2]
        }

    } else {
        return {
            day: dateValue[0],
            month: dateValue[1],
            year: dateValue[2]
        }
    }


}

console.log(parseDateString("MDY 10-21-1983"));


console.log(parseDateString("DMY 21-10-1983"));


console.log(parseDateString("MDY 03-15-2024"));


console.log(parseDateString("DMY 15-03-2024"));
