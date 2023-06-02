let marks = {
    harry : 90,
    ayush : 78,
    lovish : 56,
    Monika : 89

}

for(let i=0; i<Object.keys(marks).length;i++){
    console.log("the marks of " + Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
}

for (let key in marks){
    console.log("The marks of " + key + "are" + marks[key])
    // console.log("the marks of " + Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])

}


let cn = 43
let i 
while (i != cn) {
    i = prompt("Enter a number")
    console.log("Try again")
}
console.log("you have enter a correct number ")


const mean = (a,b,c,d)=> {
    return (a+b+c+d)/4
}

console.log(mean(4,5,6,7))
