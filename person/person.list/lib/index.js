"use strict";

module.exports = function(message){
    return new Promise(function(resolve, reject){
        var persons = [];
        var person1 = {}, person2 = {}, person3 = {};

        person1.code = 1;
        person1.name = "person 1";
        person1.date = new Date();
        person1.sex = "Male";
        person1.address = {addressLocality: "local1", postalCode: "00001", streetAddress:"address1"};
        person1.listChildren = [{code: 1, name: "child 1"}, {code: 2, name: "child 2"}]

        person2.code = 2;
        person2.name = "person 2";
        person2.date = new Date();
        person2.sex = "Female";
        person2.address = {addressLocality: "local2", postalCode: "00002", streetAddress:"address2"};
        person2.listChildren = [{code: 1, name: "child 1"}, {code: 2, name: "child 2"}]

        person3.code = 3;
        person3.name = "person 3";
        person3.date = new Date();
        person3.sex = "Male";
        person3.address = {addressLocality: "local3", postalCode: "00003", streetAddress:"address3"};
        person3.listChildren = [{code: 1, name: "child 1"}, {code: 2, name: "child 2"}]
        
        persons.push(person1);
        persons.push(person2);
        persons.push(person3);

        resolve(persons);
    });
};