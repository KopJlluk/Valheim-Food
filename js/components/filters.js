import { state, setCategory, setStat, setSearchQuery } from '../state.js';

export function setupFilterEvents(onFilterChange) {
  const searchInput = document.getElementById('searchInput');
  const categoryFilters = document.getElementById('categoryFilters');
  const statTypeFilters = document.getElementById('statTypeFilters');
  const biomeCheckboxes = document.getElementById('biomeCheckboxes');
  const resetBiomesBtn = document.getElementById('resetBiomesBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      setSearchQuery(e.target.value);
      onFilterChange();
    });
  }

  if (categoryFilters) {
    categoryFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-btn');
      if (!btn) return;

      setCategory(btn.dataset.cat);

      document.querySelectorAll('.cat-btn').forEach(b => {
        b.className = b === btn 
          ? 'cat-btn px-4 py-2 rounded-lg text-sm font-bold bg-amber-500 text-slate-950 transition'
          : 'cat-btn px-4 py-2 rounded-lg text-sm font-medium bg-slate-900/60 hover:bg-slate-700 text-slate-200 transition';
      });

      onFilterChange();
    });
  }

  if (statTypeFilters) {
    statTypeFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.stat-btn');
      if (!btn) return;

      setStat(btn.dataset.stat);

      document.querySelectorAll('.stat-btn').forEach(b => {
        b.className = b === btn 
          ? 'stat-btn w-full text-left px-3 py-2 rounded-lg text-sm font-bold bg-amber-500 text-slate-950 transition'
          : 'stat-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium bg-slate-900/60 hover:bg-slate-700 text-slate-200 transition';
      });

      onFilterChange();
    });
  }

  if (biomeCheckboxes) {
    biomeCheckboxes.addEventListener('change', () => {
      onFilterChange();
    });
  }

  if (resetBiomesBtn) {
    resetBiomesBtn.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('.biome-checkbox');
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);
      checkboxes.forEach(cb => cb.checked = !allChecked);
      onFilterChange();
    });
  }
}