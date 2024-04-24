import { i as isEmpty } from './is-empty-0ea2058d.js';

function deepQuerySelectorAll(selector, root) {
  const selectedItems = [];
  // select all items of this Element or Shadow DOM
  let allChildren;
  if (!isEmpty(root.shadowRoot)) {
    allChildren = root.shadowRoot.querySelectorAll('*');
  }
  else {
    allChildren = root.querySelectorAll('*');
  }
  allChildren.forEach((child) => {
    // if has shadow root, re-execute main function
    if (!isEmpty(child.shadowRoot)) {
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

export { deepQuerySelectorAll as d };

//# sourceMappingURL=deepQuerySelectorAll-b7b76e0b.js.map