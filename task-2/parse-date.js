function parseDateString(dateString) {

  const [format, date] = dateString.split(" ");
  const [first, second, year] = date.split("-");

  if (format === "MDY") {
    return {
      day: Number(second),
      month: Number(first),
      year: Number(year)
    };
  } 
  else if (format === "DMY") {
    return {
      day: Number(first),
      month: Number(second),
      year: Number(year)
    };
  }

  return null;
}
console.log(parseDateString("MDY 10-21-1983"));
// Output: { day: 21, month: 10, year: 1983 }

console.log(parseDateString("DMY 21-10-1983"));
// Output: { day: 21, month: 10, year: 1983 }

console.log(parseDateString("MDY 03-15-2024"));
// Output: { day: 15, month: 3, year: 2024 }

console.log(parseDateString("DMY 15-03-2024"));
// Output: { day: 15, month: 3, year: 2024 }