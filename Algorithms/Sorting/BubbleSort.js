// About bubble sort:
// compare each pair of adjacent items and swap them if they are in the wrong order
// the pass through the list is repeated until no swaps are needed
// Time complexity: O(n^2)

// Bubble sort implementation
function bubbleSort(arr) {
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // loop through the array again
        for (let j = 0; j < arr.length; j++) {
            // compare the current element to the next element
            if (arr[j] > arr[j + 1]) {
                // swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // return the sorted array
    return arr;
}

// Test cases
console.log(bubbleSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(bubbleSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
