# **TEST PLAN: SauceDemo E-Commerce Application**

**Document:** Test Plan for E-Commerce End-to-End Functionality

**Target Application:** SauceDemo (\[<https://www.saucedemo.com/\>](<https://www.saucedemo.com/>))

**Author:** Selma Imsirovic, QA Engineer

**Version:** 1.0

**Date:** July 2026

### **1\. INTRODUCTION & OBJECTIVES**

The objective of this test execution is to thoroughly verify the core functionality of the _SauceDemo_ web application. The testing process focuses on ensuring a seamless, error-free End-to-End (E2E) user journey - from user authentication, product catalog browsing, and cart management, to final checkout completion.

### **2\. TEST SCOPE**

#### **2.1. In-Scope (Functional Testing)**

- **Authentication Module:** Valid login, invalid credentials handling, and locked-out user scenarios.
- **Inventory & Catalog:** Product display, sorting (Name A-Z/Z-A, Price Low-High/High-Low), adding/removing items, and cart badge counter updates.
- **Shopping Cart:** Reviewing selected items, removing items, and navigation persistence.
- **Checkout Flow:** Required field validations (First Name, Last Name, Zip/Postal Code), correct subtotal calculation, tax application, and total price accuracy.
- **End-to-End (E2E) Flow:** Complete purchasing path from login to the order completion screen.

#### **2.2. Out-of-Scope**

- Real-world payment gateway processing (the app utilizes a mock/simulated checkout).
- Performance, Load, and Stress testing.
- Deep Security & Penetration testing.

### **3\. TEST STRATEGY & TOOLING**

- **Manual Testing:** Functional, negative, and boundary test cases executed on Google Chrome and Mozilla Firefox.
- **API Testing:** Backend service validation and endpoint testing using **Postman**.
- **Test Automation:** Automated UI & Regression test suites using **Playwright with JavaScript (Node.js)**.
- **Test Management & Documentation:** Managed via Notion and version-controlled on GitHub.

### **4\. TEST ENVIRONMENT & DATA**

- **AUT URL:** \[<https://www.saucedemo.com/\>](<https://www.saucedemo.com/>)
- **Test Credentials (Provided on AUT home page):**
  - Standard User: standard_user
  - Locked Out User: locked_out_user
  - Common Password: secret_sauce
- **Browsers:** Google Chrome (Latest), Mozilla Firefox (Latest), WebKit (Safari engine via Playwright).

### **5\. ENTRY & EXIT CRITERIA**

#### **5.1. Entry Criteria**

- Test environment is accessible and stable.
- Test Plan and Test Scenarios are defined, reviewed, and finalized.

#### **5.2. Exit Criteria**

- 100% of planned Test Cases are executed.
- All identified Critical and Blocker defects are logged, re-tested, and verified.
- Final Test Execution Summary Report is published.

### **6\. RISKS & MITIGATION**

- **Risk:** Potential unavailability or downtime of the publicly hosted saucedemo.com domain.
- **Mitigation:** Execute API/mock assertions where possible and utilize local fallback runs if needed.
