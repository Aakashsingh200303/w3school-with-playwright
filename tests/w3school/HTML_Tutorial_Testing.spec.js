import { test, expect } from '@playwright/test';

test('HTML Tutorial Module Testing', async ({ page }) => {

    // 1. Open the HTML tutorial
    await page.goto('https://www.w3schools.com/html/default.asp');

    // 2. Verify the HTML tutorial heading
    await expect(
        page.locator('//h1[normalize-space()="HTML Tutorial"]')
    ).toBeVisible();

    // 3. Verify the HTML Introduction link
    await expect(
        page.locator('//a[contains(text(),"Introduction")]').first()
    ).toBeVisible();

    // 4. Verify the Next button and click it
    await expect(
        page.locator('(//a[@class="w3-right w3-btn"])[1]')
    ).toBeVisible();

    await page.locator('(//a[@class="w3-right w3-btn"])[1]').click();

    // Return to the previous page
    await page.goBack();

    // 5. Verify the Try It Yourself link
    await expect(
        page.locator('//a[@class="w3-btn w3-margin-bottom"]').first()
    ).toBeVisible();

    // Open the Try It Yourself editor
    await page.goto(
        'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default'
    );

    // Locate the CodeMirror editor
    let code = page.locator('.CodeMirror').first();

    // Click the editor and select all existing code
    await code.click();
    await page.keyboard.press('Control+A');

    // Write your own HTML code line by line
    let htmlCode = '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<head>\n' +
        '<title>My Page</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<h1>Hello Aakash</h1>\n' +
        '<p>This is my own code.</p>\n' +
        '</body>\n' +
        '</html>';

    await code.pressSequentially(htmlCode);

    // 6. Click the Run button
    await page.getByRole('button', { name: /Run/i }).click();

});