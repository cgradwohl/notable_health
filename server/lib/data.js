/**
 * Library used for storing and editing data
 */

 // Dependancies
const fs = require('fs');
const path = require('path');
const helpers = require('./helpers');


// Container for the module
const lib = {};

// Base directory of the data folder, note __dirname variable is available in every node js file
// which references this files current directory 
lib.baseDir = path.join(__dirname, '/../.data/');

// Read data from a file
lib.read = function(dir, file) {
    return new Promise((resolve, reject) => {
        fs.readFile(lib.baseDir+dir+'/'+file+'.json', 'utf8', function(err, data){
            if (err) 
                reject(err); 
            else 
                resolve(helpers.parseJsonToObject(data));
        });
    });
};

// Export the module
module.exports = lib;