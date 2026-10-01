export const state = {
  activeCategoryFilter: 'all',
  activeStatFilter: 'all',
  searchQuery: '',
  userQuantities: {} // { recipeId: count }
};

export function setCategory(cat) {
  state.activeCategoryFilter = cat;
}

export function setStat(stat) {
  state.activeStatFilter = stat;
}

export function setSearchQuery(query) {
  state.searchQuery = query.toLowerCase();
}

export function setRecipeQuantity(recipeId, quantity) {
  state.userQuantities[recipeId] = Math.max(0, parseInt(quantity) || 0);
}

export function clearAllQuantities() {
  state.userQuantities = {};
}