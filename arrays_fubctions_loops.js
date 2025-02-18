const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.splice(0);

function arrayTraversal(num) {
    for (let i = 0; i < 10; i++) {
        arr[i] = (i + 1) * num;
    }

    for (let index = 0; index < arr.length; index++) {
        console.log(`Element ${index + 1} of the array - ${arr[index]}`);
    }
}

arrayTraversal(8);