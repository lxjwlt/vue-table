/**
 * vtd
 * Created by lxj on 16/8/13.
 */

import slot from 'src/directives/slot';

let vtd = {
    template: require('./index.html'),
    directives: {slot},
    computed: {
        modName: function () {
            return this.$parent.modName;
        }
    }
};

export default vtd;
