import { biomes } from '../data/biomes.js';

export function renderIngredientList(recipe, targetQuantity) {
  const craftsNeeded = targetQuantity > 0 ? Math.ceil(targetQuantity / recipe.yield) : 1;

  return recipe.ingredients.map(ing => {
    const totalAmount = ing.amount * craftsNeeded;
    
    // Берем путь к картинке из ing.image, полученного из словаря INGREDIENTS
    const iconElement = ing.image 
      ? `<img src="${ing.image}" alt="${ing.name}" class="w-5 h-5 object-contain inline-block">`
      : `<span class="text-amber-500">🔸</span>`;

    return `
      <li class="flex justify-between items-center text-xs py-1 border-b border-slate-700/50 last:border-none">
        <span class="flex items-center gap-2 text-slate-300">
          ${iconElement}
          <span>${ing.name}</span>
        </span>
        <span class="font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
          ${totalAmount} шт.
        </span>
      </li>
    `;
  }).join('');
}

export function createRecipeCardHTML(recipe, userQuantity = 0) {
  const biomeInfo = biomes[recipe.biome] || { name: recipe.biome, color: 'text-slate-400' };

  // Проверяем наличие Эйтра у рецепта
  const hasEitr = recipe.stats && recipe.stats.eitr;
  
  // Меняем сетку: 4 колонки если есть Эйтр, иначе 3
  const gridColsClass = hasEitr ? 'grid-cols-4' : 'grid-cols-3';

  // Блок для вывода Эйтра
  const eitrBlock = hasEitr ? `
    <div>
      <span class="block text-slate-400 text-[10px] uppercase">Эйтр</span>
      <span class="font-bold text-purple-400">+${recipe.stats.eitr}</span>
    </div>
  ` : '';

  return `
    <div class="bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl p-5 shadow-lg flex flex-col justify-between transition group">
      <div>
        <div class="flex items-start justify-between gap-2 mb-2">
          <h3 class="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition">
            ${recipe.name}
          </h3>
          <span class="text-xs font-semibold ${biomeInfo.color} bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
            ${biomeInfo.name}
          </span>
        </div>

        <!-- БЛОК СТАТОВ С ДИНАМИЧЕСКИМИ КОЛОНКАМИ -->
        <div class="grid ${gridColsClass} gap-2 my-3 bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/50 text-center text-xs">
          <div>
            <span class="block text-slate-400 text-[10px] uppercase">Здоровье</span>
            <span class="font-bold text-rose-400">+${recipe.stats.hp}</span>
          </div>
          <div>
            <span class="block text-slate-400 text-[10px] uppercase">Выносл.</span>
            <span class="font-bold text-amber-400">+${recipe.stats.stamina}</span>
          </div>
          ${eitrBlock}
          <div>
            <span class="block text-slate-400 text-[10px] uppercase">Время</span>
            <span class="font-bold text-slate-300">${recipe.stats.duration}</span>
          </div>
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Ингредиенты</span>
            <span class="text-[11px] text-slate-500">Выход: ${recipe.yield} шт.</span>
          </div>
          <ul id="ingredients-${recipe.id}" class="space-y-1">
            ${renderIngredientList(recipe, userQuantity)}
          </ul>
        </div>
      </div>

      <div class="mt-5 pt-3 border-t border-slate-700/60 flex items-center justify-between">
        <label for="qty-${recipe.id}" class="text-xs font-medium text-slate-400">Нужно порций:</label>
        <input 
          type="number" 
          id="qty-${recipe.id}"
          data-id="${recipe.id}"
          min="0"
          value="${userQuantity || ''}"
          placeholder="0"
          class="amount-input w-20 p-1.5 bg-slate-900 border border-slate-700 rounded-md text-center text-sm font-bold text-amber-400 focus:outline-none focus:border-amber-500 transition"
        >
      </div>
    </div>
  `;
}