  import{test} from '@playwright/test';
test ('login',async({page})=>{
    await page.goto('https://www.instagram.com/accounts/login/');
    await page.locator('//div[@class="x9ri80z x9pwknu x10l6tqk x9f619 xy75621 x1yrsyyn x1icxu4v x10b6aqq x25sj25 xni59qk"]').isVisible();
    // Username
    await page.getByRole('textbox', { name: 'Mobile number, username or email' }).fill('aakashsingh9744');
    // Password
    await page.getByRole('textbox', { name: 'Password' }).fill('Aakash@123');
    // Login button
    await page.getByRole('button', { name: 'Log in' }).first().click();
    await page.getByRole('button', { name: 'Not now' }).click();
});

test('Forget',async({page})=>{
   // Open the Instagram login page 
   await page.goto('https://www.instagram.com/accounts/login/');
   // Click the element intended to open the Forgot Password page
   await page.locator('(//span[@class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft"])[2]').click();
   // Enter the username in textbox
   await page.getByRole('textbox', { name: 'Mobile number, username or email' }).fill('aakashsingh9744');
   await page.getByRole('button', { name: 'Continue' }).first().click();
   // Click the first & Second Continue button
   await page.locator('(//input[@aria-checked="false"])[1]').click();
   await page.locator('(//input[@aria-checked="false"])[2]').click();
});

test('Reset',async({page})=>{
    // Open the Instagram password reset page directly
   await page.goto('https://www.instagram.com/accounts/password/reset/');
   await page.locator('//div[@class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xc5r6h4 xqeqjp1 x1phubyo x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1ypdohk xdl72j9 x2lah0s x3ct3a4 xdj266r x14z9mp xat24cr x1lziwak x2lwn1j xeuugli xexx8yu xyri2b x18d9i69 x1c1uobl x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1fmog5m xu25z0z x140muxe xo1y3bh x1q0g3np x1lku1pv x1a2a7pz xt0psk2 x1n2onr6 x87ps6o x95da8x x1fey0fg"]').click();
})


test('Instagram Create New Account', async ({ page }) => {
      // creating new account .
    await page.goto('https://www.instagram.com/accounts/login/');
    await page.locator('(//div[@class="x3nfvp2 x1n2onr6 xh8yej3"])[4]').click();
    await page.getByText('Mobile number or email').last().fill('test@example.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('TestPassword123!');
    await page.getByRole('combobox', { name: 'Month' }).click();
    await page.getByRole('option', { name: 'January', exact: true }).click();
    await page.getByRole('combobox', { name: 'Day' }).click();
    await page.getByRole('option', { name: '5', exact: true }).click();
    await page.getByRole('combobox', { name: 'Year' }).click();
    await page.getByRole('option', { name: '2000', exact: true }).click();
    await page.getByRole('textbox', { name: 'Full name' }).fill('Test User');
    await page.locator('//input[@aria-label="Username"]').fill('testuser12345');
    await page.getByRole('button', { name:'Submit' }).click();
});