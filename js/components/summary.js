import { recipes } from '../data/recipes.js';
import { state } from '../state.js';

export function calculateTotalIngredients() {
  const totals = {};

  Object.entries(state.userQuantities).forEach(([recipeId, count]) => {
    if (count <= 0) return;

    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const craftsNeeded = Math.ceil(count / recipe.yield);

    recipe.ingredients.forEach(ing => {
      const amountNeeded = ing.amount * craftsNeeded;
      if (totals[ing.name]) {
        totals[ing.name] += amountNeeded;
      } else {
        totals[ing.name] = amountNeeded;
      }
    });
  });

  return totals;
}

export function renderSummaryHTML() {
  const totals = calculateTotalIngredients();
  const entries = Object.entries(totals);

  if (entries.length === 0) {
    return `
      <div class="bg-slate-800 border border-slate-700/80 rounded-xl p-4 shadow-lg">
        <h2 class="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
          🛒 Список для фарма
        </h2>
        <p class="text-xs text-slate-400">Укажи количество в карточках рецептов, чтобы сформировать список ингредиентов.</p>
      </div>
    `;
  }

  entries.sort((a, b) => a[0].localeCompare(b[0]));

  const listHTML = entries.map(([name, amount]) => `
    <li class="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-700/50 hover:border-slate-600 transition">
      <span class="text-xs font-medium text-slate-200">🔸 ${name}</span>
      <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">${amount} шт.</span>
    </li>
  `).join('');

  return `
    <div class="bg-slate-800 border border-amber-500/30 rounded-xl p-4 shadow-xl space-y-3">
      <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
        <h2 class="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          🛒 Список для фарма
        </h2>
        <button 
          id="clearAllBtn" 
          class="text-[11px] font-semibold text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 px-2 py-1 rounded transition border border-rose-500/20"
        >
          Очистить всё
        </button>
      </div>

      <ul class="space-y-1.5 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
        ${listHTML}
      </ul>
    </div>
  `;
}