import { classNames } from './classNames';

describe('classNames', () => {
  test('with first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with addition param', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });
  test('with mods', () => {
    const expected = 'someClass hovered truth';
    expect(classNames('someClass', { hovered: true, truth: true }, [])).toBe(
      expected,
    );
  });
  test('with false mode', () => {
    const expected = 'someClass hovered';
    expect(classNames('someClass', { hovered: true, falsy: false }, [])).toBe(
      expected,
    );
  });
  test('with undefined', () => {
    const expected = 'someClass hovered';
    expect(
      classNames('someClass', { hovered: true, falsy: undefined }, []),
    ).toBe(expected);
  });
});
