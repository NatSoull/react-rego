//                          IMMUTABLE

const fruits = ["apple" , "mango" , "banana" , "orange"]

// console.log(fruits)

// fruits.push("kiwi")

// fruits.splice(2 , 1)
// console.log(fruits)

const newFruits = fruits.filter(fruit => fruit != "banana")

// const newFruits = [...fruits , "kiwi"]

// console.log(newFruits)


const ABC = {a : "aaa" , b : "bbb" , c : "ccc"}

// console.log(ABC)

// ABC.d = "ddd"

// const newABC = {...ABC , d: "ddd"}

const newABC = {...ABC , b: "zzz"}

console.log(newABC)