/**
 * vtr
 * Created by lxj on 16/8/13.
 */

import slot from 'src/directives/slot';
import vthead from 'src/components/vthead';
import vtbody from 'src/components/vtbody';

let vtr = {
    template: require('./index.html'),
    directives: {slot},
    computed: {
        modName: function () {
            return this.$parent.modName;
        },
        className: function () {
            let className = {};

            className[this.modName + '_' + 'row'] = this.parentIs(vtbody);

            className[this.modName + '_' + 'header-row'] = this.parentIs(vthead);

            return className;
        }
    },
    methods: {
        parentIs: function (component) {
            var parentName = this.$parent.$options.name;

            return parentName && parentName === component.name;
        }
    }
};

export default vtr;
