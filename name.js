// Curring using Bind method
// var obj = {student:20};
// var printAge = function(){
//     return this.student;
// }
// var b = printAge.bind(obj);
// console.log(b());

// let multiply = function (x,y){
//     console.log(x*y);

// }

// Curring using  Function Enclosures
let multiply = function (x){
    return function(y){
        console.log(x*y);
    } 
}
let multiplyByTwo= multiply(2);
multiplyByTwo(5);
