/**
* modificar los valores de las propiedades (name y role) del objeto result, 
* name -> capital,
* role -> upper
* 
* output => {
    id:100,
    name:"Foo",
    role:"ADMIN"
}
*/
let result = {
    id:100,
    name:"foo",
    role:"admin"
};

let val = result.name.charAt(0).toUpperCase() + result.name.slice(1);
result.name = val;

let val2 = result.role.toUpperCase();
result.role = val2;


 
//export result
module.exports = result; 