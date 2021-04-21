// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
    let sqSum = 0;
    numbers.forEach((n) => (sqSum += n * n));
    return sqSum;
}

console.log(squareSum([1, 2, 3]));
