/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
let idx = 0;
let len = arr.length;

for(;idx<len;idx++){    
    val = Object.values(arr[idx]);
    if(val[0]==2 || val[0]==3 || val[0]==4){
        result.push(val[0]);
    }
}
 

//export result
module.exports = result;