let num = [23,34,45,55,66,22,11,]
for(let i=0; i<num.length;i++){
    console.log(num[i])
} 

num.forEach((element) => {
    console.log(element * element)
}
)

let name = "Harry"
let arr = Array.from(name)
console.log(arr)

for (let i of num){
    console.log(i)
}

for (let i of num){
    console.log(num[i])
}

