/* eslint-disable no-use-before-define */
function bookDataValidation(newBook) {
  const book = newBook;
  const isInvalidPageCount = checkInvalidPageCount(book.pageCount, book.readPage);
  const isNoName = checkInvalidName(book.name);

  return {
    isNoName, isInvalidPageCount,
  };
}

function isFinishedReading(pageCount, readingPage) {
  const isFinish = pageCount === readingPage || false;

  return isFinish;
}

function checkInvalidPageCount(pageCount, readingPage) {
  const isMore = readingPage > pageCount || false;

  return isMore;
}

function checkInvalidName(name) {
  if (name === '' || !name) return true;

  return false;
}

module.exports = { bookDataValidation, isFinishedReading };
