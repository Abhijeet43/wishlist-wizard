export const existingItem = (items, newItem) => {
  return items.some(
    (item) => item.name === newItem.name && item.category === newItem.category
  );
};
