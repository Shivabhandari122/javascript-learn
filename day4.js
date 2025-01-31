// Day 4 of learning js

//callBack function:- It is a function which goes into other function as a arguement
//it main function is to fetch data from the network. it is also used for to check the work is done or not.

function sayHello(name, callback) {
  console.log(name);
  callback();
}
function sayGoodBye() {
  console.log("good bye");
}
sayHello("shiva", sayGoodBye);
console.log(
  "***********************************************************************************************"
);

/* HOF(higher order function):- Higher order function is a function that take accept one or more functions(callback) or return a function.
                                It accept frequently callBack function.
Types:-
1) forEach
2) map
3) filter
4) Reduce 

forEach() function:-
                If looping is required to done with array the use of forEach HOF is optimized. */

const numeric = [1, 2, 3, 4, 5];
const squaredNum = [];

numeric.forEach((num) => {
  squaredNum.push(num ** 2);
});
console.log(squaredNum);
console.log(
  "***********************************************************************************************"
);

/* map() function:- you can done the things of forEach by using map extra things is it returns the data but forEach not have that power.
   In forEach we have to make separate array line const squareNumbers = [], but in map doesn't require but it make arrray and push.
   It doesn't modify the original array but it gives a new array. */

const squareNumber = numeric.map((number) => {
  return number ** 2;
});
console.log(squareNumber);
console.log(
  "***********************************************************************************************"
);

//My interviewer asked me to take fullName from here

const users = [
  {
    id: 1,
    firstName: "shiva",
    lastName: "Bhandari",
    address: "Kanepokhari",
  },
  {
    id: 2,
    firstName: "Nitesh",
    lastName: "Raya",
    address: "Shantidanda",
  },
  {
    id: 3,
    firstName: "Kundan",
    lastName: "Chapagain",
    address: "bahundangi",
  },
];

//forEach:- this only shows the availabe key like firstName, lastName and address, it cannot shows the fullName key. for example

// users.forEach((user) =>{
//     console.log(user.firstName)
// })

// map() most important

// const results = users.map((user) =>{
//     return{
//         id: user.id,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         address: user.address,
//         fullName: user.firstName +" "+ user.lastName
//     }
// })
// console.log(results)

//another way using spread operator
//if there are huge number of key like id, firstName, lastName,avator etc there is the things to solve this spread operator. at the end we need only fullname then why should we include other data like firstName etc. for this we have spread operator. the spread operator uses is to put all other data same as like previous data.

const results = users.map((user) => {
  return {
    ...user,
    fullName: user.firstName + user.lastName,
  };
});
console.log(results);
console.log(
  "***********************************************************************************************"
);

//another example

const numbers2 = [1, 2, 3, 4];

const result = numbers2.map((user) => {
  return {
    number: user,
    name: "a",
  };
});
console.log(result);
console.log(
  "***************************************************************************************"
);

/* Filter:- only return in boolean either true / false */

const number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const eveen = number3.filter((even) => {
  return even % 2 == 0; // Note: only in single line
});
console.log(eveen);

//another example

const books = [
  {
    title: "Mahabir pun",
    author: "Mahabir pun",
    year: 2023,
  },
  {
    title: "Think like a monk",
    author: "jay shetty",
    year: 2020,
  },
  {
    title: "Book3",
    author: "Author3",
    year: 2021,
  },
  {
    title: "Book4",
    author: "Mahabir pun",
    year: 2022,
  },
  {
    title: "Magics",
    author: "David hemen",
    year: 2023,
  },
  {
    title: "Money Talk",
    author: "leonard erikson",
    year: 2024,
  },
];
const list = books.filter((writer) => {
  // return writer.author === "Mahabir pun"
  return writer.year !== 2023;
});
console.log(list);

// another example

const file = ["books.js", "author.c", "apple.js", "arrayFunction.css"];
const kitab = file.filter(function (files) {
  return files.endsWith(".js");
});
console.log(kitab);
console.log(
  "***********************************************************************************************"
);

/* Reduce function:- It is for mathematics. To organize the data which is come allot from the database to the frontend.
   you can do it in frontend as well as backend where you are comfortable */

const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result1 = number1.reduce((acumulator, currentValue) => {
  return acumulator + currentValue;
}, 0);
console.log(result1);
console.log(
  "***********************************************************************************************"
);

//another example
/* when we do add to cart there is quantity  and price which 
   will show total quantity and total price. this is how it shows:- 
   here we finding out total quantity, total amount      */

const cartItems = [
  {
    name: "product A",
    quantity: 2,
    price: 20,
  },
  {
    name: "product c",
    quantity: 10,
    price: 5,
  },
  {
    name: "product A",
    quantity: 13,
    price: 10,
  },
];

const output = cartItems.reduce(
  (acumulator, currentValue) => {
    acumulator.totalPrice += currentValue.quantity * currentValue.price;
    acumulator.totalQuantity += currentValue.quantity;
    return acumulator;
  },
  { totalPrice: 0, totalQuantity: 0 }
);
console.log("this is a:" + output);
console.log("hello");
