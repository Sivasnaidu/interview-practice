/*var arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];

let result = [...new Set(arr)];
console.log(result)

var string ="India is my country"
let result1 = string.split('').reverse().join('').split(' ').reverse().join(' ');
console.log(result1)

function checkStringsAnagram() {
    var a="Army";
    var b="Mary";


}

const string1 = "priya ppiryyaa ";
const res = new Set(string1);
const res1 = res.toString(res)
console.log(res)



const debouceFunc = (func, delay) => {
    let timer;

    return function(...args) {
        const context = this;

        clearTimeout(()=> {
            func.apply(context, args)
        }, delay)
    }
}
// todays practice session 
var string = "hello how are you";
var result3= string.split('').reverse().join('');
console.log(result3);

//without inbuilt
const input5 = [1,2,3,4,5];
const result5 = input5.map((num)=> {
    return num * num;
})
console.log(result5)

const input6 = [1,-4,12,0,-3,29,-150];
const result6 = input6.filter((num)=> num>0).reduce((acc, curr)=> {
    
}) 

navigator.geolocation.getCurrentPosition(function(position){
    console.log(position)
}, function(){
alert('permission denied')
}) 


let counter = 0;
function incrementCounter(){
    counter++;
    updateCounterValue()
}
function updateCounterValue(){
    document.getElementById('counterValue').innerText = counter;
}

// vowels
function findVowels(str){
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length:0;
}
const inputString = "Pooja Hegde";
const number = findVowels(inputString);
console.log(number) */