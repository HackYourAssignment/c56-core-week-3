function parseDateString(dateString) {
  let date;
  if (dateString.includes("DMY")) {
    const [dayValue, monthValue, yearValue] = dateString.slice(4).split("-");
    date = {
      day: Number(dayValue),
      month: Number(monthValue),
      year: Number(yearValue),
    };
  } else if (dateString.includes("MDY")) {
    const [monthValue, dayValue, yearValue] = dateString.slice(4).split("-");

    date = {
      day: Number(dayValue),
      month: Number(monthValue),
      year: Number(yearValue),
    };
  } else {
    throw new Error("Invalid date format");
  }
  return date;
}

console.log(parseDateString("MDY 10-21-1983"));
console.log(parseDateString("DMY 21-10-1983"));
console.log(parseDateString("MDY 03-15-2024"));
console.log(parseDateString("DMY 15-03-2024"));
