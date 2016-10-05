import {isObject} from './type';

let validate = {
    columns: {
        field: {
            require: true
        },
        formatter: {
            callback: function (cell) {

                if (cell.formatter && !isFunction(cell.formatter)) {
                    return {
                        template: 'type'
                    };
                }

                return true;
            }
        }
    }
};

let validateTemplate = {
    require: '{0}\'s {1} is required',
    type: '{0}\'s {1} should be a {2}'
};

let validators = {
    require: function (cell, name, isRequire) {
        return isRequire ? !!cell[name] : true;
    },
    callback: function (cell, name, func) {
        return func.call(null, cell, name);
    }
};

function validateColumn (cell) {

    for (let key of Object.keys(validate.columns)) {
        let config = validate.columns[key];

        for (let validatorName of Object.keys(config)) {
            let valid = validators[validatorName].call(cell, key, config);
            
            let tpl = isObject(valid) && valid.template ? 
                validateTemplate[valid.template] : validateTemplate[validatorName];

            if (isObject(valid) && !valid.valid) {
                
            } else if (!valid) {

            }
        }

        if (config.require && !cell[key]) {

        }

    }
    
}

export validateColumn;
