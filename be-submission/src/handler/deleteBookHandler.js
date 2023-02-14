const FailedResponse = require('../lib/FailedResponse');
const Response = require('../lib/Response');
const books = require('../data');

function deleteBookById(req, h) {
  const { id } = req.params;

  const bookToDelete = books.findIndex((book) => book.id === id);
  if (bookToDelete < 0) {
    const response = new FailedResponse(h);

    return response.notFound('Buku gagal dihapus. Id tidak ditemukan');
  }

  books.splice(bookToDelete, 1);

  const response = new Response(h);
  return response.success('Buku berhasil dihapus', { data: bookToDelete }, 200);
}

module.exports = {
  deleteBookById,
};
