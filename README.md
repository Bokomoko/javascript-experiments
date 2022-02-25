# simple experiments in JavaScript

This is a simple collection of small scripts that feature some nice/cool thing about JavaScript

## please note the object copy performance test

Sometimes a very easy to use script has a penalty in performance. To deep copy an object in JavaScript it´s usual to use JSON stringify methods like this

```javascript
function copyObject(aObj) {
  return JSON.parse(JSON.stringify(aObj));
}
```

Instead, use this code which is much faster

```javascript
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

```