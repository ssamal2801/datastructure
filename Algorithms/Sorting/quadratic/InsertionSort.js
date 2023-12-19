// Why the name Insertion Sort?
// Because it inserts each element into its proper place in the sorted list.
// This sorted list is generally the left portion of the selected element.

// Time complexity of insertionSort is O(n^2) in worst case.
// Space complexity of insertionSort is O(1) in all cases.

const insertionSort = (arr) => {
    // Ascending order:
    // Select an element starting from left of the array.
    for (
        let comparingIndex = 1;
        comparingIndex < arr.length;
        comparingIndex++
    ) {
        var currentVal = arr[comparingIndex];
        // Compare it to each element to left of it,
        // if the element is greater, insert current element just before it.
        for (
            var prevIndex = comparingIndex - 1;
            prevIndex >= 0 && currentVal < arr[prevIndex];
            prevIndex--
        ) {
            arr[prevIndex + 1] = arr[prevIndex];
        }
        arr[prevIndex + 1] = currentVal;
    }
    return arr;
};

// Test cases
console.log(insertionSort([9, 2, 3, 4, 5])); // [2, 3, 4, 5, 9]
console.log(insertionSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
// 5, 4 / i = 1 => 4 5 3 2 1
// 5, 3 / i = 2 => 4 3 5 2 1 =>
