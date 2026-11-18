function parseDateString(dateString) {
  const format = dateString.substring(0, 3);
  const first = Number(dateString.substring(4, 6));
  const second = Number(dateString.substring(7, 9));
  const year = Number(dateString.substring(10));

  if (format === 'MDY') {
    return { day: second, month: first, year: year };
  }

  return { day: first, month: second, year: year };
}

console.log(parseDateString("MDY 10-21-1983")); 
console.log(parseDateString("DMY 21-10-1983")); 
console.log(parseDateString("MDY 03-15-2024")); 
console.log(parseDateString("DMY 15-03-2024")); 