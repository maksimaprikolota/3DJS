function getWordLengths(words) {
    return words.map((word) => word.length);
}

const fruits = ["яблоко", "банан", "апельсин"];
const lengths = getWordLengths(fruits);

console.log(lengths);
