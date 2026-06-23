const library = require('./library');
const { formatBook, formatBookList } = require('./formatter');

function parseArgs(argv) {
  const [command, ...rest] = argv;
  return { command, args: rest };
}

function runCli(argv) {
  const { command, args } = parseArgs(argv);

  if (command === 'add') {
    const [title, author] = args;
    const book = library.addBook(title, author);
    console.log(`Added: ${formatBook(book)}`);
  } else if (command === 'remove') {
    const [id] = args;
    const removed = library.removeBook(Number(id));
    console.log(removed ? `Removed book #${id}` : `Book #${id} not found`);
  } else if (command === 'list') {
    console.log(formatBookList(library.listBooks()));
  } else {
    console.log('Usage: cli.js <add|remove|list> [args]');
  }
}

module.exports = { parseArgs, runCli };

if (require.main === module) {
  runCli(process.argv.slice(2));
}
