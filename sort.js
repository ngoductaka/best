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

function quicksort(A, lo, hi){
  if (lo < hi){
      let p = partition(A, lo, hi)
      quicksort(A, lo, p - 1)
      quicksort(A, p + 1, hi)
  }
}
function partition(A, lo, hi) {   
  let pivot = A[hi]
  let i = lo
  for(let j = lo; j< hi; j++){
    if( A[j] < pivot) {
      console.log(i,j);
      [A[i], A[j]] = [A[j], A[i]]
      i = i + 1
    }
  }
  [A[i], A[hi]] = [A[hi], A[i]];
  console.log(A);
  return i;
}
const a = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
const r = quicksort(a, 0, a.length-1)
console.log(a)
