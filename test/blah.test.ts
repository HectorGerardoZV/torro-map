import { sum,div,mul,sub } from '../src';

describe('blah', () => {
  it('should sum', () => {
    expect(sum(1, 1)).toEqual(2);
  });
  it('should sub', () => {
    expect(sub(3, 2)).toEqual(1);
  });
  it('should mul', () => {
    expect(mul(5, 5)).toEqual(25);
  });
  it('should div', () => {
    expect(div(10, 2)).toEqual(5);
  });
});
