var electionVotes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

function removeThirdElementFromArray(arr){
var newArr = [];
  for (var x = 0; x < arr.length; x++){
    if(newArr % 3 === 0){
      newArr.splice();
    }
  }
return newArr;
}
console.log(removeThirdElementFromArray(electionVotes));















// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
