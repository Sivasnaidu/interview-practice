// coding questions to understand concepts
/*
//q1
function sayHi(){
  console.log(name) // arun
  //console.log(person) // reference error
  var name = 'arun';
  let person = 'eval'
}
sayHi()

//q2
for (var i = 0; i<3; i++){
  setTimeout(()=> console.log(i),1)
}
for (let i=0; i<3; i++){
  setTimeout(()=> console.log(i),1)
}
//q3
const user = {
  age : 18,
  greet(){
    return this.age;
  }, 
  person: ()=> 2* this.age ,
}
console.log(user.greet()); //18
console.log(user.person());  // NaN   

//q4
const bird ={
  size: small,
}
const mouse = {
  name: "Mick",
  small: true,
  
}
console.log(mouse.bird.name) //error
console.log(mouse[bird.name]) // valid
 
//q5
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting); // Hello

//q6

let greeting;
greetign = {}; // Typo!
console.log(greetign);

//q7
function bark() {
  console.log('Woof!');
}
debugger;
bark.animal = 'dog';

//
const cutPeice = (fruits) => {
  return fruits* 4;
}
const fruitProcess = (apple, orange)=>{
  const appleSlice = cutPeice(apple);
  const juice = `juice ${appleSlice}`
  return juice;
}
console.log(fruitProcess(2,3))


let count = 0;
console.log(count++);
console.log(count)

// q5
var food = "apple";
var goods =function (){
  //console.log(food); //undefined  hoisting
  let food = "mango";
  console.log(food) //mango
}
goods()
 var rebel = ()=> console.log("green") 
 rebel()

 function rival(person1, person2){
  console.log(Array.from.arguments) // arguments acess only inside a function 
  return `hello ${person1} is ${person2}`
 }
 rival("tim", "lina") 

 //tricky
 function weard(){
  age =31;
  return age // 31 memory leaks
 }
 weard()

 const a = function (){
  console.log('a', this)
 const b = function (){
  console.log('b',this)
  const c = {
    hi: function(){
      console.log('c',this)
    } 
    
  }
  c.hi()
 } 
 b()
 }
 a()

 // call apply useful for borrowing methods // bind is useful for functions for lateron

 const wizard = {
  name: 'berlin',
  health: 50,
  heal(){
    return this.health = 100;
  }
 }
 const archer = {
  name: 'randy',
  health: 30,

 }
 wizard.heal.apply(archer);
 console.log(archer) 

 var nums = [1,2,3,4,5,6];
 nums.push(8);
 console.log(nums)


 function reverseString(str){
  return [...String(str)].reverse().join('')
 }
 console.log(reverseString("Hellorro"))
 console.log(reverseString(234))


 //cd
 function snakeCase (str){
  return str.split(' ').join('_')
 }
 console.log(snakeCase("Hi best job"))

 // camelcase 
 var string = "heLlo, woRlD!";
string = string.replace( /([a-zA-Z])([a-zA-Z]+)/g, function(match, g1, g2) {
return g1.toUpperCase() + g2.toLowerCase(); });
console.log( string );

// prac

var empDetails = {
  name: "Arua",
  age: 26,
  expertise: "Software Developer",
};
console.log(empDetails.name);

var empDetailsCopy = empDetails;
empDetailsCopy.name = "Afaq"
console.log(empDetailsCopy.name)

// deep 
var deepCopy = {
  name: empDetails.name,
  age: empDetails.age,
  expertise: empDetails.expertise,
}
deepCopy.name = "Afreen"
console.log(deepCopy.name) 

const obj = {name: "test"};

function someThing(params){
  params.name = "hello"
}
someThing(obj);
console.log(obj)


const objj = {
  name: "Bill",
  sings:()=> {
console.log(this)
  } 
}
objj.sings() */

