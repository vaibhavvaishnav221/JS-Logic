let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let fruits = ['apple', 'mango', 'banana', 'orange', 'pineapple'];

function sumOfArrayElements(arr) {
    if (typeof arr[0] === 'number') {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]; // Adding the i'th element of the array to sum
        }
        return sum;
    } else {
        let sum = '';
        for (let i = 0; i < arr.length; i++) {
            sum += `${arr[i]} `; // Concatenating the i'th element of the array to sum
        }
        return sum;
    }
}

console.log(sumOfArrayElements(nums));    // Output: 45
console.log(sumOfArrayElements(fruits));  // Output: applemangobananaorangepineapple

let heroes = ["Ironman", "Batman", "Superman", "Flash", "WonderWoman", "Hulk", "AquaMan", "Thor"];

console.log(sumOfArrayElements(heroes));