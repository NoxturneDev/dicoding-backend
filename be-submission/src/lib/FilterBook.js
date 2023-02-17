/* eslint-disable max-classes-per-file */
const books = require('../data');

class FilterBook {
  constructor() {
    this.books = [...books];
  }

  createFilter(filter, condition) {
    const tmp = this.books.filter(((book) => book[filter] === condition));

    return tmp;
  }

  filterByReading(status) {
    this.filter = 'reading';
    return this.createFilter(this.filter, status);
  }

  filterByFinish(status) {
    this.filter = 'finished';
    return this.createFilter(this.filter, status);
  }

  // eslint-disable-next-line class-methods-use-this
  filterByName(searchedName) {
    const name = searchedName.toLowerCase();
    const temp = [];

    this.books.forEach((book) => {
      const bookName = book.name.toLowerCase();
      const bookNameSplitted = bookName.split(' ');
      const isContainsName = bookNameSplitted.find((string) => string === name);

      if (isContainsName) {
        temp.push(book);
      }
    });

    return temp;
  }

  getBookByReadingStatus(status) {
    if (status === false) {
      return this.filterByReading(false);
    }

    return this.filterByReading(true);
  }

  getBookByFinishedStatus(status) {
    if (status === false) {
      return this.filterByFinish(false);
    }

    return this.filterByFinish(true);
  }

  getBookByName(searchedName) {
    return this.filterByName(searchedName);
  }
}

module.exports = FilterBook;
