const books = [];

function addBook(title, author) {
  const book = { id: books.length + 1, title, author };
  books.push(book);
  return book;
}

function findBookById(id) {
  return books.find((b) => b.id === id);
}

function removeBook(id) {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
}

function listBooks() {
  return books;
}

module.exports = { addBook, findBookById, removeBook, listBooks };
