function parseDateString(dateString) {
  const parts = dateString.split(" ");

  const format = parts[0];
  const date = parts[1];

  const dateParts = date.split("-");

  const first = Number(dateParts[0]);
  const second = Number(dateParts[1]);
  const third = Number(dateParts[2]);

  if (format === "MDY") {
    return {
      month: first,
      day: second,
      year: third
    };
  } else {
    return {
      day: first,
      month: second,
      year: third
    };
  }
}

// Test the function
console.log(parseDateString("MDY 10-21-1983"));
console.log(parseDateString("DMY 21-10-1983"));



