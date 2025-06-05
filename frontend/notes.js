// // gives method acess to their objects
// // execute same code for multiple opjects


// a()
// b()
// var x = 40;
// console.log(x);

// function a() {
//     let x = 10;
//     console.log(x);
    
// }
// function b() {
//     let x = 20;
//     console.log(x);
    
// }

function createPromise(){
    return new Promise((resolve, reject)=> {
        const button = document.getElementById('resolveButton');

        button.addEventListener('click', ()=> {
            resolve('clicked success');
        })
    })
}
const myPromise = createPromise();
myPromise.then((value)=> console.log(value))


function outer(){
    var num = 30;
     function inner(name){
      console.log(num, name)
    }
    return inner;
  }
  outer()("Gopi")
