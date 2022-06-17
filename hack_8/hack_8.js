/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* que se representa con la clave y el valor
* debes utilizar for ó while
*
* 
* output => [["id",100], ["name","foo"], ["role","admin"]]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};
let result = [];
let arrKeys = Object.keys(foo);
let arrVal = Object.values(foo);
let idx = 0;
let len = arrKeys.length

for(;idx<len;idx++){
    let inst = []
    inst[0] = arrKeys[idx];
    inst[1] = arrVal[idx];
    result[idx]=inst;
}

result


//export result
module.exports = result; 