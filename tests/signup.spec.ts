import { test, expect } from '@playwright/test';

test('signup', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('hydrated')).toBeVisible()

  await expect(page.getByRole('heading', { level: 2, name: 'Signup' })).toBeVisible();

  await page.getByLabel('email').fill('playwright@site.com');

  await page.getByRole('button', {name: 'Signup'}).click();
});
