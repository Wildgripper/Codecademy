const car = {
    make: 'Honda',
    model: 'Accord',
    year: 1998
};

console.log('make' in car);

delete car.make;

if ('make' in car === false) {
    car.make = 'Suzuki';
}

console.log(car.make);

let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];

console.log(0 in trees);
console.log(3 in trees);
console.log(6 in trees);
console.log('bay' in trees);
console.log('length' in trees);
