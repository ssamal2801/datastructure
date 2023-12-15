//Selection sort is where we’ll visit each value, then compare it to all subsequent values in order to find the smallest. When we’ve found the smallest, we’ll just swap it with the current value.


const sort = (arr) => {
  for(let index = 0; index<arr.length; index++){
    for(let j = 0; j<arr.length; j++){
      if(arr[j]>arr[index]){
        //swap
        let temp = arr[j];
        arr[j] = arr[index];
        arr[index]= temp;
      }
    }
  }
  return arr;
}

console.log(sort([3,1,6,8,0]));