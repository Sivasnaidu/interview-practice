/*console.log("Hello World!"); // here iare the commennts 

//{let a = 1}
//console.log(a)

var name = "Shiva";
let age = 23;
const occupation = "Lawyer";
console.log(name);
console.log(age);
let message= 'Hello' + ' and ' + 'good';
console.log(message);

let x = "7";
let y = 8;
// let z = number(x);
console.log(x + y)

/*  x == y, x!=y, x===y, x!== y , x>=y, x<=y, x<y 
logical operators  x&& y, x|| y typeOf */
/*let birds = ["Owl", "Eagle", "Parrot"];
console.log(birds[0]);

let dishes = ['biryani', ''] 
*/
/*var a;
let b;

console.log(a)
console.log(b)
const student = {
    name: "john",
    phone: 2323333,
    marks: 343,
};
console.log(student)
const  age = 18;
const age1 = (age> 10 && age < 20) ? "yes" : "No";
console.log(age1)

const num = [45,4,9,16,25];
let txt = "";
for (let x in num){
    txt += num[x]
}
for (let x of num) {

}
let name1= "Adamd\ Silva";
console.log(name1)
let name2 = name1.trim()
console.log(name2)

const array = ['banana', 'orange','grapes','mango','apple'];
let size = array.length;
let string = array.toString();
let joint = array.join(' ');
array.reverse('')
//console.log(size)
//console.log(joint)
//array.push('kiwi')
//console.log(array)

var sentance = "the quick brown fox jumped over";
var words = sentance.split();
console.log(words)
//array.splice(1,2);
console.log(array)

function sayHello(day,status){
    return "Hello " + this.name + " today is " + day + " and feel "+ status;
  }
  
  var obj = {name: "Piyush"};
  
 var obj1 =  sayHello.apply(obj,["tuesday", "good"]); // 'Hello Piyush today is tuesday'

  console.log(obj1)

  function callbck(){
    console.log('I am back')
  }
  function higherOrder(){

    console.log('I am higher')
  }
  higherOrder(callbck())

 // (function(){

 // })();

  function createCount(){
let count = 0;

function increment(){
    count++;
    console.log(count)
}
return {
    increment : increment,
}
  }
  const counter= createCount();
  counter.increment();

  function welcome(name){
    let greet = function 
  }
  const promise  = new Promise((resolve, reject )=> {
    setTimeout(()=> {
        resolve("Im prmise")
    }, 5000)
  }, (reject)=> {}) */


  /*getName() //hoisting 
  console.log(x)
  console.log(getName)
  var x = 7;

  function getName(){
    console.log("namste javascript")
  }
  console.log(y)
  let y = 10;
 
 function get(){
   
 }

 var x = 1;
 a();
 b();
 console.log(x);
 function a(){
  var x = 10;
  console.log(x)
 }
function b(){
  var x = 100;
  console.log(x);
}


function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();


function x1(){
  for ( var i = 0; i<= 5; i++){
    setTimeout(function (){
      console.log(i)
    }, i * 1000)
  }console.log("Namste")
}x1()

var b = function (){
  console.log("hello")
}
b(); 
function x(y){
  console.log("x");
  y()
}
x(function y(){
  console.log("y")
})

function callback(name){
  console.log("x " + name)
}
function outer(){
  let name = "hi"
callback(name)
}
outer(callback)

const arr = [2,4,6,8]
function double(x){
  return x*2;
}
const output = arr.map(double)
console.log(output)


const output1 = arr.map((x)=>  x.toString(2) )

console.log(output1)

const output2 = arr.filter((y) => x > 2 )
console.log(output2)


const output3 = arr.reduce(function(acc,curr) {

}) 

async function getData(){
  return ('namste')
}
const data = getData();

data.then((res) => console.log(res)) */

/*var names = ["david", "Mile", "Mike", "randy"];
var first = names.indexOf("Mile");
console.log(first)
var second = names.join();
var second1 = names.toString();
console.log(second1)

//currying 
Simple function*/ 

//console.log(add(1,2 ,3)); // 6

/* Curried Function 
const addCurry = (a) => { // takes one argument
  return (b)=>{                 //takes second argument
      return (c)=>{             //takes third argument
          return a+b+c
      }
  }
}
console.log(addCurry(1)(2)(3)); //6


const addcurr = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    }
  }
}
console.log(addcurr(1)(2)(3))

const sum =  function (a) {
return function (b) {
  if (b) {
    return (a+b)
  } else {
    return a;
  }
}
}
console.log(sum (1)(2)(3)(4))

function repeatString (input){
  const words = input.split(' ');
const wordOccurence = {};

for (const word of words){
    if (word in wordOccurence){
        wordOccurence[word] +=1;
        } else {
            wordOccurence[word] =1;
        }
}return wordOccurence;
}
const input = "India is my country and I love India";
const wordz = repeatString(input);
console.log(wordz);

const obj = {
  path1: {
    sub1: {
      sub2: "val1",
    }
  },
  path2: "val2",
  path3: {
    sub3: "val3"
  }
} 

fetch('	https://dummy.restapiexample.com/api/v1/employees')
.then(res => res.json())
.then(data => console.log(data))

function outer(outerVariable){
  return function inner(innerVariable){

    console.log('outer variable:' + outerVariable);
    console.log('inner Varable:' + innerVariable);
  }
}
const newFunction = outerVariable('outr')
innerVariable('inners')

Promise.resolve('hi').then (data=> console.log('data') ) */

/* objects 
var object = new object();
var object = {
  name: "jhn",
  age: 23

}*/
var employee = {firstname: "john", lastname: "jerry"}

function invite(greet){
                 console.log(this.firstname + "  "  + this.lastname + greet)
}
invite.apply(employee, ["come"])
invite.call (employee,"Go")
const invi = invite.bind(employee);
invi("Hello")

