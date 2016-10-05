/**
 * vtbody
 * Created by lxj on 16/8/14.
 */

import slot from 'src/directives/slot';

let vtbody = {
    name: 'vtbody',
    template: require('./index.html'),
    directives: {slot},
    computed: {
        modName: function () {
            return this.$parent.modName;
        }
    }
};

export default vtbody;
