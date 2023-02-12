/* eslint-disable import/no-unresolved */
const { nanoid } = require('nanoid');
const { bookDataValidation } = require('./lib/addBookValidation');
// const sendResponse = require('./lib/sendResponse');
const Response = require('./lib/ResponseClass');
const FailedResponse = require('./lib/FailedResponse');
const books = require('./data');

function getAllBooksHandler(req, h) {
  const response = new Response(h);
  const datas = books.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  return response.success('Berhasil mendapatkan buku', { books: datas }, 200);
}

function addNewBookHandler(req, h) {
  const id = nanoid(16);
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = req.payload;

  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id, name, year, author, summary, publisher, pageCount, readPage, reading, insertedAt, updatedAt,
  };

  const validation = bookDataValidation(newBook);

  if (validation.isInvalidPageCount) {
    const response = new FailedResponse(h);

    return response.invalidData('Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount');
  }

  if (validation.isNoName) {
    const response = new FailedResponse(h);

    return response.invalidData('Gagal menambahkan buku. Mohon isi nama buku');
  }

  newBook.finished = validation.isFinish;
  books.push(newBook);

  const response = new Response(h);
  return response.sendResponse('success', 'Buku berhasil ditambahkan', { bookId: newBook.id }, 201);
}

function getBookByIdHandler(req, h) {
  const { id } = req.params;

  const matchingBook = books.find((book) => book.id === id);

  if (!matchingBook) {
    const response = new FailedResponse(h);

    return response.notFound('Buku tidak ditemukan');
  }

  const response = new Response(h);
  return response.success('Buku ditemukan', { book: matchingBook }, 200);
}

function editBookByIdHandler(req, h) {
  const {
    id, name, year, author, summary, publisher, pageCount, readPage, reading,
  } = req.payload;

  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex < 0) {
    const response = h.response({
      status: 'not found',
      message: 'book not found',
    });

    response.code(404);
    return response;
  }

  const editedBook = {
    id, name, year, author, summary, publisher, pageCount, readPage, reading,
  };
  books[bookIndex] = [...books[bookIndex], ...editedBook];

  const response = h.response({
    status: 'success',
    message: 'book found!',
    data: {
      book: editedBook,
    },
  });

  response.code(200);
  return response;
}

function deleteBookByIdHandler(req, h) {
  const { id } = req.params;

  const bookToDelete = books.findIndex((book) => book.id === id);
  if (bookToDelete) {
    const response = h.response({
      status: 'not found',
      message: 'book not found',
    });

    response.code(404);
    return response;
  }

  books.splice(bookToDelete, 1);

  const response = h.response({
    status: 'success',
    message: 'book found!',
    data: {
      deletedBook: bookToDelete,
    },
  });

  response.code(200);
  return response;
}

module.exports = {
  getAllBooksHandler,
  addNewBookHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
};
