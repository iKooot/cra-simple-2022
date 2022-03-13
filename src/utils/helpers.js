export function getTotalPagesHelper(itemsLength, koef = 10) {
  return Math.ceil(Number(itemsLength) / koef);
}

export function getProductCategoriesById(allCategories, productCategories) {
  const newList = allCategories.filter((category) => {
    for (let key in productCategories) {
      if (productCategories[key] === category.id) {
        return true;
      }
    }
  });

  return newList.map((el) => ({ id: el.id, name: el.name }));
}

export function filterProductsByPage(products, itemsPerPage, currentPage) {
  return products.filter((el, i) => {
    if (currentPage === 1) {
      return i <= itemsPerPage - 1;
    }

    if (currentPage !== 1) {
      const index = currentPage * itemsPerPage;
      return i >= index + 1 - itemsPerPage && i <= index;
    }
  });
}
