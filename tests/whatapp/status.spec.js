import { test, expect } from '@playwright/test';

test.describe('WhatsApp Status Section Testing', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://web.whatsapp.com/');
        
        // Wait for WhatsApp to load
        await expect(page.locator('#pane-side'))
            .toBeVisible({ timeout: 60000 });
    });

    // Feature 1: Verify Status section
    test('Verify Status section is visible', async ({ page }) => {

        const status = page.getByText('Status', {
            exact: true
        }).first();

        await expect(status).toBeVisible();

    });

    // Feature 2: Verify My Status option
    test('Verify My Status option', async ({ page }) => {

        const myStatus = page.getByText(/My status/i).first();

        await expect(myStatus).toBeVisible();

    });

    // Feature 3: Verify Add Status option
    test('Verify Add Status option', async ({ page }) => {

        const addStatus = page.getByText(
            /Add status|Add to my status/i
        ).first();

        await expect(addStatus).toBeVisible();

    });

    // Feature 4: Verify contact status updates
    test('Verify contact status updates', async ({ page }) => {

        const status = page.getByText('Status', {
            exact: true
        }).first();

        await status.click();

        await expect(
            page.getByText(/Recent updates|Viewed updates/i)
        ).toBeVisible({ timeout: 15000 });

    });

    // Feature 5: Verify opening a contact status
    test('Verify opening a contact status', async ({ page }) => {

        const status = page.getByText('Status', { exact: true }).first();

        await status.click();

        const contactStatus = page.locator(
            '[role="listitem"]'
        ).first();

        await expect(contactStatus).toBeVisible({
            timeout: 15000
        });

        await contactStatus.click();

    });

});
