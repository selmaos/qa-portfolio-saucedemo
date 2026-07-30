# 🐛 Bug Report: The 'Remove' action does not work on catalog page when item is added to cart

**Bug ID:** BUG-001  
**Severity:** High  
**Priority:** High  
**Environment:** Chrome v122, Windows 11  
**Tested URL:** https://www.saucedemo.com/

---

## 📝 Summary

When the item is added to cart, the button changes from 'Add' to 'Remove', but then 'Remove' action does not work. The item remains in the cart. However, when navigating to cart and clicking on 'Remove' on that page, it removes the item successfully.

## 🔄 Steps to Reproduce

1. Navigate to `https://www.saucedemo.com/`
2. Log in with `error_user`
3. Click on the **"Add to cart"** button for "Sauce Labs Backpack"
4. Observe the cart icon in the top right corner
5. Notice that button **"Add to cart"** is changed to **"Remove"**
6. Click on the **"Remove"**
7. Notice that cart icon in the top right corner remains still, and the **"Remove"** button does not change to **"Add to cart"**

## ❌ Expected Result

The item should be added to the cart, the cart badge should show `1`, and the button text should change to "Remove". When clicked on the "Remove" button it should change to "Add to cart" again and the cart badge should change or disappear.

## ⭕ Actual Result

The item is successfully added to the cart, but it is not removed successfully, and the button "Remove" does not change back to "Add to cart". The cart badge remains still.

---

### Video Recording (Optional)

_Below is a short recording demonstrating the issue:_
[evidenceBug1.webm](https://github.com/user-attachments/assets/d340f01e-2ad8-4ea2-b1c7-a562b141e189)

---

## 🛠️ Console Logs & Network Errors

```text
Uncaught Error: Failed to remove item from cart.
    at p (index-XyuNVFOR.js:571:38300)
    at index-XyuNVFOR.js:571:38510
    at bd (index-XyuNVFOR.js:15:126147)

POST https://submit.backtrace.io/UNIVERSE/TOKEN/json net::ERR_FAILED 503 (Service Unavailable)
Access to fetch at 'https://submit.backtrace.io/...' from origin 'https://www.saucedemo.com' has been blocked by CORS policy.
```
