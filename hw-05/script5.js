function filterGreaterThan(arr, n) {
    return arr.filter((number) => number > n);
}

console.log(filterGreaterThan([10, 20, 30, 40, 50], 25));

console.log(filterGreaterThan([1, 5, 10, 15], 8));

console.log(filterGreaterThan([-5, -1, 0, 3], -2));


