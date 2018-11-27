"use strict";

var id = parseInt(Math.random() * 100000000).toString() + new Date().getTime().toString();

module.exports = function(message){
    return new Promise(function(resolve, reject){
        try {
            var timeInit = new Date().getTime();
            var response = {};
            var delay = parseInt(message.delay) || null;
            
            response.id = id;
            response.timeInit = timeInit;
            response.delay = delay;
            
            if (delay){
                setTimeout(function(){
                    resolve(response);
                }, delay);
            }
            else{
                resolve(response);
            }
        }
        catch (error) {
            reject(error);
        }
    });
};