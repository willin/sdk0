const test = require('ava');
const sdk = require('../src');

test('sdk', async (t) => {
  const client = sdk({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

  const data = await client.get('/posts/1');
  const { id } = data.data;
  t.is(id, 1);
});
