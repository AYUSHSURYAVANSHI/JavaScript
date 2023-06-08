let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
         console.log("resolved after 2 seconds")
         resolve(56)
    },5000)
})



p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((Resolve, reject)=>{
         setTimeout(() =>{resolve("Promise 2")},2000)
        })
    return p2
}).then((value)=> {
    console.log("we are done")
})



