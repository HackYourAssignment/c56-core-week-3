function parseDateString(dateString) {
    let dateFormate = dateString.slice(0, 3);
    if (dateFormate === "MDY") {
        let monthStr = dateString.slice(4, 6);
        if(monthStr < 10 ){
            monthStr = dateString.slice(5,6);
        }
        let dayStr = dateString.slice(7, 9);
        if(dayStr < 10 ){
            dayStr = dateString.slice(8,9);
        }
        let yearStr = dateString.slice(10, 14);
        return `day: ${dayStr}, month: ${monthStr}, year: ${yearStr}`;
    } else if (dateFormate === "DMY") {
        let dayStr = dateString.slice(4, 6);
        if(dayStr < 10){
            dayStr = dateString.slice(5,6);
        }
        let monthStr = dateString.slice(7, 9);
        if(monthStr < 10){
            monthStr = dateString.slice(8,9);
        }
        let yearStr = dateString.slice(10, 14);
        return `day: ${dayStr}, month: ${monthStr}, year: ${yearStr}`;
    } else {
        return "Wrong date formate.";
    }
}
console.log(parseDateString("MDY 10-21-1983"));
// Output: { day: 21, month: 10, year: 1983 }

console.log(parseDateString("DMY 21-10-1983"));
// Output: { day: 21, month: 10, year: 1983 }

console.log(parseDateString("MDY 03-15-2024"));
// Output: { day: 15, month: 3, year: 2024 }

console.log(parseDateString("DMY 15-03-2024"));
// Output: { day: 15, month: 3, year: 2024 }