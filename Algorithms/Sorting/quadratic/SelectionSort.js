// Why the name, selection sort? Because it selects a value and compares
// it to the rest of the values in the array, then swaps it if it finds a smaller value.

// Store the first element as the smallest value you've seen so far.
// compare this item to the next item in the array until you find a smaller number.
// if a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// if the "minimum" is not the value (index) you initially began with, swap the two values.

// Time complexity: O(n^2)
// Space complexity: O(1)

const selectionSort = (arr) => {
    const swap = (arr, idx1, idx2) => {
        // swap the elements
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let index = 0; index < arr.length; index++) {
        let lowest = index;
        for (
            let comparingIndex = index + 1;
            comparingIndex < arr.length;
            comparingIndex++
        ) {
            if (arr[comparingIndex] < arr[lowest]) {
                lowest = comparingIndex;
            }
        }

        if (index !== lowest) {
            swap(arr, index, lowest);
        }
    }

    return arr;
};

// Test cases
console.log(selectionSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
