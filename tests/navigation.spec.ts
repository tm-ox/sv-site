import { test, expect } from '@playwright/test';

// test('navigation smoke test', async ({ page }) => {
//   await page.goto('/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

test('navigation smoke test', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { level: 1, name: '' })).toBeVisible();
  await expect(page).toHaveTitle(/SITE/);
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
