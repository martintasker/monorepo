'use strict';

const {add1, mul2} = require('./index');

describe('test', () => {
  it('works', () => {
    expect(add1(1)).toEqual(2);
    expect(mul2(5)).toEqual(10);
  });
});
