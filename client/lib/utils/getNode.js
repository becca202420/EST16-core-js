/** JS독(?)으로 설명이 필요한 함수 위에 작성하므로써 팀프로젝트를 수월하게 할 수 있다.
 * 입력한 선택자에 해당하는 DOM 요소를 반환합니다.
 * @param {string} node - CSS 선택자 문자열 ex) .class, #id, div
 * @param {Document | HTMLElement} context 부모가 될 컨텍스트 노드 (기본값은 document)
 * @returns {HTMLElement | null} 매칭된 첫 번째 요소 또는 null일 수 있습니다.
 *
 * @example
 * const btn = getNode('#button');
 * const li = getNode('li', '.navigation');
 */
function getNode(node, context = document) {
  if (context.nodeType !== 9) context = getNode(context);

  return context.querySelector(node);
}

/**
 * 입력한 선택자에 해당하는 DOM 요소를 반환합니다.
 * @param {string} node - CSS 선택자 문자열 ex) .class, #id, div
 * @param {Document | HTMLElement} context 부모가 될 컨텍스트 노드 (기본값은 document)
 * @returns {NodeList | null} 매칭된 첫 번째 요소 또는 null일 수 있습니다.
 *
 * @example
 * const btn = getNode('button');
 * const li = getNode('li');
 */
function getNodes(node, context = document) {
  if (context.nodeType !== 9) context = getNode(context);

  return context.querySelectorAll(node);
}
