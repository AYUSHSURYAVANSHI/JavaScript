let Promise = new Promise(function(resolve, reject){
    alert(" I am an alert in promise")
    resolve(56)
})

console.log("Hello")
setTimeout(function(){
    console.log("Hello two in 2 Seconds ")
},2000)

console.log("My name is " + "Hello Three")



console.log(Promise)