/**
 * object/array override
 * Created by lxj on 16/7/10.
 */

import {isBoolean, isNull, isArray, isObject} from './type';

export default function extend () {
    let target = arguments[0] || {};
    let i = 1;
    let length = arguments.length;
    let deep = false;
    let options, name, src, copy, copyIsArray, clone;

    if (isBoolean(target)) {
        deep = target;

        target = arguments[i] || {};

        i += 1;
    }

    if (typeof target !== 'object') {
        target = {};
    }

    for (; i < length; i++) {

        options = arguments[i];

        if (!isNull(options)) {

            for (name in options) {
                src = target[name];
                copy = options[name];

                if (target === copy) {
                    continue;
                }

                copyIsArray = isArray(copy);

                if (deep && copy && (isObject(copy) || copyIsArray)) {

                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && isArray(src) ? src : [];
                    } else {
                        clone = src && isObject(src) ? src : {};
                    }

                    target[name] = extend(deep, clone, copy);

                } else if (copy !== undefined) {

                    target[name] = copy;

                }
            }
        }
    }

    return target;
}
