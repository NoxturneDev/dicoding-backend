/* eslint-disable no-use-before-define */
const books = require('../data');
const Book = require('../models/Book');
const { bookDataValidation, isFinishedReading } = require('./bookDataValidation');

function createNewBook(newBookData) {
  const book = new Book(newBookData);
  book.createNewBook();

  const isFinish = isFinishedReading(newBookData.pageCount, newBookData.readPage);
  book.addNewProperty({ finished: isFinish });

  const validateBookResult = validateNewBook(book.getBooksData());
  if (!validateBookResult.isValid) {
    return validateBookResult;
  }

  books.push(book.getBooksData());
  return book.getBooksData();
}

function validateNewBook(newBookData) {
  const validation = bookDataValidation(newBookData);
  if (validation.isInvalidPageCount) {
    return {
      isValid: false,
      invalidType: 'invalidPage',
    };
  }

  if (validation.isNoName) {
    return {
      isValid: false,
      invalidType: 'noName',
    };
  }

  return {
    isValid: true,
  };
}

module.exports = createNewBook;
