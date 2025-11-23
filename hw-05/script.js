function getEvenNumbers(array) {
    return array.filter((number) => number % 2 === 0);
}

const originalArray = [1, 2, 3, 4, 5, 6];
const evenArray = getEvenNumbers(originalArray);

console.log(evenArray);
