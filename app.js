'use strict';
const studies = [...document.querySelectorAll('.study')];
const buttons = [...document.querySelectorAll('[data-filter]')];
const search = document.getElementById('search');
let selected = 'all';
function render() {
  const query = search.value.trim().normalize('NFKC').toLocaleLowerCase();
  let count = 0;
  studies.forEach(study => {
    const match = (selected === 'all' || study.dataset.category === selected) && study.textContent.normalize('NFKC').toLocaleLowerCase().includes(query);
    study.hidden = !match;
    if (match) count++;
  });
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === selected)));
  document.getElementById('result-count').textContent = count + '件の研究';
  document.getElementById('empty').hidden = count !== 0;
}
buttons.forEach(button => button.addEventListener('click', () => {selected = button.dataset.filter; render();}));
search.addEventListener('input', render);
document.getElementById('reset').addEventListener('click', () => { selected = 'all'; search.value = ''; render(); search.focus(); });
document.querySelectorAll('[data-jump]').forEach(button => button.addEventListener('click', () => {
  selected = button.dataset.jump; search.value = ''; render();
  document.getElementById('research').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  buttons.find(item => item.dataset.filter === selected).focus({preventScroll:true});
}));

