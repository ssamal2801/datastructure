// Why the name radix?
// Radix is the base of a number system. For example, the base of the decimal system is 10, and the base of the binary system is 2.
// Only works with numbers

// Worst time complexity: O(nk)
// Space complexity: O(n + k)

const getDigitAtPlaceFromRight = (num, place) => {
    // make sure the num is absolute/positive
    // divide the number by 10^ place and floor it
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const getDidigtCount = (num) => {
    if (typeof num !== 'number') return;

    // keep dividing by 10 until you hit 0
    let count = 0;
    let numCopy = num;
    do {
        count++;
        numCopy = Math.floor(numCopy / 10);
    } while (numCopy > 0);
    return count;
};

const getMaxDigitLength = (numList) => {
    let longestDigit = 0;

    for (num of numList) {
        const digitCount = getDidigtCount(num);
        longestDigit = Math.max(digitCount, longestDigit);
    }

    return longestDigit;
};

const radixSort = (numList) => {
    // loop X = longest number of times
    // Create 10 buckets/empty arrays (as there are 10 digits in Mathematics)
    // for each decreasing position in loop, remove item from the main array,
    // arrange each number to the respective array at the position index = digit. Ex, if digit is 9, place the entire number at 9th position.
    // Now push them back to the main array starting from left bucket to right
    // Repeat for X amount of time from step 1

    const maxDigitCount = getMaxDigitLength(numList);

    for (let digitPlace = 0; digitPlace < maxDigitCount; digitPlace++) {
        // Create buckets
        let buckets = Array.from({ length: 10 }, () => []);
        for (let numIndex = 0; numIndex < numList.length; numIndex++) {
            let digit = getDigitAtPlaceFromRight(numList[numIndex], digitPlace);
            buckets[digit].push(numList[numIndex]);
        }
        numList = [].concat(...buckets);
    }
    return numList;
};

console.log(radixSort([1, 23, 56, 0, 222]));
// console.log(getDigitAtPlaceFromRight(23, 5));
