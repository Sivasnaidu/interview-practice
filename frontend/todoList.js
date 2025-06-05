// // coding questions to understand concepts
// /*
// //q1
// function sayHi(){
//   console.log(name) // arun
//   //console.log(person) // reference error
//   var name = 'arun';
//   let person = 'eval'
// }
// sayHi()

// //q2
// for (var i = 0; i<3; i++){
//   setTimeout(()=> console.log(i),1)
// }
// for (let i=0; i<3; i++){
//   setTimeout(()=> console.log(i),1)
// }
// //q3
// const user = {
//   age : 18,
//   greet(){
//     return this.age;
//   }, 
//   person: ()=> 2* this.age ,
// }
// console.log(user.greet()); //18
// console.log(user.person());  // NaN   

// //q4
// const bird ={
//   size: small,
// }
// const mouse = {
//   name: "Mick",
//   small: true,
  
// }
// console.log(mouse.bird.name) //error
// console.log(mouse[bird.name]) // valid
 
// //q5
// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting); // Hello

// //q6

// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);

// //q7
// function bark() {
//   console.log('Woof!');
// }
// debugger;
// bark.animal = 'dog';

// //
// const cutPeice = (fruits) => {
//   return fruits* 4;
// }
// const fruitProcess = (apple, orange)=>{
//   const appleSlice = cutPeice(apple);
//   const juice = `juice ${appleSlice}`
//   return juice;
// }
// console.log(fruitProcess(2,3))


// let count = 0;
// console.log(count++);
// console.log(count)

// // q5
// var food = "apple";
// var goods =function (){
//   //console.log(food); //undefined  hoisting
//   let food = "mango";
//   console.log(food) //mango
// }
// goods()
//  var rebel = ()=> console.log("green") 
//  rebel()

//  function rival(person1, person2){
//   console.log(Array.from.arguments) // arguments acess only inside a function 
//   return `hello ${person1} is ${person2}`
//  }
//  rival("tim", "lina") 

//  //tricky
//  function weard(){
//   age =31;
//   return age // 31 memory leaks
//  }
//  weard()

//  const a = function (){
//   console.log('a', this)
//  const b = function (){
//   console.log('b',this)
//   const c = {
//     hi: function(){
//       console.log('c',this)
//     } 
    
//   }
//   c.hi()
//  } 
//  b()
//  }
//  a()

//  // call apply useful for borrowing methods // bind is useful for functions for lateron

//  const wizard = {
//   name: 'berlin',
//   health: 50,
//   heal(){
//     return this.health = 100;
//   }
//  }
//  const archer = {
//   name: 'randy',
//   health: 30,

//  }
//  wizard.heal.apply(archer);
//  console.log(archer) 

//  var nums = [1,2,3,4,5,6];
//  nums.push(8);
//  console.log(nums)


//  function reverseString(str){
//   return [...String(str)].reverse().join('')
//  }
//  console.log(reverseString("Hellorro"))
//  console.log(reverseString(234))


//  //cd
//  function snakeCase (str){
//   return str.split(' ').join('_')
//  }
//  console.log(snakeCase("Hi best job"))

//  // camelcase 
//  var string = "heLlo, woRlD!";
// string = string.replace( /([a-zA-Z])([a-zA-Z]+)/g, function(match, g1, g2) {
// return g1.toUpperCase() + g2.toLowerCase(); });
// console.log( string );

// // prac

// var empDetails = {
//   name: "Arua",
//   age: 26,
//   expertise: "Software Developer",
// };
// console.log(empDetails.name);

// var empDetailsCopy = empDetails;
// empDetailsCopy.name = "Afaq"
// console.log(empDetailsCopy.name)

// // deep 
// var deepCopy = {
//   name: empDetails.name,
//   age: empDetails.age,
//   expertise: empDetails.expertise,
// }
// deepCopy.name = "Afreen"
// console.log(deepCopy.name) 

// const obj = {name: "test"};

// function someThing(params){
//   params.name = "hello"
// }
// someThing(obj);
// console.log(obj)


// const objj = {
//   name: "Bill",
//   sings:()=> {
// console.log(this)
//   } 
// }
// objj.sings() 

// var num = [1,2,3,4,5,6,7,8];
// var even = num.every(isEven);
// if (even){
//   console.log("even iz")
// }
// else {
//   console.log("not even pa")
// }
// console.log(num.length)

// var arr= [1,2,3,3,3,6];
// var arrr = 23;
// console.log(Array.isArray(arrr));

// var sent = "the quick brow";
// var word  = sent.split(" ");
// console.log(word)

// var array = new Array(1,2,3,4);
// console.log(Array.isArray(array))


// for (let i = 0; i<5; i++){
//   function a(){
//     console.log("Hi")
//   }
// }

// var sent = ["the quick brow"];
// var word  = sent.join();
// console.log(word) */

// console.log("hello WOrld")

// function sum(a,b){
//   console.log(sum)
//   return a + b;
  
// }

// sum(2,3)

// // object create
// const obj = {
//   name: "arun",
//   age: 32,
// }
// var object = Object.create(null);

// function Person(name, age) {
//   this.name =name;
//   this.age = age;
// }
// const person = new Person ('alcce', 23);

// let animal ={
//   eats: true,
// }
// let rabbit ={
//   jumps: true,

// }
// rabbit._proto_ = animal;
// console.log(rabbit)
// rabbit.eats;


// function count(){
//   var x = 1;
//   if (!count.x ){
//     count.x = x;
//   } else {
//     count.x++;
//   } 
//   return count.x;
// }

// console.log(count(x))
// console.log(count(x))
// console.log(count(x))
// console.log(count(x))



// //rest operator 
// function bio (first, second, ... last){
//   return last;
// }
// bio("arra", "berra", "carra", "darra", "murra");
// console.log(last)


// const obj1 = {
//   name: "arun",
//   age: 30,

// }
// const copy = {...obj1};
// obj1.age.push(43);
// console.log(copy);
// console.log(obj1.name);
// console.log(copy.name)

// const obj2 = {
//   name: "ana",
//   age: 32,
// }
// const deep = JSON.parse(JSON.stringify(obj2))
// obj2.age.push(32);
// console.log(obj2.age)
// console.log(deep.age)


// const promise  = new Promise (
//   (resolve) => {
//     setTimeout(()=> {
//       resolve("Im in")
//     },2000)
//   },
//    (reject)=> {}
// )
// promise.then((value) => console.log(value))

// let p = new Promise ((resolve, reject)=> {
//   setTimeout(()=> {
//     resolve(10);
//   },2000)
// })
// p.then((result)=> {
//   console.log(result);
//   return result*2;
// })
// .then((result)=> {
//   console.log(result);
//   return result*3;
// })

// var emply = {name: "aras", age: 32};
// function greet(invite){
// console.log(invite + " "+ this.name )
// }
// greet.call(emply, "Hey")

// let company = {
//   name: "A",
//   pay: function(){
//     console.log("paying");
//   }
// }
// let worker = {
//   id: 1,
//   work: function (){
//     console.log("working")
//   }
// }
// worker.__proto__ = company;
// console.log(worker);
// worker.pay()

// const promise1 = new Promise ((resolve)=>{

//   setTimeout(()=> {
//     resolve('got it')
//   })
// }, (reject)=> {}
// )
// promise1.then((value)=> console.log(value))

// var x = 10;
// let z = 20;
// const y = 20;

// function cuter(){
//   var count = 1;
//   if (!count){
//     count;
//   } else{
//     count ++;
//   } return count 
// }
// console.log(cuter())
// console.log(cuter())
// console.log(cuter())


// const comp = {

// }

// const arr = [1,1,2,3,1,4]
// const count = {};
// for (const element of arr) {
//  if (count[element]) {
//    count[element] += 1;
//  } else {
//    count[element] = 1;
//  }
// }

