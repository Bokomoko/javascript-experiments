/* You can deep copy any object by converting it to a string and back to an object. */
const deepCopy = obj => JSON.parse(JSON.stringify(obj));

/* it´s very slow */
