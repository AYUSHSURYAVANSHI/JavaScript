// let x = Math.random() * (25 - 10);

// console.log(x)



function getRandom(min, max){
    let x = Math.floor(Math.random()* (max - min)) + min;
}


console.log(getRandom(10,20));

