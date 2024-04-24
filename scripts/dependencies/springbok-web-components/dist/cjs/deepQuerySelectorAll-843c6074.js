'use strict';

const isEmpty = require('./is-empty-3de4afc0.js');

function deepQuerySelectorAll(selector, root) {
  const selectedItems = [];
  // select all items of this Element or Shadow DOM
  let allChildren;
  if (!isEmpty.isEmpty(root.shadowRoot)) {
    allChildren = root.shadowRoot.querySelectorAll('*');
  }
  else {
    allChildren = root.querySelectorAll('*');
  }
  allChildren.forEach((child) => {
    // if has shadow root, re-execute main function
    if (!isEmpty.isEmpty(child.shadowRoot)) {
      // concatenate the results of the recursive calls to avoid always resetting the value of selectedItems
      selectedItems.push(...deepQuerySelectorAll(selector, child));
    }
    // if match CSS selector, push to array
    if (child.matches(selector)) {
      selectedItems.push(child);
    }
  });
  return selectedItems;
}

exports.deepQuerySelectorAll = deepQuerySelectorAll;

//# sourceMappingURL=deepQuerySelectorAll-843c6074.js.map