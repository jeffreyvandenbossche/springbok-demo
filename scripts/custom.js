// eslint-disable-next-line import/no-relative-packages
import { defineCustomElements } from './dependencies/springbok-web-components/loader/index.js';

defineCustomElements().then(() => {
  // eslint-disable-next-line no-console
  console.log('Bridgestone custom elements defined.');
});
