import{test} from '@playwright/test';

test(' DSA/placement',async({page})=>{
    await page.goto('https://www.geeksforgeeks.org/courses/category/dsa-system-design?_gl=1*1wyl382*_up*MQ..&gclid=CjwKCAjwgJHXBhBGEiwAHohJq6vbA1kwosVwPKVg1y4oXPQ7bgB9P5qb-_P_8oMqX-oWYYUAsEl9mhoC1XkQAvD_BwE&gbraid=0AAAAAC9yBkDt-I99Zvuaq06lNgOfcOdez');
    await page.locator('//li[contains(@class,"headerMainListItem") and .//span[contains(.,"Courses")]]').hover();
    await page.getByText('DSA / Placements', { exact: true }).click();
    await page.locator('//i[@class="dropdown icon"]').click();
    await page. locator('//div[@class="active selected item"]').click();
});

test('DA/Data Science&AI',async({page})=>{
    await page.goto('https://www.geeksforgeeks.org/courses/category/dsa-system-design?_gl=1*1wyl382*_up*MQ..&gclid=CjwKCAjwgJHXBhBGEiwAHohJq6vbA1kwosVwPKVg1y4oXPQ7bgB9P5qb-_P_8oMqX-oWYYUAsEl9mhoC1XkQAvD_BwE&gbraid=0AAAAAC9yBkDt-I99Zvuaq06lNgOfcOdez');
    await page.locator('//li[contains(@class,"headerMainListItem") and .//span[contains(.,"Courses")]]').hover();
    await page.getByText('DA / Data Science & AI', { exact: true }).click();
    await page.waitForTimeout(2000);
    await page.locator('//input[@placeholder="What do you want to learn today?"]').fill('java');
    await page.keyboard.press('Enter');
});

    test('GATE Prep',async({page})=>{
    await page.goto('https://www.geeksforgeeks.org/courses/category/dsa-system-design?_gl=1*1wyl382*_up*MQ..&gclid=CjwKCAjwgJHXBhBGEiwAHohJq6vbA1kwosVwPKVg1y4oXPQ7bgB9P5qb-_P_8oMqX-oWYYUAsEl9mhoC1XkQAvD_BwE&gbraid=0AAAAAC9yBkDt-I99Zvuaq06lNgOfcOdez');
    await page.locator('//li[contains(@class,"headerMainListItem") and .//span[contains(.,"Courses")]]').hover();
    await page.getByText('GATE Prep', { exact: true }).click();
    await page.waitForTimeout(2000);
    await page.mouse.wheel(0, 500);
    await page.locator('(//button[@class="ui button gateLanding_more_info_btn__oHlkZ"])[1]').click();
    await page.locator('//button[@class="premium_wyg_tab__eXEHG "]').click()
    await page.mouse.wheel(0, 500);
    await page.mouse.wheel(0, 800);
});

test('DevOps Course',async({page})=>{
    await page.goto('https://www.geeksforgeeks.org/courses/category/dsa-system-design?_gl=1*1wyl382*_up*MQ..&gclid=CjwKCAjwgJHXBhBGEiwAHohJq6vbA1kwosVwPKVg1y4oXPQ7bgB9P5qb-_P_8oMqX-oWYYUAsEl9mhoC1XkQAvD_BwE&gbraid=0AAAAAC9yBkDt-I99Zvuaq06lNgOfcOdez');
    await page.locator('//li[contains(@class,"headerMainListItem") and .//span[contains(.,"Courses")]]').hover();
    await page.getByText('DevOps Course', { exact: true }).click();
    await page.locator('(//button[@class="genericActionButton_generic_btn__n9vXy login-modal-btn "])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//button[@class="genericActionButton_generic_btn__n9vXy login-modal-btn "])[1]').click();
    await page.waitForTimeout(2000);
    await page.locator('//span[@class="close"]').click();
    // for (let i = 0; i < 10; i++) {
    // await page.mouse.wheel(0, 500);
    // await page.waitForTimeout(500); }
    await page.getByText('What is DevOps and what does a DevOps engineer do?', { exact: true }).click();
    await page.getByText('Is DevOps a good career choice in India?', { exact: true }).click();
    await page.getByText('Will I learn AWS in this DevOps course?', { exact: true }).click();
});

test('Tutorials', async ({ page }) => {
    await page.goto('https://www.geeksforgeeks.org/courses');
    await page.locator('//li[contains(@class,"headerMainListItem") and .//span[contains(.,"Tutorials")]]').hover();
    await page.getByText('Python', { exact: true }).click();
    await page.locator('//span[@class="gfg-preview-carousel-right"]').click();
    await page.locator('//a[@href="/courses"]').click();
    await page.goto('https://www.geeksforgeeks.org/python/python-programming-language-tutorial/');
    await page.getByText('Python Fundamentals', { exact: true }).click();
    await page.locator('(//a[@href="https://www.geeksforgeeks.org/python/python-variables/"])[1]').click();
    await page.locator('(//a[@href="https://www.geeksforgeeks.org/python/python-operators/"])[1]').click();

});

