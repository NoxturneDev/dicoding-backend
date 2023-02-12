/* eslint-disable import/no-unresolved */
const { getAllBooksHandler, addNewBookHandler } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addNewBookHandler,
  },
];

module.exports = routes;
