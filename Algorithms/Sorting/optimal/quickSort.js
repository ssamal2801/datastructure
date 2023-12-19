// Why the name quickSort? It's a stupid name, it is faster
// than a few other quadratic sorts but sometime may have a time complexity of O(n Log n).

// Average time complexity: O(n Log n)
// Worst time complexity: O(n^2)
// Space complexity: O(n)

const pivit = (arr, start = 0, end = arr.length - 1) => {
    let pivit = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivit > arr[i]) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivitIndex = pivit(arr, left, right);
        quickSort(arr, left, pivitIndex - 1);
        quickSort(arr, pivitIndex + 1, right);
    }
    return arr;
};

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
