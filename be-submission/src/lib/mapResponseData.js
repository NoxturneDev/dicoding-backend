function mapBookByIdAuthorPublisher(datas) {
  return datas.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));
}

module.exports = { mapBookByIdAuthorPublisher };
