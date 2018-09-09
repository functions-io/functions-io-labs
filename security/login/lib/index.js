"use strict";

module.input = {
    type: "object",
    properties: {
        username: {type: "string", maximum: 30},
        password: {type: "string", maximum: 30}
    }
};

module.output = {
    type: "object",
    properties: {
        id: {type: "string"},
        name: {type: "string"},
        email: {type: "string"},
        roles: {
            type: "array",
            items: {type: "string"}
        }
    }
};

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