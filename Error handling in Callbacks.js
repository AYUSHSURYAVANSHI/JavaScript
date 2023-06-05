// // Syncronous Programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + "years old and has" + c + "Favorite color.");


// Asyncronous Programming 
console.log("start")
setTimeout(function() {
   console.log("Hey i am good");
}, 3000)

console.log("End")


// callback
function loadScript(url, callback){
    var script = document.createElement("script");
    script.src = src; 

    script.onload = funtion()
       console.log("Loaded script with SRC: " + src)
       callback(new Error("Src got some Error"))
    
    document.body.appendChild(script);
}

function hello(error,src){
    if(error){
        console.log(error)
        return 
    }
    alert('Hello World')
}


function GoodMorning(){
    alert('Hello World Good Morning')
}
// loadScript(" <script src="https:cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")

