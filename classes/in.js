let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees[3] = undefined;

console.log(trees);
console.log(3 in trees);
console.log('toString' in {});