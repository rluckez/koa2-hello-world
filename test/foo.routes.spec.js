import app from '../app'
import supertest from 'supertest'
import {expect} from 'Chai';

import Foo from '../app/foo/foo.model'

const request = supertest.agent(app.listen())

describe('Foo route', () => {

  describe('get', () => {
    before(async () => {
      await Foo.remove();
      let foo;
      foo = new Foo({
        name: 'foo1',
        email: 'foo1@gmail.com'
      });
      await foo.save();

      foo = new Foo({
        name: 'foo2',
        email: 'foo2@gmail.com'
      });
      await foo.save()
    });

    it('should get all foo"', async () => {
      await request
        .get('/api/v1/foo')
        .expect(200)
        .expect(res => {
          expect(res.body.length).to.be.eql(2)
        })
    })
  });

  describe('create', () => {
    let foo
    before(async () => {
      await Foo.remove();
    });

    it('should get all foo"', async () => {
      foo = new Foo({
        name: 'createdFoo',
        email: 'createdFoo@foo.com'
      });
      await request
        .post('/api/v1/foo')
        .send(foo)
        .expect(200)
        .expect(res => {
          expect(res.body._id).to.be.ok;
          expect(res.body.createdAt).to.be.ok;
          expect(res.body.updatedAt).to.be.ok;
          expect(res.body.name).to.be.eql(foo.name);
          expect(res.body.email).to.be.eql(foo.email)
        })
    });

    after(async () => {
      await request
        .get('/api/v1/foo')
        .expect(200)
        .expect(res => {
          expect(res.body.length).to.be.eql(1)
          let savedFoo = res.body[0];
          expect(savedFoo.name).to.be.eql(foo.name);
          expect(savedFoo.email).to.be.eql(foo.email);
          expect(savedFoo.createdAt).to.be.ok;
          expect(savedFoo.updatedAt).to.be.ok;
        })
    })
  })
});

