// Your code here
function parseDateString(dateString) {
let dateParts = dateString.split(" ");
let format = dateParts[0];
let date = dateParts[1];
let numbers = date.split("-");
let day;
let month;
let year;

if (format === "DMY") {
    day = Number(numbers[0]);
    month = Number(numbers[1]);
    year = Number(numbers[2]);
} else if (format === "MDY") {
    month = Number(numbers[0]);
    day = Number(numbers[1]);
    year = Number(numbers[2]);
}
return { day: day, month: month, year: year };
}
console.log(parseDateString("DMY 21-10-1983"));
console.log(parseDateString("MDY 10-21-1983"));