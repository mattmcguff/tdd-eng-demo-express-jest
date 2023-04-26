const request = require('supertest');
const app = require('../app');

describe('users', () => {

  it('create user', async () => {
    const testUser = {
      id: 1,
      name: 'John',
      email: 'john@example.com'
    }

    return await request(app)
    .post('/users')
    .send(testUser)
    .then(response => {
      expect(response.body).toHaveProperty('id', testUser.id)
      expect(response.body).toHaveProperty('name', testUser.name)
      expect(response.body).toHaveProperty('email', testUser.email)
    })
    })
    ;
  it('read user', async () => {
    return await request(app)
    .get('/users')
    .then(response => {
      expect(response.body).toBeInstanceOf(Array);
    });

  });
  it('update user', async () => {

    const testUser = {
      id: 2,
      name: 'flynn',
      email: 'flynnrider@encom.com'
    }

    return await request(app)
    .put(`/users/${testUser.id}`)
    .send(testUser)
    .then(response => {
      expect(response.body).toEqual(
        expect.objectContaining({
          id: testUser.id,
          name: testUser.name,
          email: testUser.email
        })
      )
    })

  });
  it('delete user', async () => {
    const testUserId = 3;
    return await request(app)
    .del(`/users/${testUserId}`)
    .expect(204)
  });
})