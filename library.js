const store = require('./store');

function addBook(title, author) {
  return store.addBook(title, author);
}

function findBookById(id) {
  return store.findBookById(id);
}

function removeBook(id) {
  return store.removeBook(id);
}

function listBooks() {
  return store.listBooks();
}

module.exports = { addBook, findBookById, removeBook, listBooks };
