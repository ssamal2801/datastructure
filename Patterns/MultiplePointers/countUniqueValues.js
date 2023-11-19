//* Question:
//* Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
//* There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let leftPointer = 0;
    let rightPointer = 1;
    let uniqueCount = 1;
    const terminationPoint = arr.length;

    while (rightPointer < terminationPoint) {
        let leftElement = arr[leftPointer];
        let rightElement = arr[rightPointer];

        if (leftElement !== rightElement) {
            uniqueCount += 1;
            leftPointer += 1;
            rightPointer += 1;
        } else {
            leftPointer += 1;
            rightPointer += 1;
        }
    }

    return uniqueCount;
}

console.log(countUniqueValues([1, 1, 1, 1, 2, 2, 2])); // OP = 2
