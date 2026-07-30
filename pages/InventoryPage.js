class InventoryPage {
  constructor(page) {
    this.productSort = page.locator('[data-test="product-sort-container"]');
    this.sortedProducts = page.locator('[data-test="inventory-item-name"]');
    this.sortedProductPrice = page.locator(
      '[data-test="inventory-item-price"]',
    );
  }

  async sort(sorting) {
    await this.productSort.selectOption(sorting);
  }

  get firstProduct() {
    return this.sortedProducts.first();
  }
  get sortedProduct() {
    return this.sortedProductPrice.first();
  }
}

module.exports = { InventoryPage };
