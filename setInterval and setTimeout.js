alert("Hello")
const sum = (a,b) =>{
     console.log("Yes I am running" + a + b)
     a + b 
}

setTimeout(sum, 1000,1,2)

setInterval(function(){
    alert("setinterval")
},3000)


let a = setTimeout(function() {
    alert("I am inside of settimeout")
} ,2000)

clearTimeout(a)
console.log(a)
let b = prompt("Do you Want to settimeout ? ")
if("n" == b){
    clearTimeout(a)
}



