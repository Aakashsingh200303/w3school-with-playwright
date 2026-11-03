import { test } from '@playwright/test';

test('Instagram More Menu', async ({ page }) => {

    await page.goto('https://www.instagram.com/accounts/login/');
      await page.locator('//div[@class="x9ri80z x9pwknu x10l6tqk x9f619 xy75621 x1yrsyyn x1icxu4v x10b6aqq x25sj25 xni59qk"]').isVisible();
      // Username
      await page.getByRole('textbox', { name: 'Mobile number, username or email' }).fill('aakashsingh9744');
      // Password
      await page.getByRole('textbox', { name: 'Password' }).fill('Aakash@123');
      // Login button
      await page.getByRole('button', { name: 'Log in' }).first().click();
      await page.getByRole('button', { name: 'Not now' }).click();
      
    // Open More menu
    await page.locator('(//div[@class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p"])[10]').click();
    // Click Settings
    await page.locator('(//div[@class="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1qjc9v5 x9f619 x78zum5 xdt5ytf x1iyjqo2 xl56j7k xeuugli"])[1]').click();
    await page.waitForTimeout(1500);
    await page.goBack();

    // Open More menu again
    await page.locator('(//div[@class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p"])[10]').click();
    // Click Your Activity
    await page.locator('(//div[@class="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1qjc9v5 x9f619 x78zum5 xdt5ytf x1iyjqo2 xl56j7k xeuugli"])[2]').click();
    await page.waitForTimeout(1500);
    // Go back to the previous page
    await page.goBack();

    // Open More menu again
    await page.locator('(//div[@class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p"])[10]').click();
    // Click Saved
    await page.locator('(//div[@class="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1qjc9v5 x9f619 x78zum5 xdt5ytf x1iyjqo2 xl56j7k xeuugli"])[3]').click();
    await page.waitForTimeout(1500);
    // Go back to the previous page
    await page.goBack();

    // Open More menu again
    await page.locator('(//div[@class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p"])[10]').click();
    // Click Switch appearance
    await page.locator('(//div[@class="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1qjc9v5 x9f619 x78zum5 xdt5ytf x1iyjqo2 xl56j7k xeuugli"])[4]').click();
    await page.waitForTimeout(1000);

    // Open More menu again if it closes
    await page.locator('(//div[@class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p"])[10]').click();
    // Click Scheduled content
    await page.locator('(//div[@class="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1qjc9v5 x9f619 x78zum5 xdt5ytf x1iyjqo2 xl56j7k xeuugli"])[5]').click();
    await page.waitForTimeout(1500);
    // Go back to the previous page
    await page.goBack();

    // Open More menu again
    await page.locator('(//div[@class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p"])[10]').click();
    // Click Report a problem
    await page.locator('(//div[@class="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1qjc9v5 x9f619 x78zum5 xdt5ytf x1iyjqo2 xl56j7k xeuugli"])[6]').click();
    await page.waitForTimeout(1500);
    // Go back to the previous page
    await page.goBack();
    // Open More menu again
    await page.locator('(//div[@class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p"])[10]').click();
    // Click Switch accounts
    await page.locator('(//div[@class="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1qjc9v5 x9f619 x78zum5 xdt5ytf x1iyjqo2 xl56j7k xeuugli"])[7]D').click();

});
