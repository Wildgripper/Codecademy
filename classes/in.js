let cities = ['Sofia', 'Plovdiv', 'Varna', 'Burgas', 'Troian'];

console.log('Varna' in cities);
console.log(2 in cities);
delete cities[2];
console.log(2 in cities);
console.log(cities);
cities[2] = undefined;
console.log(2 in cities);
