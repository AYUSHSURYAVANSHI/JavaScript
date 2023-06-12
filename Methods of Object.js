let person = {
    'first Name': 'vishwajeet',
    'last Name': 'kumar'
 };


 person.age = 25;

 person.sayHello = function(){
    console.log("Hello !")

 }

 function greet(){
    console.log("Hello !")
 }

person.sayHello = greet;

person.sayHello();



