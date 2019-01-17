"use strict";

const moduleTest = require("../");

moduleTest({delay:0}).then(function(value){
    console.log(value);
});