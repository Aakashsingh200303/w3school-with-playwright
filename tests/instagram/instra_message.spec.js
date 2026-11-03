 import{test} from '@playwright/test';
  test ('login',async({page})=>{
    
      await page.goto('https://www.instagram.com/accounts/login/');
      // Username
      await page.getByRole('textbox', { name: 'Mobile number, username or email' }).fill('aakashsingh9744');
      // Password
      await page.getByRole('textbox', { name: 'Password' }).fill('Aakash@123');
      // Click the Log in button to log in to Instagram
      await page.getByRole('button', { name: 'Log in' }).first().click();
      // Click the Not now button to dismiss the follow-up popup
      await page.getByRole('button', { name: 'Not now' }).click();

        // Click the Messages navigation icon
        await page.locator('(//div[@class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p"])[4]').click();
        // Click the first conversation item in the messages list
        await page.locator('(//div[@class="html-div xdj266r x14z9mp xat24cr x1lziwak x1qjc9v5 x9f619 x78zum5 xdt5ytf x1iyjqo2 xl56j7k xeuugli x13jy36j x64bnmy x1y1aw1k xwib8y2"])[1]').click();
        // Open the conversation with Aakash Singh
        await page.locator('(//span[@title="Aakash Singh"])[1]').click();
      
      // Enter a message in the chat message box
      await page.locator('//div[@class="xzsf02u x1a2a7pz x1n2onr6 x14wi4xw notranslate"]').fill('Hi ka ho kareja😜');
      await page.keyboard.press('Enter');
      await page.getByRole('button', { name: 'Choose an emoji' }).click();

        // Click the calling audio & vc.
        await page.locator('(//div[@class="x6s0dn4 x78zum5 xdt5ytf xl56j7k"])[2]').click();
        await page.goto('https://www.instagram.com/direct/t/17845902152616667/');
        await page.locator('(//div[@class="x6s0dn4 x78zum5 xdt5ytf xl56j7k"])[3]').click();

        // Click the second matching element
        await page.locator('(//div[@class="x6s0dn4 x78zum5 xdt5ytf xl56j7k"])[4]').click();
        await page.goto('https://www.instagram.com/direct/t/17845902152616667/');

      // Click the General tab in the inbox
      await page.goto('https://www.instagram.com/direct/t/17845902152616667/');
      await page.locator('//span[contains(text(),"General")]').click();
      // Open the first conversation
      await page.locator('(//span[@title="⚔️🚩Sarpanch _JI🚩‼️"])[1]').click();

      // Open the specified Instagram URL again
      await page.goto('https://www.instagram.com/direct/t/17845902152616667/');
      // Click the Requests tab in the inbox
      await page.locator('//span[contains(text(),"Requests")]').click();

        // Enter a username in the search input
        await page.goto('https://www.instagram.com/explore/');
        await page.locator('//input[@aria-label="Search input"]').fill('ak__s__03');
        await page.keyboard.press('Enter');
        await page.locator('(//div[@class="x9f619 x1n2onr6 x1ja2u2z xdt5ytf x2lah0s x193iq5w xeuugli xamitd3 x78zum5"])[1]').click();
  });