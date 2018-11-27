"use strict";

const moduleTest = require("../");

moduleTest({delay:600}).then(function(value){
    console.log(value);
});