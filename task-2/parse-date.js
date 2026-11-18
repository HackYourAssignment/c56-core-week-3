// Your code here
function parseDateString(dateString) {
  const parts = dateString.split(" ");
  const format = parts[0];
  const numbers = parts[1].split("-");

  const first = Number(numbers[0]);
  const second = Number(numbers[1]);
  const year = Number(numbers[2]);

  if (format === "MDY") {
    return { day: second, month: first, year: year };
  }

  return { day: first, month: second, year: year };
}

console.log(parseDateString("MDY 10-21-1983"));
// { day: 21, month: 10, year: 1983 }

console.log(parseDateString("DMY 21-10-1983"));
// { day: 21, month: 10, year: 1983 }

console.log(parseDateString("MDY 03-15-2024"));
// { day: 15, month: 3, year: 2024 }

console.log(parseDateString("DMY 15-03-2024"));
// { day: 15, month: 3, year: 2024 }
