let mycar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998
}

mycar.make = undefined;
'make' in mycar;

let trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple')

trees[3] = undefined;
3 in trees;