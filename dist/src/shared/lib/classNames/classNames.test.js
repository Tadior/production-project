import { classNames } from './classNames';
describe('classNames', function () {
    test('with first param', function () {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with addition param', function () {
        var expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('with mods', function () {
        var expected = 'someClass hovered truth';
        expect(classNames('someClass', { hovered: true, truth: true }, [])).toBe(expected);
    });
    test('with false mode', function () {
        var expected = 'someClass hovered';
        expect(classNames('someClass', { hovered: true, falsy: false }, [])).toBe(expected);
    });
    test('with undefined', function () {
        var expected = 'someClass hovered';
        expect(classNames('someClass', { hovered: true, falsy: undefined }, [])).toBe(expected);
    });
});
