import { test, expect } from '@playwright/test';

test('WhatsApp web interaction test', async ({ page }) => {
    // Navigate to WhatsApp Web
    await page.goto('https://web.whatsapp.com/');
    await expect(page).toHaveTitle(/WhatsApp/i);

    // 1. Locate and verify the WhatsApp logo
    const whatsappLogo = page.locator("text=WhatsApp").first();
    await expect(whatsappLogo).toBeVisible();

    // 2. Locate and click the Download button
    const downloadButton = page.get_by_role("link", name="Download");
    await expect(downloadButton).toBeVisible();
    // await downloadButton.click(); // Uncomment if you want to click it

    // 3. Locate and verify the "Need help?" link
    const needHelpLink = page.get_by_role("link", name="Need help?");
    await expect(needHelpLink).toBeVisible();

    // 4. Locate and check/uncheck the "Stay logged in on this browser" checkbox
    const stayLoggedInCheckbox = page.locator("input[type='checkbox']");
    await expect(stayLoggedInCheckbox).toBeVisible();
    
    // Example: unchecking it if checked
    if (await stayLoggedInCheckbox.isChecked()) {
        await stayLoggedInCheckbox.uncheck();
    }

    // 5. Locate and click "Log in with phone number"
    const loginWithPhone = page.get_by_role("link", name="Log in with phone number");
    await expect(loginWithPhone).toBeVisible();
    // await loginWithPhone.click(); // Uncomment if you want to click it

    await page.waitForTimeout(2000);
});
        
    // test('Download button', async ({ page }) => {
    //     // //3.  Verify the Download button   
    //     await page.goto('https://web.whatsapp.com/')
    //     let button = page.getByText('Download', { exact: true });   
    //     await expect(button).toBeVisible();
    //     await button.hover();
    //     await page.waitForTimeout(2000);
    //     await page.mouse.move(0,0);
    //     await page.waitForTimeout(2000);
    //     await page.locator('//button[@class="xjb2p0i x1ypdohk xtnn1bt x9v5kkp xmw7ebm xrdum7p x-default-marker xk50ysn x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1ipd3cv xdx94on xqutoja xsiszko x17m9png x91sizk x1vva9xg x1jfkl46 x1jchvi3 x1d3mw78 xdd8jsf x1wfn8jh x126k92a x6ikm8r x10wlt62 x1n2onr6 x1vjfegm xeh1a47 xowvryd xmp5vt6 xq4q3us x19qpkoy xine9no xdfradd x12ijfkc x889kno x1a8lsjc xb0esv5 xyo0t3i"]').click();
    // });

    // test('Cheque box button', async ({ page }) => {
    //     // Verify the Cheque box button
    //     await page.goto('https://web.whatsapp.com/')
    //     // await page.goto('https://web.whatsapp.com/');
    //     await page.waitForTimeout(1000);
    //     await page.locator('input[type="checkbox"]').check();
    //     await page.waitForTimeout(1000);
    //     await page.locator('input[type="checkbox"]').uncheck();
    // });


    // test('Help', async ({ page }) => {
    //     // verify the Help
    //     await page.goto('https://web.whatsapp.com/')
    //     await page.getByText('Need help?', { exact: true }).click();  
    //     // await page.getByText('Download and Installation', { exact: true }).click();
    // });

// // 3. Verify the QR code or login instructions
    //await expect( page.locator('canvas').first()).toBeVisible({ timeout: 30000 });

    // // 4. Verify the phone number login option, if available
    // const phoneLogin = page.getByText(
    //     /Log in with phone number/i
    // );

    // // 5. Verify the page URL
    // await expect(page).toHaveURL(/web\.whatsapp\.com/);




// import {test} from '@playwright/test'
// test('amazon test script for adding to cart', async ({page}) => {
//     await page.goto('https://www.amazon.in');
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 14');
//     await page.locator('//input[@id="nav-search-submit-button"]').click();
//     await page.locator('(//a[@class="a-link-normal s-line-clamp-3 s-link-style a-text-normal" ])[1]').click();
//     await page.locator('(//input[@id="add-to-cart-button"])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//input[@id="add-to-cart-button"])[2]').click();
// });

// test('amazon test script for navigating element using text function', async ({page}) => {
//     await page.goto('https://www.amazon.in/');
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 14');
//     await page.locator('//input[@id="nav-search-submit-button"]').click();
//     await page.locator('//a[text()="Apple iPhone 14 (128GB) - Blue"]').click();
//     await page.locator('(//input[@id="add-to-cart-button"])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//input[@id="add-to-cart-button"])[2]').click();
// });

// test('amazon test script for locating elements by its parent', async ({page}) => {
//     await page.goto('https://www.amazon.in/');
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 14');
//     await page.locator('//input[@id="nav-search-submit-button"]').click();
//     await page.locator('(//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]/parent::a[@class="a-link-normal s-line-clamp-3 s-link-style a-text-normal"])[1]').click();
//     await page.locator('(//input[@id="add-to-cart-button"])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//input[@id="add-to-cart-button"])[2]').click();
// });

// test('amazon test script for locating elements by its ancestor', async ({page}) => {
//     await page.goto('https://www.amazon.in/');
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 14');
//     await page.locator('//input[@id="nav-search-submit-button"]').click();
//     await page.locator('(//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]/ancestor::a[@class="a-link-normal s-line-clamp-3 s-link-style a-text-normal"])[1]').click();
//     await page.locator('(//input[@id="add-to-cart-button"])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//input[@id="add-to-cart-button"])[2]').click();
// });

// test('amazon test script for locating elements by its following sibling', async ({page}) => {
//     await page.goto('https://www.amazon.in/');
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 14');
//     await page.locator('//input[@id="nav-search-submit-button"]').click();
//     await page.locator('(//div[@class="a-row"]/following-sibling::a[@class="a-link-normal s-line-clamp-3 s-link-style a-text-normal"])[1]').click();
//     await page.locator('(//input[@id="add-to-cart-button"])[2]').scrollIntoViewIfNeeded();
//     await page.locator('(//input[@id="add-to-cart-button"])[2]').click();
// });
