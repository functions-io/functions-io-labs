"use strict";

module.exports = function(message){
    return new Promise(function(resolve, reject){
        try {
            if (message.username === "admin" && message.password === "admin"){
                let userObj = {};
                userObj.id = "123";
                userObj.name = "admin";
                userObj.email = "admin@mail.com";
                userObj.roles = ["admin"];
                resolve(userObj);
            }
            else{
                resolve(null);
            }
        }
        catch (error) {
            reject(error);
        }
    });
};