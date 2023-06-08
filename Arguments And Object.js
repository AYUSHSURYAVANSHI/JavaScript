function add(num1,num2){
    documnet.write(num1 + num2);
}

add(2,4)
add(3,5)




function add(){

    if(arguments.length == 0){
        console.log("No Arguments passed !");

    }
    else{
        let sum = 0;
        for(let i = 0; i < arguments.length; i++){
            sum = sum + arguments[i];
        }
        console.log(sum);

    }


}


let addition = add;

addition(2,34,5);
add(2,4,5)
