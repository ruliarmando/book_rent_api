module.exports = function searchRegex() {
  return function (context) {
    const query = context.params.query;
    for (const field in query) {
      if (query[field].$search && field.indexOf('$') === -1) {
        query[field] = { $regex: new RegExp(query[field].$search, 'i') };
      }
    }
    context.params.query = query;
    return context;
  };
};
