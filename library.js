// In-memory data store
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

function formatBook(book) {
  return `#${book.id}: "${book.title}" by ${book.author}`;
}

function formatBookList(list) {
  if (list.length === 0) return 'No books found.';
  return list.map(formatBook).join('\n');
}

function parseArgs(argv) {
  const [command, ...rest] = argv;
  return { command, args: rest };
}

function runCli(argv) {
  const { command, args } = parseArgs(argv);

  if (command === 'add') {
    const [title, author] = args;
    const book = addBook(title, author);
    console.log(`Added: ${formatBook(book)}`);
  } else if (command === 'remove') {
    const [id] = args;
    const removed = removeBook(Number(id));
    console.log(removed ? `Removed book #${id}` : `Book #${id} not found`);
  } else if (command === 'list') {
    console.log(formatBookList(books));
  } else {
    console.log('Usage: library.js <add|remove|list> [args]');
  }
}

module.exports = { addBook, findBookById, removeBook, formatBook, formatBookList, runCli };
