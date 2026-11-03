
import { test } from '@playwright/test';

test('Login',async({page})=>{
    //login the webpage.
    await page.goto('https://www.geeksforgeeks.org/courses?source=google&medium=cpc&device=c&keyword=geeksforgeeks&matchtype=b&campaignid=20039445781&adgroup=147845288105&gad_source=1&gad_campaignid=20039445781&gbraid=0AAAAAC9yBkDt-I99Zvuaq06lNgOfcOdez&gclid=CjwKCAjwgJHXBhBGEiwAHohJq6vbA1kwosVwPKVg1y4oXPQ7bgB9P5qb-_P_8oMqX-oWYYUAsEl9mhoC1XkQAvD_BwE');
    await page.locator('//button[@class="signinButton gfg_loginModalBtn login-modal-btn"]').click();
    await page.locator('//input[@placeholder="Username or Email"]').fill('aakashsingh123@gamil.com');
    await page.locator('//input[@placeholder="Enter password"]').fill('Aakash@123');
    await page.locator('//div[@class="password-toggle-icon eye-close"]').click();
    await page.locator('//span[contains(text(),"Sign In")]').click();
})

test('Courses', async ({ page }) => {
    // Open the GeeksforGeeks Courses page
    await page.goto('https://www.geeksforgeeks.org/courses?source=google&medium=cpc&device=c&keyword=geeksforgeeks&matchtype=b&campaignid=20039445781&adgroup=147845288105&gad_source=1&gad_campaignid=20039445781&gbraid=0AAAAAC9yBkDt-I99Zvuaq06lNgOfcOdez&gclid=CjwKCAjwgJHXBhBGEiwAHohJq6vbA1kwosVwPKVg1y4oXPQ7bgB9P5qb-_P_8oMqX-oWYYUAsEl9mhoC1XkQAvD_BwE');
    //Verify the Courses menu and hover over it.click on All Courses
    await page.locator('//li[contains(@class,"headerMainListItem") and .//span[contains(.,"Courses")]]').hover();
    await page.getByText('All Courses', { exact: true }).click();
});

// Verify the Tutorials menu .

// Verify the Practice menu.
test('Practice', async ({ page }) => {
    await page.goto('https://www.geeksforgeeks.org/courses?source=google&medium=cpc&device=c&keyword=geeksforgeeks&matchtype=b&campaignid=20039445781&adgroup=147845288105&gad_source=1&gad_campaignid=20039445781&gbraid=0AAAAAC9yBkDt-I99Zvuaq06lNgOfcOdez&gclid=CjwKCAjwgJHXBhBGEiwAHohJq6vbA1kwosVwPKVg1y4oXPQ7bgB9P5qb-_P_8oMqX-oWYYUAsEl9mhoC1XkQAvD_BwE');
    await page.locator('//li[contains(@class,"headerMainListItem") and .//span[contains(.,"Practice")]]').hover();
    await page.getByText('Practice Coding Problems', { exact: true }).click();
});

// Verify the Jobs menu.
test('Jobs', async ({ page }) => {
    await page.goto('https://www.geeksforgeeks.org/courses?source=google&medium=cpc&device=c&keyword=geeksforgeeks&matchtype=b&campaignid=20039445781&adgroup=147845288105&gad_source=1&gad_campaignid=20039445781&gbraid=0AAAAAC9yBkDt-I99Zvuaq06lNgOfcOdez&gclid=CjwKCAjwgJHXBhBGEiwAHohJq6vbA1kwosVwPKVg1y4oXPQ7bgB9P5qb-_P_8oMqX-oWYYUAsEl9mhoC1XkQAvD_BwE');
    await page.locator('//li[contains(@class,"headerMainListItem") and .//span[contains(.,"Jobs")]]').hover();
    await page.getByText('Post Jobs', { exact: true }).click();
});