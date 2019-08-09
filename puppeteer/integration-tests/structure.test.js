import helper from '../lib/helper';

test('import should work', () => {
  expect(helper.sayHello('Ivan')).toEqual('Hello, Ivan!');
});
