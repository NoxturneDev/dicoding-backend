/* eslint-disable import/no-unresolved */
const { getAllBooks, getBookById } = require('./handler/getBookHandler');
const { addNewBook } = require('./handler/addBookHandler');
const { editBookById } = require('./handler/editBookHandler');
const { deleteBookById } = require('./handler/deleteBookHandler');

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addNewBook,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookById,
  },
];

module.exports = routes;
