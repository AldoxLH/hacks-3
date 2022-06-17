/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,2,3,4,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
let idx = 0;
let len = arr.length;

while(idx<len){
    val = Object.values(arr[idx]);
    result.push(val[0]);
    idx++
}
 
//export result
module.exports = result;