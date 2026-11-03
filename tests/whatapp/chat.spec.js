import { test, expect } from '@playwright/test';



    // Feature 1: Verify chat list is visible
    test('Verify chat list', async ({ page }) => {
        await page.goto('https://web.whatsapp.com/');
        await expect(page.locator('body')).toBeVisible();// Wait for WhatsApp Web to load
        await expect( page.locator('#pane-side')).toBeVisible({ timeout: 60000 });// Verify the chat list
    });

//     // Feature 2: Verify search chat field
//     test('Verify search chat field', async ({ page }) => {

//         await expect(
//             page.locator('#pane-side')
//         ).toBeVisible({ timeout: 60000 });

//         await expect(
//             page.locator(
//                 'div[contenteditable="true"][role="textbox"]'
//             ).first()
//         ).toBeVisible();

//     });

//     // Feature 3: Search a contact
//     test('Verify contact search', async ({ page }) => {

//         await expect(
//             page.locator('#pane-side')
//         ).toBeVisible({ timeout: 60000 });

//         // Locate the search field
//         const search = page.getByRole('textbox', {
//             name: /search/i
//         });

//         await expect(search).toBeVisible();

//         // Search for a contact
//         await search.fill('Aakash');

//         await expect(search).toHaveValue('Aakash');

//     });

//     // Feature 4: Open a chat
//     test('Verify opening a chat', async ({ page }) => {

//         await expect(
//             page.locator('#pane-side')
//         ).toBeVisible({ timeout: 60000 });

//         // Search for a contact
//         const search = page.getByRole('textbox', {
//             name: /search/i
//         });

//         await search.fill('Aakash');

//         // Click the matching contact if it exists
//         const contact = page.getByText('Aakash', {
//             exact: true
//         }).first();

//         await expect(contact).toBeVisible({
//             timeout: 15000
//         });

//         await contact.click();

//     });

//     // Feature 5: Verify message input field
//     test('Verify message input field', async ({ page }) => {

//         await expect(
//             page.locator('#pane-side')
//         ).toBeVisible({ timeout: 60000 });

//         // Search for a contact
//         const search = page.getByRole('textbox', {
//             name: /search/i
//         });

//         await search.fill('Aakash');

//         // Open the contact
//         const contact = page.getByText('Aakash', {
//             exact: true
//         }).first();

//         await expect(contact).toBeVisible({
//             timeout: 15000
//         });

//         await contact.click();

//         // Verify the message input
//         const messageBox = page.locator(
//             'footer [contenteditable="true"]'
//         );

//         await expect(messageBox).toBeVisible({
//             timeout: 15000
//         });

//     });

// });
