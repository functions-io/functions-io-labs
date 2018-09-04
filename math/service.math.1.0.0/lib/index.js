"use strict";

const mathSum = require("@functions-io-labs/math.sum");
const mathMultiply = require("@functions-io-labs/math.multiply");

module.exports.sum = function(x,y){
    return mathSum(x, y);
};

module.exports.multiply = function(x,y){
    return mathMultiply(x, y);
};