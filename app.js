// let arr = [1, 4, 9, 16]

// let newArray = arr.map(element => 'dog')

// console.log(newArray)

let dollars = [1, 5, 10, 3]

// let cents = dollars.map(element => element * 100)

// console.log(cents)

let cents = [];

for (let i = 0; i < dollars.length; ++i) {
    cents.push(dollars[i]* 100);
}

console.log(cents);