// eslint-disable-next-line import/no-unresolved
import { defineCustomElements } from 'bridgestone-web-components-loader/index.js';

defineCustomElements().then(() => {
  // eslint-disable-next-line no-console
  console.log('Bridgestone custom elements defined.');
});
