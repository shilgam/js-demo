import { sayHello } from '../lib/helper';

test('import should work', () => {
  expect(sayHello('Ivan')).toEqual('Hello, Ivan!');
});
