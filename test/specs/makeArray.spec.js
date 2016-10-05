import makeArray from 'src/util/makeArray';

describe('util/makeArray.js', function () {

    it('array would not change', function () {
        let originArray = [1, 2, 3];

        expect(makeArray(originArray)).not.toBe(originArray);

        expect(makeArray(originArray)).toEqual([1, 2, 3]);
    });

    it('pseudo-array to real array', function () {
        let pseudoArray = {length: 0};
        let argumentsArray = (function () { return arguments; })(1, 2, 3);

        expect(makeArray(pseudoArray)).toEqual([]);

        expect(makeArray(argumentsArray)).toEqual([1, 2, 3]);
    });

    it('non-array to array', function () {
        expect(makeArray()).toEqual([]);

        expect(makeArray(null)).toEqual([]);

        expect(makeArray(false)).toEqual([false]);

        expect(makeArray(true)).toEqual([true]);

        expect(makeArray(0)).toEqual([0]);

        expect(makeArray(NaN)).toEqual([]);

        expect(makeArray({})).toEqual([{}]);
    });

});
