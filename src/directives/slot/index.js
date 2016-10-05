/**
 * slot attribute directive
 * extend Vue original slot element directive
 * Created by lxj on 16/8/14.
 */

let slotAttrDirective = {

    bind: function () {
        let content = this.vm._slotContents && this.vm._slotContents['default'];
        
        if (content && content.hasChildNodes()) {
            this.compile(content.cloneNode(true), this.vm._context, this.vm);
        }
    },

    compile: function (content, context, host) {

        if (content && context) {
            let scope = host ? host._scope : this._scope;
            this.unlink = context.$compile(content, host, scope, this._frag);
        }

        if (content) {
            this.el.innerHTML = '';
            this.el.appendChild(content);
        }
    },

    unbind: function () {
        if (this.unlink) {
            this.unlink();
        }
    }
};

export default slotAttrDirective;
