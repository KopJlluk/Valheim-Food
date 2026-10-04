import { recipes } from './data/recipes.js';
import { state, setRecipeQuantity, clearAllQuantities } from './state.js';
import { createRecipeCardHTML, renderIngredientList } from './components/recipeCard.js';
import { setupFilterEvents } from './components/filters.js';
import { renderSummaryHTML } from './components/summary.js';

function getSelectedBiomes() {
  const checkboxes = document.querySelectorAll('.biome-checkbox:checked');
  return Array.from(checkboxes).map(cb => cb.value);
}

export function renderSummary() {
  const summaryContainer = document.getElementById('summaryContainer');
  if (summaryContainer) {
    summaryContainer.innerHTML = renderSummaryHTML();
  }
}

export function renderRecipes() {
  const container = document.getElementById('recipesContainer');
  const selectedBiomes = getSelectedBiomes();
  
  const filtered = recipes.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(state.searchQuery) || 
                          r.ingredients.some(i => i.name.toLowerCase().includes(state.searchQuery));
    
    const matchesCategory = state.activeCategoryFilter === 'all' || !r.category || r.category === state.activeCategoryFilter;
    const matchesStat = state.activeStatFilter === 'all' || !r.type || r.type === state.activeStatFilter;
    const matchesBiome = selectedBiomes.includes(r.biome);

    return matchesSearch && matchesCategory && matchesStat && matchesBiome;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500 font-medium">Ничего не найдено по твоим фильтрам...</div>`;
    return;
  }

  container.innerHTML = filtered.map(recipe => {
    const qty = state.userQuantities[recipe.id] || 0;
    return createRecipeCardHTML(recipe, qty);
  }).join('');
}

function setupDynamicEvents() {
  // Изменение количества в карточке
  document.getElementById('recipesContainer').addEventListener('input', (e) => {
    if (e.target.classList.contains('amount-input')) {
      const recipeId = e.target.dataset.id;
      const count = e.target.value;
      
      setRecipeQuantity(recipeId, count);

      const recipe = recipes.find(r => r.id === recipeId);
      const listContainer = document.getElementById(`ingredients-${recipeId}`);
      if (recipe && listContainer) {
        listContainer.innerHTML = renderIngredientList(recipe, state.userQuantities[recipeId]);
      }

      renderSummary();
    }
  });

  // Кнопка "Очистить всё" в корзине
  document.getElementById('summaryContainer').addEventListener('click', (e) => {
    if (e.target.id === 'clearAllBtn') {
      clearAllQuantities();
      renderRecipes();
      renderSummary();
    }
  });
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', () => {
  setupFilterEvents(() => renderRecipes());
  setupDynamicEvents();
  renderRecipes();
  renderSummary();
});