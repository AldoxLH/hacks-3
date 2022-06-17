/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,3,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
let idx = 0;
let len = arr.length;

while(idx<len){
    let val = Object.values(arr[idx]);
    if(val[0]%2==1) result.push(val[0]);
    idx++;
}
//export result
module.exports = result; 