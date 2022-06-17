/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;

let arrKeys = Object.keys(foo);
let len = arrKeys.length;
let idx = 0;

for(;idx<len;idx++){
    if(arrKeys[idx]=="id"){
        let id = foo.id
        result = Object.assign({id});
    }

    if(arrKeys[idx]=="name"){
        let name = foo.name.charAt(0).toUpperCase() + foo.name.slice(1)
        result = Object.assign(result,{name})
    }

    if(arrKeys[idx]=="roles"){
        let roles = [];
        roles.push(foo.roles[0].toUpperCase());
        roles.push(roleSuperUser);
        roles.push(roleUser);
        result = Object.assign(result,{roles}) 
    }

    if(arrKeys[idx]=="skills"){
        let newSkill = foo.skills;
        let idx = 0;
        let idx2= 0;
        let len = newSkill.length;
        let len2 = skills.length;
        
        for(;idx<len;idx++){
            if(newSkill[idx]=="html" || newSkill[idx]=="css"){
                let val = newSkill[idx].toUpperCase();
                newSkill.splice(idx,1,val);                
            }else{
                let val = newSkill[idx].charAt(0).toUpperCase() + newSkill[idx].slice(1);
                newSkill.splice(idx,1,val);
            }
                        
        }

        for(;idx2<len2;idx2++){
            if(skills[idx2]=="git"){
                let val = skills[idx2].charAt(0).toUpperCase() + skills[idx2].slice(1);
                newSkill.unshift(val);                
            }

            if(skills[idx2]=="github"){
                let val = skills[idx2].charAt(0).toUpperCase() + skills[idx2].slice(1);
                newSkill.splice(1,0,val);
            }

            if(skills[idx2]=="docker"){
                let val = skills[idx2].charAt(0).toUpperCase() + skills[idx2].slice(1);
                newSkill.splice(5,0,val);
            }

            if(skills[idx2]=="deploy"){
                let val = skills[idx2].charAt(0).toUpperCase() + skills[idx2].slice(1);
                val
                newSkill.push(val);
            }
        }
        
        skills = newSkill;
        result = Object.assign(result, {skills})
    }

    if(arrKeys[idx]=="alias"){
        let newLevels = [];
        let i = 0;
        let len = levels.length
        
        for(;i<len;i++){
            let val = {};
            let LEVEL = levels[i].LEVEL.charAt(0).toUpperCase() +  levels[i].LEVEL.charAt(2);
            Object.assign(val,{LEVEL});
            newLevels.push(val);
        }

        levels = newLevels;
        result = Object.assign(result,{levels})
        
    }
}

//export result
module.exports = result; 