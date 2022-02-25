// this is a very slow function that will copy an object using JSON.parse and JSON.stringify
function copyObject(aObj) {
  return JSON.parse(JSON.stringify(aObj));
}

// this is a recursive function that will copy an object
function deepCopy(stuff) {
  const newStuff = {};
  for (const key in stuff) {
    if (typeof stuff[key] === 'object') {
      newStuff[key] = deepCopy(stuff[key]);
    } else {
      newStuff[key] = stuff[key];
    }
  }
  return newStuff;
}

// create a sample object
const myObject = {
  name: 'john',
  age: 30,
  city: 'new york',
  address: { street: 'street 1', number: '1' },
};
// create a copy of the object. Changes made to the original object will not be reflected in the copy
const newCopy = deepCopy(myObject);
myObject.name = 'jane'; // change a 1st level property of the original object
myObject.address.street = 'street 2'; // change a 2nd level property of the original object
console.log({ myObject }); // this is the original object
console.log({ newCopy }); // this is the copy of the object

console.log('Running tests. Please wait..');
const start = Date.now(); // get start time
for (let i = 1; i < 10000000; i++) {
  // loop thru 10000000 times
  copyObject(myObject); // slow  copy of the object
}
const end = Date.now(); // get end time
console.log(`copyObject took ${end - start} milliseconds.`); // calculates the time it took to run the function

const start2 = Date.now(); // get start time
for (let i = 1; i < 10000000; i++) {
  deepCopy(myObject); // fast copy of the object
}
const end2 = Date.now();
console.log(`deepCopy took ${end2 - start2} milliseconds.`);
