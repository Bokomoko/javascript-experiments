/* JavaScript makes fetching the parameters from any address a walk in the park using the URL object.
 */
const url = new URL(window.location.href);
const paramValue = url.searchParams.get('paramName');
console.log(paramValue);
