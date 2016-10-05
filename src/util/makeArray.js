/**
 * create a arr form val which can be any type
 * Created by lxj on 16/7/10.
 */

import {isNaN, isNull, isUndefined} from './type';

export default function (val) {
    if (isNull(val) || isUndefined(val) || isNaN(val)) {
        return [];
    } else if (!val.hasOwnProperty('length')) {
        return [val];
    } else {
        return Array.prototype.slice.call(val);
    }
};
