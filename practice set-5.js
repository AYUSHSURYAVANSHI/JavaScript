let arr = [12,34,56,677,34]
let a = prompt("Enter a number ")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

let b = [12,34,56,677,34]
let p; ;

do{    
    let a = prompt("Enter a number ")
    p = Number.parseInt(p)
    arr.push(p)
    console.log(b)
}while(p!=0)

let are = [34,56,2,11,22,24]
let c = are.filter((x)=>{
    return x%10 == 0
})
console.log(c)



let now = [34,56,2,11,22,24]
let w = are.map((x)=>{
    return x*x
})
console.log(w)


let no = [34,56,2,11,22,24]
let u = are.reduce((x1,x2)=>{
    return x1*x2
})
console.log(u)




