import { test, expect } from '@playwright/test';

test('CSS Tutorial Module Testing', async ({ page }) => {

    // 1. Open the CSS tutorial
    await page.goto('https://www.w3schools.com/css/default.asp');

    // 2. Verify the CSS tutorial heading
    await expect(page.locator('//h1[normalize-space()="CSS Tutorial"]')).toBeVisible();

    // 3. Verify the CSS Introduction link
    await expect(page.locator('//a[contains(text(),"Introduction")]').first()).toBeVisible();

    // 4. Verify the CSS Syntax section
    await expect(page.getByText('CSS Syntax', { exact: true })).toBeVisible();

    //5 Try Adventure Mode(for fun )
    let button =page.getByText('TRY ADVENTURE MODE');
    await button.hover(); // Hover over the button
    await page.waitForTimeout(2000);  // Wait to observe the animation
    await page.mouse.move(0,0);  // Move the cursor away
    await page.waitForTimeout(2000);  // Wait to observe the toy going down

    //6 Verify the Try Adventure Mode
    await page.locator('//a[@class="quest-entry ga-featured ga-appdemo-try-in-adventure-mode"]').click();
    await page.locator('//span[@class="quest-tip"]').click();

    // 5. Verify the Next button
    await page.goto('https://www.w3schools.com/css/default.asp'); 
    await expect(page.locator('(//a[@class="w3-right w3-btn"])[2]')).toBeVisible();
    await page.locator('(//a[@class="w3-right w3-btn"])[2]').click();

});
