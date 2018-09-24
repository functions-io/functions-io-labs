"use strict";

module.exports = function(message){
    return new Promise(function(resolve, reject){
        try {
            if (message.roles.indexOf("admin") >= 0){
                resolve(1);
            }
            else{
                //if (message.permission === "action")
                resolve(0);
            }
        }
        catch (error) {
            reject(error);
        }
    });
};