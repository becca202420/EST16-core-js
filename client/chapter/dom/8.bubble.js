/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

/* 버블링 ----------------------------------------------------------------- */

section.addEventListener('click', function (e) {
  console.log(e.target, e.currentTarget, this);
  console.log('%c section', 'color:dodgerblue');
});

// article.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c article', 'color:orange');
// });

// p.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c p', 'color:hotpink');
// });

section.addEventListener('mouseenter', (e) => {
  e.currentTarget.style.background = 'black';
});

section.addEventListener('mouseenter', (e) => {
  e.currentTarget.style.background = '';
});

/* 캡처링 ----------------------------------------------------------------- */
