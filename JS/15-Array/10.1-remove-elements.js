//Remove the element;
//With the help of "POP" method you can easily remove the element at the "END" of an array;

let names = ["Om","Hari","Ram","Prasad","Krishna"];
console.log(names); //[ 'Om', 'Hari', 'Ram', 'Prasad', 'Krishna' ]
console.log(names.length); //5

names.pop(); //you don't have to provide any value in the brackets, because jab bhi hum pop method use karenge toh yeh method hamesha array ke last element ko hi remove karega.
console.log(names); //[ 'Om', 'Hari', 'Ram', 'Prasad' ]
console.log(names.length); // intially the length was 5, but after remove an element to it, the lenght is 4.
