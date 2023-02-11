const books = require('data');

function getAllBooks(request, h){
  const response = h.response({
    status: 'success',
    message: 'get all books',
    books: books
  })
}