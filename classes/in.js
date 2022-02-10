let mycar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998
}

delete mycar.make;
'make' in mycar;

let trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple')
delete trees[3];
3 in trees;