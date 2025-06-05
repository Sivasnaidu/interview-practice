// var num1 = 10;
// console.log(num1)
// // document.write(num1)
// let num2;
// num2 = 100
// console.log(num2)
// const num3 = 200;
// console.log(num3);

// //hoisting 

// console.log(num); // undefied
// var num = 2;

// // console.log(x); //referene error
// // let x = 12;

// //block scope
// {
//     let x1 ;
//     console.log(typeof(x1)); // 10
// }
// // console.log(x1); //reference error
// //data types 
// var x = NaN;
// console.log(typeof([]));
// console.log(typeof(null));
// console.log((`how are you ${num *20} age`));


// // arthamatic operator 
// // var a = 2;
// // // console.log(a++); post increment 
// // document.write(++a); // pre increment 

// let age = 23;
// console.log((age = 43 ? true : false));

// // if else statement 

// // var enter  = prompt('enter number');

// // if (enter<= 0){
// //     alert('not a postive number')
// // } else {
// //     alert('positive number is' +'' + enter)
// // }

// // let marks = prompt('Enter marks');
// // var grade;
// // if(marks >= 90){
// //    grade  = 'S'
// // }
// // else if(marks < 90 && marks >60) {
// // grade = 'A'
// // }
// // else {
// //     grade = "E"
// // }
// document.write( false * 44)
function number(){
let sum = 0;
for (let i =0; i<=10; i++){
sum += i;
}
return sum; 
}
document.write(number())

// array
let numbers = [1,3,5,6,7];
let sum = 0;
for(let i =0; i< numbers.length; i++){
sum += numbers[i]
}
console.log(sum)


function factorial(num){
    let prod = 1;
    for (let i = num; i>= 1; --i ){
        prod *= i
    }
    return prod;
}
console.log(factorial(5));

// sum of digits

// function sumOfDigits(num){
//     if(num < 0){
//         console.log("numbers are ngeative")
//     }
// const inputString = num.toString().split('');
// let sum = 0;
// inputString.forEach(item => 
//     sum += parseInt(item)
// )
// return sum

// }
// function sumOfArray(arr){
//     return arr.map((num)=> sumOfDigits(num))
// }
// console.log(sumOfArray([32,45,65]));
//////vowels finding


