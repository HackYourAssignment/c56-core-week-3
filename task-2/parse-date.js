function parseDateString(dateString) {
  const [format, date] = dateString.trim().split(" ");
  const [first, second, year] = date.split("-").map(Number);

  if (format === "MDY") {
    return { day: second, month: first, year };
  }
  return { day: first, month: second, year };
}

console.log(parseDateString("MDY 10-21-1983")); // { day: 21, month: 10, year: 1983 }
console.log(parseDateString("DMY 21-10-1983")); // { day: 21, month: 10, year: 1983 }
console.log(parseDateString("MDY 03-15-2024")); // { day: 15, month: 3, year: 2024 }
console.log(parseDateString("DMY 15-03-2024")); // { day: 15, month: 3, year: 2024 }
