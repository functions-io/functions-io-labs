"use strict";

module.input = {
    type: "array",
    items: {type: "number"}
};

module.output = {
    type: "number"
}

module.exports = function(x, y){
    return x + y;
};