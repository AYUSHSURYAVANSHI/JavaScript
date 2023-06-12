let person = {
    'first Name': 'vishwajeet',
    'last Name': 'kumar'
 };

 console.log(person['last Name'])
 person.age = 25;
 person.firstName = 'Jeet';
 console.log(person)



 delete person.lastName;

 console.log('height' in person);



 for(let key in person){
    console.log(key +" " +person[key]);
}





 