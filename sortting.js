function selectionSort(array) {
  // change code below this line
  for(let i = 0; i<array.length-1; i++){
    let min = array[i];
    let tem = i;
    for(let j = i+1; j < array.length; j++){
      if(array[j]<min) { min = array[j], tem = j}
    }
    [array[i],array[tem]] = [array[tem],array[i]]
  }
  // change code above this line
  return array;
}
var inp = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
selectionSort(inp);

function bubbleSort(array) {
  // change code below this line
  for(let i = 0; i<array.length-1; i++){
    for(let j = i+1; j < array.length; j++){
      if(array[i] > array[i]) {
        [array[i],array[j]] = [array[j],array[i]]
      }
    }
  }
  // change code above this line
  return array;
}
/////////////
function insertionSort(array) {
  // change code below this line
  for(let i = 1; i < array.length; i++) {
    for(let j = 0; j<=i; j++) {
      if( array[i]<array[j] ) {
        array.splice(j,0, array[i]);
        array.splice(i+1,1);
      }
    }
  }
  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
