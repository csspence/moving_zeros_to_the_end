/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

const moveZeros = (arr) => {
  const outputArr = [];
  const zerosArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== 0) {
      outputArr.push(arr[i]);
    } else {
      zerosArr.push(arr[i]);
    }
  }
  if(outputArr.length > 0) {
    for(let j = 0; j < zerosArr.length; j++) {
      outputArr.push(zerosArr[j]);
    }
  }

  return outputArr;
}