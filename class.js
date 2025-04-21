// Class is a template for creating objects.
// Classes and Objects are the foundation of JavaScript programming.

// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1; //this keyword refers to the current object in the class.
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassName("arg1","arg2"); // Creating an object of the class
// console.log(obj.prop1); // Accessing the properties of the object
// console.log(obj.prop2); // Accessing the properties of the object
// class Dog{
//     constructor(dogName,weight,colour,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.colour=colour;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("Dog1",20,"Black","Labrador"); 
// console.log(dog.dogName);
// console.log(dog.weight);
// console.log(dog.colour);
// console.log(dog.breed); 


//Classes:- Classes are a template for creating objects. They encapsulate data with code to work on that data.
// Constructor:- The constructor method is a special method for creating and initializing an object created within a class. It is called automatically when a new object is created.
// class Person{
//     constructor(firstName,lastName="doe"){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// }
// let p=new Person("John","Doe"); 
// console.log("Hi",p.firstName); 
// let p1=new Person("John"); 
// console.log("Hi",p1.firstName,p1.lastName);
// let p2=new Person("John");
// console.log("Hi",p2.firstName,p2.lastName); // This will log "Hi John doe"

//Methods:- Methods are functions that belong to an object. They are defined inside a class and can be called on an object of that class. Methods can access and modify the properties of the object they belong to.
// class Person{
//     constructor(firstName,lastName="doe"){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
//     // greet(){
//     //     console.log("Hi",this.firstName); // this refers to the current object
//     // }
//     greet(){
//             console.log("Hi"); // this refers to the current object
//         }
//     compliment(name,object){
//         return "That is a wonderful "+object+","+name;
//     }
// }
// let p=new Person("John","Doe");
// let x=p.greet(); 
// console.log(x); 
// let compliment=p.compliment("John","Dog");
// console.log(compliment); 

//Properties:- Properties are variables that belong to an object. They are defined inside a class and can be accessed and modified using the object of that class. Properties can be used to store data related to the object.

// class Person{
//     #firstName; // Private property
//     #lastName;
//     constructor(firstName,lastName="doe"){
//         this.#firstName=firstName; 
//         this.#lastName=lastName; 
//     }

// }
// let p=new Person("John","Doe");
// console.log(p.firstName); // This will log "undefined" because firstName is a private property and cannot be accessed outside the class.
// class Person{
//     #firstName; // Private property
//     #lastName; // Private property
//     constructor(firstName,lastName){
//      if(firstName.startswith("M")){
//         this.#firstName=firstName;
//     }
//     else{
//         this.#firstName="M"+firstName;
//     }
//         this.#lastName=lastName;
//     }
// }
// let p=new Person("John","Doe");

// Getters and Setters:- Getters and setters are special methods that allow you to access and modify the properties of an object. Getters are used to get the value of a property, while setters are used to set the value of a property. They are defined using the get and set keywords, respectively.
// class Person{
//     #firstName; 
//     #lastName;
//     constructor(firstName,lastName){
//         this.#firstName=firstName;
//         this.#lastName=lastName;
//     }
//     get firstName(){ 
//         return this.#firstName;
//     }
//     set firstName(firstName){ 
//         this.#firstName=firstName;
//     }
//     get lastName(){ 
//         return this.#lastName;
//     }
//     set lastName(lastName){
//         this.#lastName=lastName;
//     }
// }
// let p=new Person("John","Doe");
// console.log(p.firstName); 
// console.log(p.firstName="Mickey");
// console.log(p.firstName);


//Inheritance:- Inheritance is a way to create a new class that is based on an existing class. The new class inherits the properties and methods of the existing class, allowing you to reuse code and create a hierarchy of classes. Inheritance is achieved using the extends keyword.
// class Vehicle{
//     constructor(colour,currentSpeed,maxSpeed){
//         this.colour=colour;
//         this.currentSpeed=currentSpeed;
//         this.maxSpeed=maxSpeed;
//     }
//     move(){
//         console.log("Moving at speed of",this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed+=amount;
//     }
// }
// class MotorCycle extends Vehicle{
//     constructor(colour,currentSpeed,maxSpeed,fuel){
//         super(colour,currentSpeed,maxSpeed); // Call the constructor of the parent class
//         this.fuel=fuel; // Add a new property specific to the child class
//     }
//     doWheelie(){
//         console.log("Doing a wheelie!");
//     }
// }
// let motor= new MotorCycle("Red",50,100,"Petrol"); // Create an object of the child class
// console.log(motor.colour); // Access the property of the parent class
// motor.accelerate(50); // Call the method of the parent class
// motor.move(); 

//Prototype:- The prototype is an object that is associated with every function and object in JavaScript. It allows you to add properties and methods to an object after it has been created. The prototype is used to implement inheritance in JavaScript. When you create a new object, it inherits properties and methods from its prototype. You can also add properties and methods to the prototype of an object, which will be available to all instances of that object.