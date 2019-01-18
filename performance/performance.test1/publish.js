const exec = require("child_process").exec;
const fs = require("fs");

function publish(index){
    return new Promise(function(resolve, reject){
        var pkgText = [];
        pkgText.push('{');
        pkgText.push('    "name": "@functions-io-labs-performance/test' + index + '",');
        pkgText.push('    "version": "1.0.0",');
        pkgText.push('    "description": "test",');
        pkgText.push('    "category": "test",');
        pkgText.push('    "main": "lib/index.js",');
        pkgText.push('    "author": "",');
        pkgText.push('    "license": "ISC"');
        pkgText.push('  }');
        fs.writeFileSync("package.json", pkgText.join("\n"));

        var child = exec("npm publish --access public", function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                reject(error);
                console.log('exec error: ' + error);
            }
            else{
                resolve();
            }
        });
    });
}

(async function test(){
    for (var i = 505; i++; i < 1000){
        await publish(i);
    }
})();

