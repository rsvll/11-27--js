
//=======first example for loop========
// var test = ['Bob', 'Bob', 'Jim', 'Steve', 'Sarah', 'Sarah'];
// var test2 = ['Jim', 'Jose', ' Jackson', 'James', 'Jill', 'Jill']
//
// function removeDuplicatesFromArray(arr) {
//   var newArr = [];
//   for (var x = 0; x < arr.length; x++){
//     var test = true;
//     for (var i = 0; i < newArr.length; i++){
//       if (arr[x] === newArr[i]){
//         test = false;
//       }
//     }
//     if (test === true){
//       newArr.push(arr[x]);
//     }
//   }
//   return newArr;
// }
//
// console.log(removeDuplicatesFromArray(test));
//

//============== example 2 ==================
var test = ['Bob', 'Bob', 'Jim', 'Steve', 'Sarah', 'Sarah'];
var test2 = ['Jim', 'Jose', ' Jackson', 'James', 'Jill', 'Jill']

function removeDuplicatesFromArray(arr) {
 var newArr =[];
 for (var x = 0; x < arr.length; x++){
   if(newArr.includes(arr[x]) === false) {
     newArr.push(arr[x]);
   }
 }
 return newArr;
}

console.log(removeDuplicatesFromArray(test));

//============== example 3 ==============

// var test = ['Bob', 'Bob', 'Jim', 'Steve', 'Sarah', 'Sarah'];
// var test2 = ['Jim', 'Jose', ' Jackson', 'James', 'Jill', 'Jill']
//
// function removeDuplicatesFromArray(arr) {
//  var newArr = new Set(arr);
//  return [...newArr];
// }
//
// console.log(removeDuplicatesFromArray(test2));
