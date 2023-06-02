let age = prompt("Enter your age")
age = Number.parseInt(age)
let runAgain = true
while (runAgain){

    // const canDrive = (age)=>{
    //     return age>=18?true:false


    if (age < 0){
        console.error("Please enter a valid age")
        break;
    }

    if(canDrive(age)){
        alert("Yes you can Drive")
}

else{
    alert("Yes You can not Drive")

}
 runAgain = confirm("Do you want to play again")
}

if (number > 4){
    location.href = "https://google.com"
}




let color = prompt("Enter the page background color")
document.body.style.background = color



