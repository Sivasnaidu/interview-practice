// let arr = [2,4,3,5,7,4];
// console.log(arr[4]);

// //array of strings
// let arrString = ["stringer", "Sachin", "Deepika"];
// let comm = arrString[0]
// console.log(comm);

// let obj = {
//     a: 1,
//     b:2,
    

// } // key value pair

// console.log(obj.a);


// function smallestNum(arr){
//     let smallest = arr[0];
//     for(let i=0; i< arr.length; i++){
//       if(arr[i]< smallest){
//         smallest= arr[i]
//       }
//     }
//     return smallest;
//   }
//   let arr = [10,4,6,2,8,5];
//   let result = smallestNum(arr);
//   console.log(result)
  
//   function smallesNum(arr) {
//     if (arr.length === 0) {
//       return undefined; // Handle empty array case
//     }
  
//     const sortedArr= [...arr].sort((a , b)=> a - b);
//     return sortedArr[0]; // The smallest number is the first element
//   }
  
//   let sortedArr = [2, 4, 5, 6, 8, 10];
//   let result1 = smallesNum(sortedArr);
//   console.log(result1); // Output: 2
function clicker(){
    let count = 0;
    document.getElementById('resolveButton').addEventListener('click', ()=> {
        console.log("clicked ", ++ count)
    })
}
clicker();



//polyfill
Array.prototype.myMap = function (callBackFn){
    var arr=[];
    for(let i=0; i<this.length; i++){
        arr.push(callBackFn(this[i],i,this))
    }
    
return arr;
}



  Array.prototype.myFilter =  function(callbackFn){
 var arr= [];
 for (var i=0; i< this.length; i++){
    if(callbackFn(this[i],i,this)){
        arr.push(this[i])
    }
   
 }
 return arr;
  }
  var arr= [2,3,4,5,6,7];
  var result = arr.myFilter(function (fil){
    return fil > 4;
  });
  console.log(result)
