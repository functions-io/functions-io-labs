"use strict";

const moduleTest = require("../");

moduleTest({x:2,y:3}).then(function(value){
    console.log(value);
});