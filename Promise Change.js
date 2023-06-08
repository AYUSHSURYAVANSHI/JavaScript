let p = new Promise((resolve, reject)=>{
       console.log("Promise is pending")
       setTimeout(()=>{
            console.log("I am promise and I am resolved")
            resolve(true)
              reject(new Error("I am error"))
       },5000)
})


let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
           console.log("I am promise and I am rejected")
           reject(new Error("I am error"))
    },5000)
})
p1.then((value)=>{
    console.log(value)
})
p2.catch((error)=>{
console.log(value)
})



console.log(p1,p2)

