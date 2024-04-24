import {defineCustomElements} from "./dependencies/springbok-web-components/loader/index.js";

console.log('test');

defineCustomElements().then(() => {
  console.log('Bridgestone custom elements defined.');
});
