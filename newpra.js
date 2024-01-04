// object constructor

const intUser = new  Object();

console.log(intUser);

// objects in js

/*const mySim = Symbol("keyz")
const user = {
    name: "harry",
    age: 32,
    email: "harry@google.com",
    "game": "football",
    [mySim]: "this is symbol",
    location: "bangalore",
    loggedIn: true
}
user.email = "hurry@amazon.com";
//console.log(user.name);
//console.log(user.email);
//console.log(user["email"]);
//console.log(user["game"]);
//console.log(user[mySim]);

user.greeting = function (){
    console.log("hello function")
}
console.log(user.greeting());
user.greeting2 = function (){
    console.log(`hello js user, ${this.age}`)
}
console.log(user.greeting2()); 

const regularUser = {
    email: "dragon@ss.com",
    fullname: {
        userfullname: {
            firstname: "harry",
            lastname: "puttar",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"};
const obj2 = {3:"c", 4:"d"};
const obj3 = Object.assign({},obj1, obj2) // object methods
console.log(obj3);

const obj = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "e@gmail.com"
    },
    {
        id: 3,
        email: "g@gmail.com"
    },
]
obj[1].email;
console.log(Object.keys)

// geting JSON data from api


const user = {
    name: "harry",
    age: 32,
    email: "harry@google.com",
    "game": "football",
    
    location: "bangalore",
    loggedIn: true
}
const {email: mail} = user;
console.log(mail)

//DOM

const parent = document.getElementById('cata');

parent.addEventListener('click', e =>{
    console.log("Clicked it")
})


// diffrent ways to write a object
const object= {
    name: "arun",
    age: 21,
}

let objec = Object.create(null);

function person(name){
    this.name = name;
    this.age = 21;
}
var obj = new person('sudh');

class person {
    constructor(name){
        this.name = name;
    }
}

var ojb = new person('sudhi')


const employee = {name: "arun", age: 21};

function invite (greet){
    console.log(greet + " "+this.name + this.age)
}
invite.call(employee, "hello");
invite.apply(employee, ["hell"]);
const invi = invite.bind(employee);
invi("helo")

let array = [1,2,3,4,5]
let arr = array.slice(2,4);
console.log(arr) 


//  curry
const curry = (a) => (b) => (c) => a + b +c;
console.log(curry (1)(2)(3)) */

const sum = function (a){
    return function (b){
        if(b){
            return a + b
        }
        else {
            return a
        }

    }
}
let sumo = sum (1)(2)(3)(4);
console.log(sumo)