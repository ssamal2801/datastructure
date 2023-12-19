// Why the name?
// This sort works by dividing a big array to single element array and then MERGES them
// based on ascending or descending order at multiple levels till we end up again with a single sorted array.
// Note: an array is sorted by default if it has 0 or 1 element.

// Time complexity of mergeSort is O(n log n) in all cases.
// Space complexity of mergeSort is O(n) in all cases.

// How to merge two arrays and sort them on the way?
// ! Always takes two sorted array
const mergeSortedArrs = (arr1, arr2) => {
    // create an empty array that will hold the final sorted merged array.
    const resultArr = [];
    let index1 = 0;
    let index2 = 0;

    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            resultArr.push(arr1[index1]);
            index1++;
        } else {
            resultArr.push(arr2[index2]);
            index2++;
        }
    }

    while (index1 < arr1.length) {
        resultArr.push(arr1[index1]);
        index1++;
    }
    while (index2 < arr2.length) {
        resultArr.push(arr2[index2]);
        index2++;
    }

    return resultArr;
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const midIndex = Math.floor(arr.length / 2);

    const leftArr = mergeSort(arr.slice(0, midIndex));
    const rightArr = mergeSort(arr.slice(midIndex));

    return mergeSortedArrs(leftArr, rightArr);
};

console.log(mergeSort([2, 0, 6, 9, 1, 3, 6, 6, 6, 4]));
