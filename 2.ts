// Single-line comment: This is a simple variable
let favoriteFruit: string = "Mango";
console.log("My favorite fruit is " + favoriteFruit);

/*
Multi-line comment:
Function to double a number
*/
function double(value: number): number {
    return value * 2;
}
console.log(double(7));

// Class example
class Person {
    sayHello() {
        console.log("Hello from Person class!");
    }
}

const person = new Person();
person.sayHello();
