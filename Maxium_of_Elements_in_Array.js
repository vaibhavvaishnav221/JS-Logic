let arr = [12, 26, 43, 54, 66, 75];

let max = -1;

let x = 9;

for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}