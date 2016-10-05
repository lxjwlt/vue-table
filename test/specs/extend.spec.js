import extend from 'src/util/extend';

describe('util/extend.js', function () {

    it('object extend', function () {
        let obj = {};

        expect(extend(obj)).toBe(obj);

        expect(extend(obj, null)).toBe(obj);

        expect(extend({
            name: 'a'
        }, {
            name: 'b',
            age: 2
        }, {
            name: 'c'
        })).toEqual({
            name: 'c',
            age: 2
        });

        expect(extend({
            obj: {
                name: 'a',
                age: 1
            }
        }, {
            obj: {
                name: 'b'
            }
        })).toEqual({
            obj: {
                name: 'b'
            }
        });

    });

    it('array extend', function () {
        let arr = [];

        expect(extend(arr)).toBe(arr);

        expect(extend(arr, null)).toBe(arr);

        expect(extend([1, 1, 1], [2, 2])).toEqual([2, 2, 1]);

        expect(extend([[1, 1, 1], 1], [[2, 2]])).toEqual([[2, 2], 1]);

    });

    it('object deep extend', function () {

        expect(extend(true, {
            obj: {
                name: 'a',
                age: 1
            }
        }, {
            obj: {
                name: 'b'
            }
        })).toEqual({
            obj: {
                name: 'b',
                age: 1
            }
        });

    });

    it('array deep extend', function () {

        expect(extend(true, [[1, 1, 1], 1], [[2, 2]])).toEqual([[2, 2, 1], 1]);

    });

    it('clone object', function () {
        let originObj = {
            name: 'a'
        };

        let clone = extend({}, originObj);

        expect(clone).toEqual(originObj);

        expect(clone).not.toBe(originObj);
    });

    it('clone array', function () {
        let originArray = [1, 2, 3];

        let clone = extend([], originArray);

        expect(clone).toEqual(originArray);

        expect(clone).not.toBe(originArray);
    });

});
