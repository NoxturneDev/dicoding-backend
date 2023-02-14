/* eslint-disable max-classes-per-file */
const books = require('../data');

class FilterBook {
  constructor() {
    this.books = books;
  }

  createFilter(filter, condition) {
    console.log(this.books.filter((book) => book[filter] === condition));
    return this.books.filter((book) => book[filter] === condition);
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
  filterByName(name) {
    // eslint-disable-next-line array-callback-return, consistent-return
    const containsName = books.filter((book) => {
      const bookName = book.name.toLowerCase();
      const isContainsName = bookName.split('').find((bn) => bn === name);

      if (isContainsName) return book;
    });

    return containsName;
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

  getBookByName(name) {
    return this.filterByName(name);
  }
}

module.exports = FilterBook;
