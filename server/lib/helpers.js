/**
 * Helpers for various tasks
 */

const helpers = {};

// Parse a JSON string to object in all cases, without throwing
helpers.parseJsonToObject = function(str) {
    try {
        const obj = JSON.parse(str);
        return obj;
    } catch (e) {
        return {};
    }
};

 // Export the module
 module.exports = helpers;