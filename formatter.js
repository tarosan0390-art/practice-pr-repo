function formatBook(book) {
  return `#${book.id}: "${book.title}" by ${book.author}`;
}

function formatBookList(list) {
  if (list.length === 0) return 'No books found.';
  return list.map(formatBook).join('\n');
}

module.exports = { formatBook, formatBookList };
