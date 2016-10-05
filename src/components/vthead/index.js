/**
 * vthead
 * Created by lxj on 16/8/13.
 */

import slot from 'src/directives/slot';

let vthead = {
    name: 'vthead',
    template: require('./index.html'),
    directives: {slot},
    computed: {
        modName: function () {
            return this.$parent.modName;
        }
    }
};

export default vthead;
