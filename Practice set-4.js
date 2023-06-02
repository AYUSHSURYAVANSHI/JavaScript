let str = "Har\""
console.log(str.length)


const sentence = "The brown fox jumps over the lazy  dog"
const word = 'fox'

console.log(sentence.includes(word))


let name = "Hello"

console.log(name.toLowerCase())
console.log(name.toUpperCase())


let str2 = "Please give Rs 1000"
let amount =str2.slice("Please give Rs ".length)
// let amount =str2.slice(15)
console.log(amount)


let friend = "Deepika"
friend[3] = "R" // Friend is not change because it is immutable 
console.log(friend)