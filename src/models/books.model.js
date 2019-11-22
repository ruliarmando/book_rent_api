// books-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const { Types: { ObjectId } } = Schema;
  const books = new Schema({
    title: { type: String, required: true },
    genre: { type: ObjectId, ref: 'genre', required: true },
    author: { type: String, required: true },
    releaseYear: { type: String, required: true },
    publisher: { type: String, required: true },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('books');
  } catch (e) {
    return mongooseClient.model('books', books);
  }
};
