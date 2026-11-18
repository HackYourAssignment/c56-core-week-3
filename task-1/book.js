const prompt = require("prompt-sync")();
const bookName = "the fundamentals of javascript";
let isApplicable;
function isBookApplicable(book) {
  book = book.toLowerCase().trim();

  if (bookName.includes(book)) {
    isApplicable = true;
  } else {
    isApplicable = false;
  }
  return isApplicable;
}

const searchBook = prompt("Search the Book you want to:");
console.log(isBookApplicable(searchBook));
let message = isBookApplicable(searchBook)
  ? "Hey! Here is your book. Enjoy reading!"
  : "Oops!Try search again!";
console.log(message);
