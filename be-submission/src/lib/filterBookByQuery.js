const FilterBook = require('./FilterBook');

function filterBookByReadingStatus(readingStatus) {
  const filterByReading = new FilterBook('reading');

  const booksOnRead = readingStatus === true
    ? filterByReading.getBookByReadingStatus(true) : filterByReading.getBookByReadingStatus(false);

  return booksOnRead;
}

function filterBookByFinishedStatus(finishStatus) {
  const filterByFinish = new FilterBook();

  const booksFinished = finishStatus === true
    ? filterByFinish.getBookByFinishedStatus(true) : filterByFinish.getBookByFinishedStatus(false);

  return booksFinished;
}

function filterBookByName(name) {
  const filterBook = new FilterBook();

  const filteredBook = filterBook.getBookByName(name);
  console.log(filteredBook);
  return filteredBook;
}

module.exports = { filterBookByReadingStatus, filterBookByFinishedStatus, filterBookByName };
