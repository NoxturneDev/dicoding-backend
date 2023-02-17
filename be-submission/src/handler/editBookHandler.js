const FailedResponse = require('../lib/FailedResponse');
const Response = require('../lib/Response');
const books = require('../data');

const { bookDataValidation } = require('../lib/bookDataValidation');

function editBookById(req, h) {
  const { id } = req.params;
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = req.payload;

  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex < 0) {
    const response = new FailedResponse(h);

    return response.notFound('Gagal memperbarui buku. Id tidak ditemukan');
  }

  const editedBook = {
    id, name, year, author, summary, publisher, pageCount, readPage, reading,
  };

  const validation = bookDataValidation(editedBook);

  if (validation.isNoName) {
    const response = new FailedResponse(h);

    return response.invalidData('Gagal memperbarui buku. Mohon isi nama buku');
  }

  if (validation.isInvalidPageCount) {
    const response = new FailedResponse(h);

    return response.invalidData('Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount');
  }

  books[bookIndex] = { ...books[bookIndex], ...editedBook };

  const response = new Response(h);
  return response.success('Buku berhasil diperbarui', { data: editedBook }, 200);
}

module.exports = { editBookById };
