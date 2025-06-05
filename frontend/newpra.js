// // // object constructor

// // const intUser = new Object();

// // console.log(intUser);

// // // objects in js

// // /*const mySim = Symbol("keyz")
// // const user = {
// //     name: "harry",
// //     age: 32,
// //     email: "harry@google.com",
// //     "game": "football",
// //     [mySim]: "this is symbol",
// //     location: "bangalore",
// //     loggedIn: true
// // }
// // user.email = "hurry@amazon.com";
// // //console.log(user.name);
// // //console.log(user.email);
// // //console.log(user["email"]);
// // //console.log(user["game"]);
// // //console.log(user[mySim]);

// // user.greeting = function (){
// //     console.log("hello function")
// // }
// // console.log(user.greeting());
// // user.greeting2 = function (){
// //     console.log(`hello js user, ${this.age}`)
// // }
// // console.log(user.greeting2());

// // const regularUser = {
// //     email: "dragon@ss.com",
// //     fullname: {
// //         userfullname: {
// //             firstname: "harry",
// //             lastname: "puttar",
// //         }
// //     }
// // }
// // console.log(regularUser.fullname.userfullname.firstname);

// // const obj1 = {1:"a", 2: "b"};
// // const obj2 = {3:"c", 4:"d"};
// // const obj3 = Object.assign({},obj1, obj2) // object methods
// // console.log(obj3);

// // const obj = [
// //     {
// //         id: 1,
// //         email: "s@gmail.com"
// //     },
// //     {
// //         id: 2,
// //         email: "e@gmail.com"
// //     },
// //     {
// //         id: 3,
// //         email: "g@gmail.com"
// //     },
// // ]
// // obj[1].email;
// // console.log(Object.keys)

// // // geting JSON data from api

// // const user = {
// //     name: "harry",
// //     age: 32,
// //     email: "harry@google.com",
// //     "game": "football",

// //     location: "bangalore",
// //     loggedIn: true
// // }
// // const {email: mail} = user;
// // console.log(mail)

// // //DOM

// // const parent = document.getElementById('cata');

// // parent.addEventListener('click', e =>{
// //     console.log("Clicked it")
// // })

// // // diffrent ways to write a object
// // const object= {
// //     name: "arun",
// //     age: 21,
// // }

// // let objec = Object.create(null);

// // function person(name){
// //     this.name = name;
// //     this.age = 21;
// // }
// // var obj = new person('sudh');

// // class person {
// //     constructor(name){
// //         this.name = name;
// //     }
// // }

// // var ojb = new person('sudhi')

// // const employee = {name: "arun", age: 21};

// // function invite (greet){
// //     console.log(greet + " "+this.name + this.age)
// // }
// // invite.call(employee, "hello");
// // invite.apply(employee, ["hell"]);
// // const invi = invite.bind(employee);
// // invi("helo")

// // let array = [1,2,3,4,5]
// // let arr = array.slice(2,4);
// // console.log(arr)

// // //  curry
// // const curry = (a) => (b) => (c) => a + b +c;
// // console.log(curry (1)(2)(3))

// // const sum = function (a){
// //     return function (b){
// //         if(b){
// //             return a + b
// //         }
// //         else {
// //             return a
// //         }

// //     }
// // }
// // let sumo = sum (1)(2)(3)(4);
// // console.log(sumo)

// // (function(){

// // })();

// // function createCounter(){
// //     let count = 0;
// //     return function(){
// //         return count ++;
// //     }

// // }
// // const counter = createCounter();
// // console.log(counter())

// // //promise
// // const promise = new Promise ((resolve, reject)=> {
// //     setTimeout(()=>
// //     resolve("Hi"),5000)
// // })
// // promise.then ((value)=> console.log(value))

// // //
// // new Promise (function (resolve, reject){
// //     setTimeout(()=> resolve(1),1000)
// // })
// // .then(function(result){

// // })

// // var regexp = new RegExp("\\w+");
// // console.log(regexp)

// // const target = {a:1,b:2};
// // const source= {c:3,d:4};
// // const targetSource = Object.assign(target,source);
// // console.log(targetSource) */

// // // for in for off loop
// // // split
// // function multiply(arr) {
// //   return arr
// //     .map((e) => e * 2)
// //     .filter((e) => e >= 48)
// //     .reduce((acc, curr) => acc + curr);
// // }
// // let array = [22, 23, 24, 25, 26];
// // const arrays = multiply(array);
// // //console.log(arrays);

// // // function addition(arr){
// // // return  arr.reduce((acc,curr)=> acc + curr)
// // // }

// // // const array1 = addition(array);
// // // console.log(array1);
// // let arra = [22, 23, 24, "A", 26];
// // function fun(arra) {
// //   let arr = [];
// //   for (let i = 0; i < arra.length; i++) {
// //     if (typeof arra[i] !== "string") {
// //       arr.push(arra[i]);
// //     }
// //   }
// //   return arr;
// // }
// // //console.log(fun(arra))
// // const art = arra[2];
// // //console.log(art);

// // //console.log(arra.filter((e)=> typeof(e)!== "string"))

// // const name = "my name is Shiva ";

// // //console.log(name.split(" ").reverse().join(' '));

// // const obj = {
// //   name: "siva",
// //   lastName: "naidu",
// //   //     arun: function(){
// //   // console.log(this.name, this.lastName)
// //   //     }
// // };

// // //console.log(obj.arun());

// // function printValue( locate) {
// //   console.log(`${this.name} ${this.lastName} ${locate}`);
// // }

// // printValue.call(obj, "delhi");

// // // const a1= [1,2,3,4]
// // const a2=[5,6,7];

// // const a3 = a1.concat(a2);
// // //console.log(a3);

// // const obj1 = {
// //     name: "siva",
// //     lastName: "naidu",
// // }

// // const obj2 = JSON.parse(JSON.stringify(obj1));

// // obj1.name = "Aditya";

// // //console.log(obj1,obj2)
// // function fun1 (){

// // }

// // let a4 = [1,2,3,4,3];

// // function a5(a1){
// //     let a = [];
// //     for (let i =0; i< a1.length; i++){

// //         if(!a.includes(a1[i] )){
// //             a.push(a1[i])
// //         }
// //     }
// //     return a;

// // }
// // console.log(a5(a1))

// // //indexOf use method

// // let a6 = [2,5,6,3,4,6,8];

// const bulb = (document.querySelector("#bulb").innerHTML = " Good girl");

// function outer() {
//   var a = 10;
//   function inner() {
//     var c = 100;
//     function abc() {
//       console.log(a, c);
//     }
//     return abc;
//   }
//   return inner;
// }
// outer()()();
// document.getElementById('clickMe').addEventListener('click', function(){
//     console.log('clicked')
// })


