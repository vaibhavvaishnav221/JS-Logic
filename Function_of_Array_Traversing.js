function Array1D(array) {
    for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
    }
}

function Array2D(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

let students = ['Anil', 'Bablu', 'Chintu', 'Duggu', 'Eesha'];

let fruits = ['apple', 'banana', 'chicku', 'orange', 'dragonfruit', 'pineapple'];

let heroes = [['ironman', 'thor', 'hulk'], ['batman', 'superman', 'flash', 'wonderwoman']];

Array2D(heroes);