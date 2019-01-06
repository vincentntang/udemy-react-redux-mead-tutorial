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

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName } = book.publisher;

console.log(publisherName);
