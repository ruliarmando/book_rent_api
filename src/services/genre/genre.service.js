// Initializes the `genre` service on path `/genre`
const { Genre } = require('./genre.class');
const createModel = require('../../models/genre.model');
const hooks = require('./genre.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/genre', new Genre(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('genre');

  service.hooks(hooks);
};
