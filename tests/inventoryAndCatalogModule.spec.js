import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { USERS, URLS } from "../data/testData";

test.describe("Sauce Demo Inventory and Catalog Test Suite", () => {
  test("TC-IC-001: Sort products by name (Z to A)", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login(USERS.STANDARD, USERS.PASSWORD);
    await inventoryPage.sort("za");
    await expect(inventoryPage.firstProduct).toHaveText(
      "Test.allTheThings() T-Shirt (Red)",
    );
  });
  test("TC-IC-002: Sort products by name (A to Z)", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login(USERS.STANDARD, USERS.PASSWORD);
    await inventoryPage.sort("az");
    await expect(inventoryPage.firstProduct).toHaveText("Sauce Labs Backpack");
  });
  test("TC-IC-003: Sort products by price (Low to High)", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login(USERS.STANDARD, USERS.PASSWORD);
    await inventoryPage.sort("lohi");
    await expect(inventoryPage.sortedProduct).toContainText("$7.99");
  });
  test("TC-IC-004: Sort products by price (High to Low)", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login(USERS.STANDARD, USERS.PASSWORD);
    await inventoryPage.sort("hilo");
    await expect(inventoryPage.sortedProduct).toContainText("$49.99");
  });
  test("TC-IC-005: Add item to cart and verify cart badge counter", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login(USERS.STANDARD, USERS.PASSWORD);
    const addBtn = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    await addBtn.click();
    const badge = page.locator('[data-test="shopping-cart-badge"]');
    await expect(badge).toContainText("1");
    const removeBtn = page.locator('[data-test="remove-sauce-labs-backpack"]');
    await expect(removeBtn).toBeVisible();
    await expect(removeBtn).toContainText("Remove");
  });

  test("TC-IC-006: Remove item from cart on inventory page", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login(USERS.STANDARD, USERS.PASSWORD);
    const addBtn = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    await addBtn.click();
    const badge = page.locator('[data-test="shopping-cart-badge"]');
    await expect(badge).toContainText("1");
    const removeBtn = page.locator('[data-test="remove-sauce-labs-backpack"]');
    await removeBtn.click();
    await expect(badge).toBeHidden();
    await expect(addBtn).toBeVisible();
    await expect(addBtn).toContainText("Add to cart");
  });
});
