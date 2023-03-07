// console.log(example);
// let example = "I'm the example!";   
// console.log(hello);                                   
// var hello = 'world'; 
// var hello;  
//console.log(hello);   undefined  
//var hello = 'world'; assigned 'world' to var hello
// var needle = 'haystack';//assigned 'haystack' ti the variable needle
// test();
// function test(){
//     var needle = 'magnet';//assigned 'magnet' ti the variable needle
//     console.log(needle); //output magnet
// }

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);//output super cool
// var food = 'chicken';
///////////////////////////////
// mean();// mean is not a function
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

////////////////////
// console.log(genre);//undefined
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);// rock
//     var genre = "r&b";
//     console.log(genre);//r&b
// }
// console.log(genre);//disco
/////////////////
// dojo = "san jose";
// console.log(dojo);//san jose
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);//seattle
//     var dojo = "burbank";
//     console.log(dojo);//burbank
// }
// console.log(dojo);//san jose
//////////////////
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}













