// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, unique: true, lowercase: true },
    password: { type: String },
    phone: { type: String, unique: true },
    address: { type: String },
    birthDate: { type: Date },
    role: { type: String, default: 'borrower', enum: ['admin', 'borrower'] },
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
