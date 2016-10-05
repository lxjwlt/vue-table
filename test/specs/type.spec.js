import {
    isObject, isNumber, isFunction, isBoolean, isNull, isString, isNaN,
    isUndefined, isArray, isRegExp, isEmpty, isNumberic, isEmptyObject

} from 'src/util/type';

let typeMap = {
    number: [-1, 0, 1, 1 / 3, -1 / 3, Infinity, -Infinity, 8e5, 0x12, 0o10],
    string: ['abc', ' abc', '', '3abc', 'true', 'false'],
    stringNumber: ['-1', '0', '1', 'Infinity', '-Infinity', '8e5', '0x12', '0o10'],
    boolean: [true, false],
    'undefined': [][0],
    'null': null,
    'NaN': NaN,
    emptyObject: {},
    object: {name: 'vue-table'},
    array: [[]],
    function: function () {},
    regExp: /.*/g
};

describe('util/type.js', function () {
    it('isObject', function () {
        loopType(isObject, function (type) {
            return type === 'object' || type === 'emptyObject';
        });
    });

    it('isNumber', function () {
        loopType(isNumber, function (type) {
            return type === 'number';
        });
    });

    it('isFunction', function () {
        loopType(isFunction, function (type) {
            return type === 'function';
        });
    });

    it('isBoolean', function () {
        loopType(isBoolean, function (type) {
            return type === 'boolean';
        });
    });

    it('isString', function () {
        loopType(isString, function (type) {
            return type === 'string' || type === 'stringNumber';
        });
    });

    it('isNull', function () {
        loopType(isNull, function (type) {
            return type === 'null';
        });
    });

    it('isUndefined', function () {
        loopType(isUndefined, function (type) {
            return type === 'undefined';
        });
    });

    it('isNaN', function () {
        loopType(isNaN, function (type) {
            return type === 'NaN';
        });
    });

    it('isArray', function () {
        loopType(isArray, function (type) {
            return type === 'array';
        });
    });

    it('isRegExp', function () {
        loopType(isRegExp, function (type) {
            return type === 'regExp';
        });
    });

    it('isEmptyObject', function () {
        loopType(isEmptyObject, function (type) {
            return type === 'emptyObject';
        });
    });

    it('isEmpty', function () {
        loopType(isEmpty, function (type, value) {
            return value === '' || value === false ||
                type === 'array' && !value.length ||
                type === 'undefined' || type === 'null' ||
                type === 'NaN' || type === 'emptyObject';
        });
    });

    it('isNumberic', function () {
        loopType(isNumberic, function (type) {
            return type === 'number' || type === 'stringNumber';
        });
    });
});

function loopType (checker, callback) {
    for (let typeName in typeMap) {
        let type = typeMap[typeName];

        type = Array.isArray(type) ? type : [type];

        for (let item of type) {
            expect(checker(item)).toBe(callback(typeName, item));
        }
    }
}
