var user = {
    "name": "shanker",
    "number random": Math.random(),
    "isAdmin" : true
}

console.log(user["number random"]);

                     //Property existence test, “in” operator

console.log("name" in user);

                     // the for.. in loop in object

for(var key in user){
    console.log(key);
    // console.log(user[key]);
   
}