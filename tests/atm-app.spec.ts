import { test, expect } from '@playwright/test';

test.describe('ATM interface', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });
  test('should show the welcome screen and prompt for PIN', async ({ page }) => {
    await expect(page.locator('text=Welcome to the ATM')).toBeVisible();
    await expect(page.locator('text=Enter PIN')).toBeVisible();
  });

  test('should allow PIN input show user not found', async ({ page }) => {
    await page.getByTestId('atm-button-btn-8').click();
    await expect(page.locator('text=Please enter your PIN')).toBeVisible();

    //Click on btn-8 should enable num pad
    await page.locator('button:text("0")').click();
    await page.locator('button:text("0")').click();
    await page.locator('button:text("0")').click();
    await page.locator('button:text("0")').click();
    await page.getByRole('button', { name: 'Enter' }).click();

    await expect(page.locator('text=Client not found')).toBeVisible();
  });

  test('should allow PIN input and navigate to main menu', async ({ page }) => {
    await page.getByTestId('atm-button-btn-8').click();
    await expect(page.locator('text=Please enter your PIN')).toBeVisible();

    //Click on btn-8 should enable num pad
    await page.locator('button:text("9")').click();
    await page.locator('button:text("8")').click();
    await page.locator('button:text("7")').click();
    await page.locator('button:text("6")').click();
    await page.getByRole('button', { name: 'Enter' }).click();

    await expect(page.locator('text=Hi Mary Jane Watson!')).toBeVisible();
  });
});
