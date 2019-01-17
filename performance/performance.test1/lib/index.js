"use strict";

const os = require("os");

var id = parseInt(Math.random() * 100000000).toString() + new Date().getTime().toString();

module.exports = function(message){
    return new Promise(function(resolve, reject){
        try {
            var timeInit = new Date().getTime();
            var response = {};
            var delay = parseInt(message.delay) || null;
            
            response.id = id;
            response.timeInit = timeInit;
            response.delay = delay;
            response.uptime = os.uptime();
            response.totalmem = os.totalmem();
            response.freemem = os.freemem();
            response.rss = process.memoryUsage().rss;
            response.cpu_qtd = os.cpus().length;
            response.hostname = os.hostname();
            var network_eth0 = os.networkInterfaces()["eth0"];
            if (network_eth0 && network_eth0[0]){
                response.newtwork = network_eth0[0].address;
            }
            else{
                response.newtwork = "";
            }
            var infoCPU = os.cpus()[0];
            response.cpu_model = infoCPU.model;
            response.cpu_speed = infoCPU.speed;
            response.platform = os.platform();
            response.release = os.release();
            
            if (delay){
                setTimeout(function(){
                    resolve(response);
                }, delay);
            }
            else{
                resolve(response);
            }
        }
        catch (error) {
            reject(error);
        }
    });
};