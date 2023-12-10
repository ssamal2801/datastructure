//* Question:
//* Write a function called sumZero which accepts a sorted array of integers.
//* The function should find the first pair where the sum is 0.

const sumZero = (arr) => {
    let pointerLeft = 0;
    let pointerRight = arr.length - 1;

    while (pointerLeft < pointerRight) {
        let leftElement = arr[pointerLeft];
        let rightElement = arr[pointerRight];
        
        if (leftElement + rightElement === 0) {
            return [leftElement, rightElement];
        }

        if (leftElement + rightElement > 0) {
            pointerLeft++;
        } else {
            pointerRight--;
        }
    }
};

//? Test Case:
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
