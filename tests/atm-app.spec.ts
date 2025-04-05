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

  test.describe('Main Menu Interaction', () => {
    test.beforeEach(async ({ page }) => {
      // Enter PIN before each interaction
      await page.getByTestId('atm-button-btn-8').click();//Enter Pin button
      await page.locator('button:text("1")').click();
      await page.locator('button:text("2")').click();
      await page.locator('button:text("3")').click();
      await page.locator('button:text("4")').click();
      await page.getByRole('button', { name: 'Enter' }).click();
    });

    test('Shoud show balance', async ({ page }) => {
      await expect(page.locator('text=Hi Peter Parker!')).toBeVisible();

      await page.getByTestId('atm-button-btn-6').click(); //balance button
      await expect(page.locator('text=debit card')).toBeVisible();
      await expect(page.locator('text=Your current balance is: $0.00')).toBeVisible();

      await page.getByTestId('atm-button-btn-8').click();
      await expect(page.locator('text=Hi Peter Parker!')).toBeVisible();
    });

    test('Shoud show error on withdraw', async ({ page }) => {
      await expect(page.locator('text=Hi Peter Parker!')).toBeVisible();

      await page.getByTestId('atm-button-btn-5').click(); //withdraw button
      await expect(page.locator('text=Enter amount to withdraw')).toBeVisible();
      await page.locator('button:text("1")').click();
      await page.locator('button:text("0")').click();
      await page.locator('button:text("0")').click();
      await page.locator('button:text("0")').click();
      await expect(page.locator('text=10.00')).toBeVisible();
      await page.getByRole('button', { name: 'Enter' }).click();
      await expect(page.locator('text=Insufficient funds')).toBeVisible(); // :(
    });

    test('Shoud be Able to Deposit', async ({ page }) => {
      await expect(page.locator('text=Hi Peter Parker!')).toBeVisible();

      await page.getByTestId('atm-button-btn-7').click(); //deposit button
      await expect(page.locator('text=Enter amount to deposit')).toBeVisible();

      await page.locator('button:text("1")').click();
      await page.locator('button:text("0")').click();
      await page.locator('button:text("0")').click();
      await page.locator('button:text("0")').click();
      await page.locator('button:text("0")').click();
      await expect(page.locator('text=100.00')).toBeVisible();
      await page.getByRole('button', { name: 'Enter' }).click();

      await expect(page.locator('text=Your current balance is: $100.00')).toBeVisible(); // :(
    });
  });
});
