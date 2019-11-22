const assert = require('assert');
const app = require('../../src/app');

describe('\'genre\' service', () => {
  it('registered the service', () => {
    const service = app.service('genre');

    assert.ok(service, 'Registered the service');
  });
});
