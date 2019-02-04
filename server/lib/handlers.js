/**
 * Request Handlers
 */

// Dependencies 
const _data = require('./data');

// Handlers container
const handlers = {};

// Not found handler
handlers.notFound = function(data, callback) {
    callback(404);
};

// physicians router
handlers.physicians = function(data, callback) {
    const acceptableMethods = ['get'];
    if(acceptableMethods.indexOf(data.method) > -1){
        handlers._physicians[data.method](data, callback);
    } else {
        callback(405);    
    }
};

// Container for physicians sub methods
handlers._physicians = {};

// physicians - get
// Required data: none
// Optional data: none
handlers._physicians.get = function(data, callback) {
    const getPhysician = function(id) {
        return _data.read('physicians', id);
    }

    _data.read('physicians', 'list').then(obj => {
        const physicians = obj.physicians.map(getPhysician);
        Promise.all(physicians).then(records => {
            if(records) {
                callback(200, records);
            } else {
                callback(500, {'Error': 'Could not retrieve records'});
            }
        }).catch(err => {
            callback(500, {'Error': 'Could not retrieve records'});
        });
    });
};

// appointments router
handlers.appointments = function(data, callback) {
    const acceptableMethods = ['get'];
    if(acceptableMethods.indexOf(data.method) > -1){
        handlers._appointments[data.method](data, callback);
    } else {
        callback(405);    
    }
};

// Container for users sub methods
handlers._appointments = {};

// appointments - get
// Required data: id
// Optional data: none
handlers._appointments.get = function(data, callback) {
    const getAppointment = function(id) {
        return _data.read('appointments', id);
    }
    // Check that the physician_id is valid
    const id = typeof(data.queryStringObj.id) == 'string' && data.queryStringObj.id.trim().length == 5 ? data.queryStringObj.id.trim() : false;
    if(id) {
        // lookup the physician record to get appointmnet_ids
        _data.read('physicians', id).then(obj => {
            const appointments = obj.appointments.map(getAppointment);

            Promise.all(appointments).then(records => {
                if(records) {
                    callback(200, records);
                } else {
                    callback(500, {'Error': 'Could not retrieve records'});
                }
            }).catch(err => {
                callback(500, {'Error': 'Could not retrieve records'});
            });
        });
    } else {
        callback(400, {'Error': 'Missing required fields.'})
    }
};

// Export handlers module
module.exports = handlers;