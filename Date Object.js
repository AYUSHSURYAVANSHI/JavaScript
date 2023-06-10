// let x = "2021-01-25"
// let y = "2021-01-25"

// let x = new Date(2004,01,10,10,23,34);
x.getTime();
x.setSeconds(2);

console.log(x)


let x = new Date("October 13, 2015 11: 23")
let y = new Date("October 13, 2015 11: 23")

y.setDate(x.getDate() + 50);
console.log(y);
console.log(x);


if(x > y){
    console.log("X is past date")

}
else{
    console.log("X is same date")
}