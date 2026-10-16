import { isString } from '../utils/type.js';
import { addClass, removeClass } from './css.js';
import { getNode } from './getNode.js';

export function showAlert(node, message, timeout = 1000) {
  if (isString(node)) node = getNode(node);

  addClass(node, 'is-active');

  node.textContent = message;

  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}
