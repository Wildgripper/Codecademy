const sum = function (a, b) {
    return a + b;
};

function myFunction (a, b) {
    return sum(a, b);
}

// let x = myFunction(5, 10);
// console.log(x);

let number = 0;

const add = function(num) {
    for (let index = 0; index <= num; index++) {
        number = number + index;        
    }
    console.log(number);
}

add(5);
add(5);
