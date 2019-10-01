import { sayHello } from '../lib/helper/unitTestHelper';

test('import should work', () => {
  expect(sayHello('Ivan')).toEqual('Hello, Ivan!');
});
