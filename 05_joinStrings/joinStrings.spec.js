const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Carlos', () => {
    expect(values.firstName).toEqual('Victor')
  });
  test.skip('lastName is Stevenson', () => {
    expect(values.lastName).toEqual('Xie');
  });
  test.skip('thisYear is 1965', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test.skip('birthYear is 1947', () => {
    expect(values.birthYear).toEqual(2007);
  });
  test.skip('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Victor Xie and I am 18 years old.');
  });
});

describe('step 3', () => {
  test.skip('fullName is Carlos Stevenson', () => {
    expect(values.fullName).toEqual('Carlos Stevenson');
  });
  test.skip('age is 18', () => {
    expect(values.age).toEqual(18);
  });
});
