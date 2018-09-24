"use strict";

//types => integer, long, float, double, string, byte, binary, boolean, date, dateTime, password

module.exports = function(message){
    return new Promise(function(resolve, reject){
        var person = {};
        person.code = message.code;
        person.name = "person " + message.code;
        person.date = new Date();
        person.sex = "Male";
        person.address = {addressLocality: "local", postalCode: "0000", streetAddress:"address"};
        person.listChildren = [{code: 1, name: "child 1"}, {code: 2, name: "child 2"}]

        resolve(person);
    });
};