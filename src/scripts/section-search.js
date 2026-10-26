// Filters the existing visual items in place. No external service or dependency.
function normalize(s) { return (s || '').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase(); }
function setupSearch() {
  document.querySelectorAll('[data-search-root]').forEach(root => {
    if (root.dataset.searchReady === '1') return;
    root.dataset.searchReady = '1';
    const input = root.querySelector('[data-search-input]');
    const clear = root.querySelector('[data-search-clear]');
    const count = root.querySelector('[data-search-count]');
    const empty = root.querySelector('[data-search-empty]');
    const items = [...root.querySelectorAll('[data-search-item]')];
    const filters = [...root.querySelectorAll('[data-filter]')];
    let activeCategory = 'ALL';
    const update = () => {
      const terms = normalize(input.value.trim()).split(/\s+/).filter(Boolean);
      let visible = 0;
      items.forEach(item => {
        const hay = normalize(item.dataset.searchText || item.textContent);
        const categoryOk = activeCategory === 'ALL' || item.dataset.category === activeCategory;
        const match = categoryOk && terms.every(term => hay.includes(term));
        item.hidden = !match;
        if (match) visible++;
      });
      count.textContent = terms.length || activeCategory !== 'ALL' ? `${visible} of ${items.length} shown` : `${items.length} ${items.length === 1 ? 'item' : 'items'}`;
      empty.hidden = visible !== 0;
      clear.hidden = !input.value;
    };
    input.addEventListener('input', update);
    clear.addEventListener('click', () => {input.value=''; input.focus(); update();});
    filters.forEach(button => button.addEventListener('click', () => {
      activeCategory = button.dataset.filter || 'ALL';
      filters.forEach(other => other.classList.toggle('chosen',other===button));
      update();
    }));
    update();
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',setupSearch);
else setupSearch();
document.addEventListener('astro:page-load',setupSearch);
