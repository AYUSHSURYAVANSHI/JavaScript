let num = [34,56,23,45,54]
console.log(num)
num.map((value)=>{
    console.log(value)
})
console.log(num)

let a2 = num.filter((a)=>{
    return a<25
})

console.log(a2)



let n = [23,45,66,223,4]
let now = n.reduce((h1,h2)=>{
    return h1 + h2 
})

console.log(now)