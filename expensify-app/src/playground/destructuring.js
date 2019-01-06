// const person = {
//   name: "Andrew",
//   age: 26,
//   location: {
//     city: "Philly",
//     temp: 92
//   }
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`its a ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName } = book.publisher;

// console.log(publisherName);

// Array destructuring

const address = ["1299 S Junpier Street", "Philly", "Penn", "19147"];

const [, city, state = "New York"] = address;

console.log(`You are in ${state} in ${city}`);

const item = ["Coffee(hot)", "$2", "$2.5", "$2.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice}`);
