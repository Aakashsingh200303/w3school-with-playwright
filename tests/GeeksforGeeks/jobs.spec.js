import { test } from '@playwright/test';

test('Jobs', async ({ page }) => {
    await page.goto('https://www.geeksforgeeks.org/courses?source=google&medium=cpc&device=c&keyword=geeksforgeeks&matchtype=b&campaignid=20039445781&adgroup=147845288105&gad_source=1&gad_campaignid=24351650063&gbraid=0AAAAAC9yBkB-Zere06IDHh22ZmruTNN8O&gclid=CjwKCAjwo5bXBhAEEiwAkgpgXHkwAsD1n-jl-kjNMnukANLQktpm4M0mQPe0iI0eWpMLtLFI-XWFuhoCoZ4QAvD_BwE');
    await page.locator('//li[contains(@class,"headerMainListItem") and .//span[contains(.,"Jobs")]]').hover();
    await page.getByText('Apply Now!', { exact: true }).click();
    await page.locator('//button[@class="jobs_mobile_filter_button__hIRVs"]').click();
    // Select Internship
    await page.getByText('Select job type', { exact: true }).last().click();
    await page.getByText('Experience', { exact: true }).last().click();
    await page.getByText('Job Category', { exact: true }).last().click();
    await page.getByText('Location Type', { exact: true }).last().click();
    await page.getByText('Location', { exact: true }).last().click();

    // await page.getByText('Internship', { exact: true }).last().click();

    // // Select Full Time
    // await page.getByText('Select job type', { exact: true }).last().click();
    // await page.getByText('Full Time', { exact: true }).click();
});

// test('Post Jobs', async ({ page }) => {
//     await page.goto('https://www.geeksforgeeks.org/courses?source=google&medium=cpc&device=c&keyword=geeksforgeeks&matchtype=b&campaignid=20039445781&adgroup=147845288105&gad_source=1&gad_campaignid=24351650063&gbraid=0AAAAAC9yBkB-Zere06IDHh22ZmruTNN8O&gclid=CjwKCAjwo5bXBhAEEiwAkgpgXHkwAsD1n-jl-kjNMnukANLQktpm4M0mQPe0iI0eWpMLtLFI-XWFuhoCoZ4QAvD_BwE');
//     await page.locator('//li[contains(@class,"headerMainListItem") and .//span[contains(.,"Jobs")]]').hover();
//     await page.getByText('Post Jobs', { exact: true }).click();
// });

// test('Jobs Updates', async ({ page }) => {
//     await page.goto('https://www.geeksforgeeks.org/courses?source=google&medium=cpc&device=c&keyword=geeksforgeeks&matchtype=b&campaignid=20039445781&adgroup=147845288105&gad_source=1&gad_campaignid=24351650063&gbraid=0AAAAAC9yBkB-Zere06IDHh22ZmruTNN8O&gclid=CjwKCAjwo5bXBhAEEiwAkgpgXHkwAsD1n-jl-kjNMnukANLQktpm4M0mQPe0iI0eWpMLtLFI-XWFuhoCoZ4QAvD_BwE');
//     await page.locator('//li[contains(@class,"headerMainListItem") and .//span[contains(.,"Jobs")]]').hover();
//     await page.getByText('Jobs Updates', { exact: true }).click();
// });

// test('Share Interview Experience', async ({ page }) => {
//     await page.goto('https://www.geeksforgeeks.org/courses?source=google&medium=cpc&device=c&keyword=geeksforgeeks&matchtype=b&campaignid=20039445781&adgroup=147845288105&gad_source=1&gad_campaignid=24351650063&gbraid=0AAAAAC9yBkB-Zere06IDHh22ZmruTNN8O&gclid=CjwKCAjwo5bXBhAEEiwAkgpgXHkwAsD1n-jl-kjNMnukANLQktpm4M0mQPe0iI0eWpMLtLFI-XWFuhoCoZ4QAvD_BwE');
//     await page.locator('//li[contains(@class,"headerMainListItem") and .//span[contains(.,"Jobs")]]').hover();
//     await page.getByText('Share Interview Experience', { exact: true }).click();
// });
