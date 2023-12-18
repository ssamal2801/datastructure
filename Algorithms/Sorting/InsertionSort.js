// Why the name Insertion Sort?
// Because it inserts each element into its proper place in the sorted list.
// This sorted list is generally the left portion of the selected element.

const insertionSort = (arr) => {
  const swap = (sourceArr, smallerElementIndex, largerElementIndex) =>{
    [sourceArr[smallerElementIndex], sourceArr[largerElementIndex]] = [sourceArr[largerElementIndex], sourceArr[smallerElementIndex]]
  }
  // Ascending order:
  // Select an element starting from left of the array.
  for(let comparingIndex = 1; comparingIndex < arr.length; comparingIndex++){
    for(let prevIndex = 0; prevIndex < comparingIndex; prevIndex++){
      // Compare it to each element to left of it, 
      // if the element is greater, insert current element just before it.
      if(arr[comparingIndex] < arr[prevIndex]){
        swap(arr, comparingIndex, prevIndex);
      }
    }
  }
  return arr;
};

// Test cases
console.log(insertionSort([9, 2, 3, 4, 5])); // [2, 3, 4, 5, 9]
console.log(insertionSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
// 5, 4 / i = 1 => 4 5 3 2 1
// 5, 3 / i = 2 => 4 3 5 2 1 =>  