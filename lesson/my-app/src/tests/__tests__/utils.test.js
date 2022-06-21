import {sum, filterArr} from '../utils';

describe('sum', () => {
  it('should return 3', () => {
    expect(sum(1,2)).toEqual(3);
  })

  it('should return NaN', () => {
    expect(sum(1,undefined)).toEqual(NaN);
  })
})

describe('filterArr', () => {
  it('should return [1]', () => {
    expect(filterArr([1,10,7])).toEqual([1]);
  })
})
