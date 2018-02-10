const {add1, mul2} = require('l1');
const sub1 = require('l2');

describe('test', () => {
  it('works', () => {
    expect(sub1(add1(1))).toEqual(1);
    expect(mul2(10)).toEqual(20);
  });
});
