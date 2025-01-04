/*Types of function in js
1) Regular function
2) Named function
3) Arrow function
4) Annonymous function */

// **********regular function********** 

function add(a, b){
    console.log(a + b)
}
add(3, 5)

// ************Named function************

// If you put our function name then it is called named function.

let sum = function(a){
    console.log(a)
}
sum(4)

// *************Arrow function***********

let a = () => console.log("hello i am shiva")           //This way used only if one line code in block.
a()

let sub = (a, b) =>{
    console.log(a - b)
    console.log("******************************************************")       //this arrrow function is used for multiline
}
sub(5, 2);

// ************Annonymous function**************

// some function have not named is known as anonymous function 


(() => {
    console.log("hello world!");
})();

// ***************Loops in javascript********************

// *For Loop*

//syntax:- for(intialization; condition; iteration) // i++ === i+1

for(let i=0; i<5; i++){
    console.log(i)
}
console.log("*****************************************")


const people = ['shiva', 'jitesh', 'nitesh', 'kundan', 'adesh', 'kumar']
for(let j=0; j < people.length; j++){
    console.log(people[j])
}

// *While loop*

let z = 0;
while(z < 5){
    console.log(z)
    z++
}
console.log("**************************************************")

// *Loop alternative for object variable*

let company = {
    employee : 'shiva bhandari',
    age : 24,
    salary: 25000
}

for(let all in company){
    console.log(all /*this show just key*/ , company[all] /*this will show all the value*/)
}
console.log("***************************************************************************")

// *************Hoisting***************************

//Behaviour where variable and function declearation are moved to the top during compilation phase.

//note it is working only in var variable and regular function only 
sql()
function sql(){
    console.log("This is working")
}

console.log(action)
var action = 1

//this things are just working not show actual data 
