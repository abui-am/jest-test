import add from '../add';

describe('add', () => {
  it('should add two number', () => {
    expect(add(3, 4)).toBe(7);
  });

  it('should add two number 2', () => {
    expect(add(-10, 4)).toBe(-6);
  });

  it('should add two number 3', () => {
    expect(add('', 4)).toBe(4);
  });

  it('should empty string + empty string to equal 0', () => {
    expect(add('', '')).toBe(0);
  });

  it('should empty object + empty string to equal NaN', () => {
    expect(add({}, '')).toBe(NaN);
  });
});
