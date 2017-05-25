/**
 * Created by cookie on 2017-05-25.
 */

var fs =  require('fs');

console.log(1);

// Sync
var text = fs.readFileSync('text.text',{encoding:'utf8'});
console.log(text);

// Async
console.log(2);

fs.readFile('text.text','utf-8',function (err, text) {
    console.log(3);
    console.log(text);
})
console.log(4);