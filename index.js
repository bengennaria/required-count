'use strict';


/**
 * Modules
 * Internal
 */
let count;

let isFirst = () => {
    return Boolean(count);
};

let getCount = () => {
    let moduleCache = require.cache[__filename];
    if (moduleCache.hasOwnProperty('requiredCount')) {
        moduleCache['requiredCount'] = moduleCache['requiredCount'] + 1;
    }
    else {
        moduleCache['requiredCount'] = 0;
    }

    return count = moduleCache['requiredCount'];
};


/**
 * @exports
 */
module.exports = {
    isFirst: isFirst,
    getCount: getCount
};

