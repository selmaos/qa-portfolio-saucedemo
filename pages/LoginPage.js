class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.pageTitle = page.locator('[data-test="title"]');
    this.errorMessage = page.locator('[data-test="error"]');
    /*this.productSort = page.locator('[data-test="product-sort-container"]');
    this.sortedProduct = page.locator('[data-test="item-3-title-link"]');*/
  }

  async navigate() {
    await this.page.goto("https://www.saucedemo.com/");
  }
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
