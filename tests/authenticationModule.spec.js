import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { USERS, URLS } from "../data/testData";

test.describe("SauceDemo Login Test Suite", () => {
  test("TC-AM-001: Login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(USERS.STANDARD, USERS.PASSWORD);
    await expect(loginPage.pageTitle).toHaveText("Products");
  });
  test("TC-AM-002: Login with empty Username and Password fields", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login("", "");
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Username is required",
    );
  });
  test("TC-AM-003: Login with empty Username field and valid Password field", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login("", USERS.PASSWORD);
    await expect(loginPage.errorMessage).toContainText(
      "Epic sadface: Username is required",
    );
  });
  test("TC-AM-004: Login with valid Username field and empty Password field", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(USERS.STANDARD, "");
    await expect(loginPage.errorMessage).toContainText(
      "Epic sadface: Password is required",
    );
  });
  test("TC-AM-005: Login with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login("randomUser", "randomPassword");
    await expect(loginPage.errorMessage).toContainText(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });
  test("TC-AM-006: Login with invalid Username and valid Password", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login("randomUser", USERS.PASSWORD);
    await expect(loginPage.errorMessage).toContainText(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });
  test("TC-AM-007: Login with valid Username and invalid Password", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(USERS.STANDARD, "randomPassword");
    await expect(loginPage.errorMessage).toContainText(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });
});
