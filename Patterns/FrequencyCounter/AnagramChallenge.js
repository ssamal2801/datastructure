//* Q: Given two strings, write a function to determine if the
//* second string is an anagram of the first. An anagram is a word,
//* phase or name formed by rearranging the letters of another, such as cinema is formed from iceman.

const validAnagram = (stringA, stringB) => {
    if (stringA.length !== stringB.length) {
        return false;
    }
    const charTracker = {};
    // Store the character count in tracker
    for (let char of stringA) {
        charTracker[char] ? (charTracker[char] += 1) : (charTracker[char] = 1);
    }
    // If the count of each character in stringB matches with stringA, return true
    for (let char of stringB) {
        // If a char does not exist in string A, return false
        if (!charTracker[char] || charTracker[char] < 1) {
            return false;
        }
        charTracker[char] -= 1;
    }
    return true;
};

const stringA = 'cinema';
const stringB = 'iceman';
console.log(validAnagram(stringA, stringB));
