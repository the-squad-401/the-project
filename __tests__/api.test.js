'use strict';
const { server } = require('../src/server');
const supergoose = require('./supergoose');
const mockRequest = supergoose(server);

describe('API', () => {
  it('returns 404 for invalid route', () => {
    return mockRequest
      .get('/invalidRoute')
      .expect(404);
  });
});