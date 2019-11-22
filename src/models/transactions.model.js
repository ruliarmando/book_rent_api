// transactions-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const { Types: { ObjectId } } = Schema;
  const transactions = new Schema({
    book: { type: ObjectId, ref: 'books', required: true },
    user: { type: ObjectId, ref: 'users', required: true },
    dueDate: { type: Date },
    returnDate: { type: Date },
    price: { type: Number },
    done: { type: Boolean, default: false },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('transactions');
  } catch (e) {
    return mongooseClient.model('transactions', transactions);
  }
};
