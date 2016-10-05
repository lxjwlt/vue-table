/**
 * vtable
 * Created by lxj on 16/8/13.
 */

import slot from 'src/directives/slot';
import debug from 'src/util/debug';
import extend from 'src/util/extend';
import {isFunction, isEmpty, isNaN} from 'src/util/type';
import makeArray from 'src/util/makeArray';
import vthead from 'src/components/vthead';
import vtbody from 'src/components/vtbody';
import vtr from 'src/components/vtr';
import vtd from 'src/components/vtd';
import vth from 'src/components/vth';

require('./index.css');

let vtable = {
    template: require('./index.html'),
    components: {vtd, vtr, vthead, vtbody, vth},
    directives: {slot},
    props: {
        options: {
            type: Object
        },
        height: {
            type: [Number, String],
            default: 'auto',
            coerce: addCssUnit
        },
        test: {},
        minHeight: {
            default: 0,
            coerce: addCssUnit
        },
        maxHeight: {
            default: 'auto',
            coerce: addCssUnit
        }
    },
    filters: {
        cellFormatter: function (val, formatter) {
            return isFunction(formatter) ? formatter.call(this, val) : '-';
        }
    },
    data: function () {
        let vm = this;

        initOptions(vm, vm.options);

        return {
            modName: 'vue-table',
            fixBodyStyle: {
                height: vm.height,
                minHeight: vm.minHeight,
                maxHeight: vm.maxHeight
            }
        };
    },
    computed: {

    }
};

function initOptions (vm, options) {
    let props = vm.$options.props,
        coerce;

    for (let prop in options) {
        if (!options.hasOwnProperty(prop) ||
            !couldOverrideProp(vm, prop, options[prop])) {
            continue;
        }

        coerce = props[prop].coerce || function () {};

        vm[prop] = coerce(options[prop]);
    }

}

function couldOverrideProp (vm, prop, value) {
    let propConfig = vm.$options.props[prop];

    return propConfig &&
        prop !== 'data' &&
        vm[prop] === propConfig.default &&
        value !== propConfig.default;
}

function addCssUnit (value) {

    if (/^\d+[a-zA-Z]+]$/.test(value) || value === 'auto') {
        return value;
    }

    return isFinite(value) ? value + 'px' : 'auto';
}

export default vtable;
