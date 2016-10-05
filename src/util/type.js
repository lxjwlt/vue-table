/**
 * detect js object type
 * Created by lxj on 16/7/10.
 */

function type (val) {
    return Object.prototype.toString.call(val)
        .replace(/\[object\s(.+)]/, '$1').toLowerCase();
}

function is (flag) {
    return function (val) {
        return type(val) === flag;
    };
}

export let isFunction = is('function');

export let isBoolean = is('boolean');

export let isNull = is('null');

export let isUndefined = is('undefined');

export let isArray = is('array');

export let isRegExp = is('regexp');

export let isString = is('string');

export let isObject = function (val) {
    return !!val && !isArray(val) && type(val) === 'object';
};

export let isNumber = function (val) {
    return !isNaN(val) && type(val) === 'number';
};

export let isEmptyObject = (val) =>
    isObject(val) && !Object.keys(val || {}).length;

export let isEmpty = (val) =>
    !val && val !== 0 || isArray(val) && !val.length || isEmptyObject(val);

export let isNumberic = (val) =>
    isString(val) && val && !isNaN(+val) || isNumber(val);

export let isNaN = (val) =>
    typeof val === 'number' && Number.isNaN(val);
