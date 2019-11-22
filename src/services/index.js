const users = require('./users/users.service.js');
const books = require('./books/books.service.js');
const transactions = require('./transactions/transactions.service.js');
const genre = require('./genre/genre.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(books);
  app.configure(transactions);
  app.configure(genre);
};
