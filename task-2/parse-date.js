const prompt = require("prompt-sync")();

function isValidDate(date) {
  const isValidNumbers =
    date.length === 3 &&
    date[1] &&
    date.every((num) => Number.isInteger(num) && num > 0);

  return isValidNumbers ? true : false;
}

function parseDateString(dateString) {
  let day, month, year;

  let dateFormat = dateString.split(" ")[0].toLowerCase().trim();
  let date = dateString.split(" ")[1];
  const dateParts = date.split(/[\/\-\.]/).map(Number); //coz user might separate differently

  if (dateFormat === "mdy" && isValidDate(dateParts)) {
    if (dateParts[0] <= 12 && dateParts[1] <= 31) {
      [month, day, year] = dateParts;
    } else {
      return "Oops! please enter a correct date and format.";
    }
  } else if (dateFormat === "dmy" && isValidDate(dateParts)) {
    if (dateParts[0] <= 31 && dateParts[1] <= 12) {
      [day, month, year] = dateParts;
    } else {
      return "Oops! please enter a correct date and format.";
    }
  } else {
    return "Oops! please enter a correct date and format.";
  }
  let showDate = { day, month, year };
  return showDate;
}

const userDate = prompt("Enter a date in the following format: ");
console.log(parseDateString(userDate));
