const updateUniqueItems = (items) => {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [i, j] of items.entries()) {
    if (j === 1) {
      items.set(i, 100);
    }
  }
  return items;
};

export default updateUniqueItems;
