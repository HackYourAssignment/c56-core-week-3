function parseDateString(dateString) {
 const format = dateString.substring(0, 3);
 const first = dateString.substring(4, 6);
 const second = dateString.substring(7, 9);
 const year = dateString.substring(10, 14);
 
 
 if (format === "MDY") {
   return {
    day: Number(second),
    month: Number(first),
    year: Number(year),
   };
 }
 if (format === "DMY") {
    return {
    day: Number(first),
    month: Number(second),
    year: Number(year),
 };
}
}
console.log(
parseDateString("MDY 03-15-2025")
);

console.log(
parseDateString("DMY 15-03-2025")
);
