let x = function(e){
    console.log(e)
    console.log(e,event.clientX,event.clientY)
    // alert("Hello World1!")
}
let y = function(e){
    // alert("Hello World1!")
}

let z = function(e){}
btn.addEventkistener('click',x)


btn.addEventListener('click',y)
let a = prompt("What is Your favorite number?");


if(a ==2){
    btn.removeEvtListner('click',y)
    }
