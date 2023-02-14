const { nanoid } = require('nanoid');

class Book {
  constructor(bookData) {
    this.books = bookData;
  }

  static generateId() {
    const id = nanoid(16);

    return id;
  }

  static generateDate() {
    const insertedAt = new Date().toISOString();

    return { insertedAt, updatedAt: insertedAt };
  }

  getBooksData() {
    return this.books;
  }

  addNewProperty(property) {
    this.books = {
      ...this.books,
      ...property,
    };

    return this.books;
  }

  createNewBook() {
    const id = Book.generateId();
    const { insertedAt, updatedAt } = Book.generateDate();

    this.addNewProperty({ id, insertedAt, updatedAt });

    return this.books;
  }
}

module.exports = Book;
