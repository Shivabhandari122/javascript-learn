// insert new data in const variable

const name = ['shiva', 'jitesh', 'rajesh']
name[3] = "nitesh"
console.log(name)

//********* learning about push, pop, unshift, shift method************

const days = ['sunday', 'monday', 'tuesday']
days.push("wednesday") //This method help to put data from last of the array.
console.log(days)

const fruits = ['apple', 'orange', 'pinnaple']
fruits.pop() // This is the pop method which helps to remove last data from the arrays
console.log(fruits)

const fruit = ['apple', 'orange', 'pinnaple']
fruit.unshift('banana', 'grapes') // This is the unshift method which helps to put data in the 0 index of the array.
console.log(fruit)

const day = ['sunday', 'monday', 'tuesday', 'wednesday']
day.shift() //This is a shift method of js which help us to remove data from the zero index of the array.
console.log(day)

// ********Learning about slice, splice and split methods************

// slice is used to create a copy of a portion of the array. It doesn't modify the original array. syntax: slice(startIndex, endIndex)
// where start index is inclusive & endIndex is exclusive.

const animal = ['cow', 'dog', 'cat', 'elephant', 'horse', 'donkey']
const ani = animal.slice(1, 5)
console.log(animal)
console.log(ani)

//splice is used to change the content of an array by removing or replacing existing and / or adding new elements. syntax(startIndex, deleteIndex, addItem)

const vowels = ['a', 'e', 'i', 'o', 'u']
const vol = vowels.splice(1, 4, 'w', 'f')
console.log(vowels)
console.log(vol)

//* split *

let text = "hello my self shiva"
const newArray = text.split(" ")
console.log(newArray)

//*object*

const person = {
    name: "shiva",
    address: "kanepokhari"
}

//adding data in object variable

person.age = 22

// Modify can bring problem:- you can solve this problem by using thiss method:- 

Object.freeze(person)

//now this will not work because of freeze method.

// you can modify the data as well.
person.name = "rajesh"

console.log(Object.keys(person))
console.log(Object.values(person))

//******condition in javascript.************

const isRaining = true
if(isRaining){
    console.log("carry umbrella")
}else{
    console.log("don't carry umbrella")
}

//If there is more than two conditions 

const temp = 31
if(temp > 30){
    console.log("It is hot today")
}else if(temp > 25 && temp <=30){         //To execute this both condition should be true.
    console.log("It is pleasant today")
}else{
    console.log("It is cold today")
}

//***********ternary operator**************

// in this we reduce the condition in just one line.

const isRain = false
const result = isRain ? "carry umbrella" : "don't carry umbrella"
console.log(result)

//*****************short circuit evaluation********************

const isRany = true
const resul = isRany && "carry raincoat" || "don't carry raincoat"
console.log(resul)


// *******************Nullish coalescing operator ****************

// This used when value is null or undefined. if the value is provided "age = 22" result will be 22

let age = null
let output = age ?? "no age"
console.log(output)

