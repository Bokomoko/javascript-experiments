/* You can just toggle the visibility of an element using the style.visibility property 
and in case you want to remove it from the render flow, 
you can use the style.display property. */

const hideElement = (element, removeFromFlow = false) => {
  removeFromFlow
    ? (element.style.display = 'none')
    : (element.style.visibility = 'hidden');
};
/*
If you don't remove an element from the render flow, it will be hidden,
 but its space will still be occupied. 
 It is highly useful while rendering long lists of elements,
  the elements NOT in view (can be tested using IntersectionObserver) 
  can be hidden to provide a performance boost.
*/
