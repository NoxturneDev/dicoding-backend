/* eslint-disable eqeqeq */
const Response = require('../lib/Response');
const FailedResponse = require('../lib/FailedResponse');
const { filterBookByReadingStatus, filterBookByFinishedStatus, filterBookByName } = require('../lib/filterBookByQuery');
const { mapBookByIdAuthorPublisher } = require('../lib/mapResponseData');
const books = require('../data');

// get All books
function getAllBooks(req, h) {
  const response = new Response(h);
  const { reading, finished, name } = req.query;

  if (reading) {
    const readingStatus = reading == 1; // 1 : true, 0 :false
    const booksOnRead = filterBookByReadingStatus(readingStatus);

    const responseData = mapBookByIdAuthorPublisher(booksOnRead);

    return response.success('Berhasil mendapatkan buku', { books: responseData }, 200);
  }

  if (finished) {
    const finishedStatus = finished == 1; // 1 : true, 0: false
    const finishedBook = filterBookByFinishedStatus(finishedStatus);

    const responseData = mapBookByIdAuthorPublisher(finishedBook);

    return response.success('Berhasil mendapatkan buku', { books: responseData }, 200);
  }

  if (name) {
    const getBookByName = filterBookByName(name);

    const responseData = mapBookByIdAuthorPublisher(getBookByName);
    return response.success('Berhasil mendapatkan buku', { books: responseData }, 200);
  }

  const responseData = mapBookByIdAuthorPublisher(books);
  return response.success('Berhasil mendapatkan buku', { books: responseData }, 200);
}

// get book by id
function getBookById(req, h) {
  const { id } = req.params;

  const matchingBook = books.find((book) => book.id === id);

  if (!matchingBook) {
    const response = new FailedResponse(h);

    return response.notFound('Buku tidak ditemukan');
  }

  const response = new Response(h);
  return response.success('Buku ditemukan', { book: matchingBook }, 200);
}

module.exports = { getAllBooks, getBookById };
