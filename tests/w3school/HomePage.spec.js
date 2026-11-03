import { test, expect } from '@playwright/test';

test('W3Schools Home Page Testing', async ({ page }) => {

// 1. Verify the home page opens
    await page.goto('https://www.w3schools.com/');
    await expect(page).toHaveTitle(/W3Schools/i);

//2. Verify the W3Schools logo is visible
    await expect(page.locator('//a[@id="w3-logo"]')).toBeVisible();

// 3. Verify the Tutorials menu is visible
    await page.locator('//a[contains(@class,"ga-top-services")]').click();
    await page.locator('//h4[contains(text(),"Free Tutorials")]').click();

// 4. Verify the search field is visible 
       await page.locator('//input[@id="tnb-google-search-input"]').fill('CSS Tutorial')
       await page.keyboard.press('Enter')
       await page.locator('(//a[@class="w3-right w3-btn"])[1]').click();

// 5. Verify the Sign Up button is visible
    await expect(page.locator('//div[@id="tnb-login-btn"]').first()).toBeVisible();
    await page.locator('//div[@id="tnb-login-btn"]').click();

});








    ///await page.locator('//span[@class="codicon codicon-debug-step-over"]').click();
