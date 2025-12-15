const sumAll = require('./sumAll')

describe('sumAll', () => {
  test('sums numbers within the range', () => {
    expect(sumAll(2, 4)).toEqual(9);
  });
  ('works with large numbers', () => {
    expect(sumAll(1, 4000)).toEqual(8002000);
  });
  
  ('works with larger number first', () => {
    expect(sumAll(123, 1)).toEqual(7626);
  });
  ('returns ERROR with negative numbers', () => {
    expect(sumAll(-10, 4)).toEqual('ERROR');
  });
  test.skip('returns ERROR with non-integer parameters', () => {
    expect(sumAll(2.5, 4)).toEqual('ERROR');
  });
  test.skip('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, "90")).toEqual('ERROR');
  });
  test.skip('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, [90, 1])).toEqual('ERROR');
  });
});
