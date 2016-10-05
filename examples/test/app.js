/**
 * test 实例
 * Created by lxj on 16/7/10.
 */

import {vtable, vthead, vtd, vtbody, vtr, vth} from 'src/index';
import Vue from 'Vue';
window.v = Vue;
require('./index.css');

new Vue ({
    el: 'body',
    components: {vtable, vthead, vtd, vtbody, vtr, vth},
    data: {
        options: {
            columns: [{
                field: 'first_name',
                title: '名称',
                formatter: function (val) {
                    return 'hello ' + val;
                }
            }, {
                field: 'city',
                title: '城市'
            }, {
                field: 'email',
                title: '邮箱'
            }],
            height: '100px',
            maxHeight: 50,
            data: [{
                "id": 1,
                "first_name": "Jessica",
                "email": "jwheeler0@macromedia.com"
            }, {
                "id": 2,
                "first_name": "Mark",
                "email": "marnold1@tripadvisor.com",
                "city": "Soly"
            }, {
                "id": 3,
                "first_name": "Jimmy",
                "email": "jrichardson2@xrea.com",
                "city": "San Antonio"
            }, {
                "id": 4,
                "first_name": "Peter",
                "email": "pjohnson3@hubpages.com",
                "city": "Quimper"
            }, {
                "id": 5,
                "first_name": "Kathryn",
                "email": "kjohnston4@admin.ch",
                "city": "Ucuncha"
            }, {
                "id": 6,
                "first_name": "Ronald",
                "email": "rclark5@ebay.co.uk",
                "city": "Geneng"
            }, {
                "id": 7,
                "first_name": "Brandon",
                "email": "bdean6@opera.com",
                "city": "Geshan"
            }, {
                "id": 8,
                "first_name": "Kimberly",
                "email": "kbanks7@fotki.com",
                "city": "Maloye Verevo"
            }, {
                "id": 9,
                "first_name": "Lori",
                "email": "lrichards8@amazon.de",
                "city": "Dahe"
            }, {
                "id": 10,
                "first_name": "Susan",
                "email": "sjordan9@slideshare.net",
                "city": "Curahklapa"
            }]
        }
    }
});
