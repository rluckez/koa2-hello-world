import app from '../app'
import supertest from 'supertest';
import connectDatabase from '../database';

const request = supertest.agent(app.listen());

describe('Hello World', () => {

  before(async () => {
    try {
      const info = await connectDatabase();
      console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    } catch (e) {
      console.log('error')
    }

  });

  it('should say "Hello World"', (done) => {
    request
      .get('/api/v1')
      .expect(200)
      .expect('Welcome to the Test API v1.0.0', done)
  })
});

