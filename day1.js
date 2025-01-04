// console.log('hello my name is shiva')
// console.log('hello my name is shiva bhandari')

// **var is a old javascript primitive variable not used much now


// var a = "shiva"
// a = "bhandari"
// console.log(a)

// let and const variable is introduced in 2015 (ES6) version and used most in daily life

// note 
// var - reassignment garna milcha, global tw functional scope huncha
// let - reassignment garna milcha, block level scope huncha
// const - reassignment garna mildaina, block level scope huncha

let a = "shiva"
a = "bhandari"
console.log(a)

const age = 15
console.log(age)

// This is right because var scope is global and funtional

if(true){
    var name = "shiva"
    console.log(name,"is the first name")
}
    console.log(name,"is my name")

// this is wrong because let and const scope is block level only so error is nam is not defined

// if(true){
//     let nam = "shiva"
//     console.log(nam,"is the first name")
// }
//     console.log(nam,"is my name")

// ##Array

let friends = ['shiva', 'jitesh', 'nitesh', 'kundan', 906]
console.log(friends[2])

let friend = {
    doctor: "rajesh",
    age: 15
}
console.log(friend.age)

