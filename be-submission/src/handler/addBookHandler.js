const FailedResponse = require('../lib/FailedResponse');
const Response = require('../lib/Response');
const createNewBook = require('../lib/createNewBook');

function addNewBook(req, h) {
  const newBook = createNewBook(req.payload);
  const { isValid } = newBook;

  if (!isValid) {
    const response = new FailedResponse(h);

    if (newBook.invalidType === 'invalidPage') {
      return response.invalidData('Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount');
    }

    if (newBook.invalidType === 'noName') {
      return response.invalidData('Gagal menambahkan buku. Mohon isi nama buku');
    }
  }

  const response = new Response(h);
  return response.sendResponse('success', 'Buku berhasil ditambahkan', { bookId: newBook.id }, 201);
}

module.exports = { addNewBook };
