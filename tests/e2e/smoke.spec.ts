import { expect, test } from '@playwright/test';

test('home boots with atlas purpose and no pageerror', async ({ page }) => {
  const pageErrors: string[] = [];
  page.on('pageerror', (error) => {
    pageErrors.push(error.message);
  });

  await page.goto('/');

  await expect(page.getByTestId('atlas-root')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1, name: 'AI Evolution Atlas' })).toBeVisible();
  await expect(
    page.getByText(/source-grounded explainer of foundation-model history from 2017 to 2026/i),
  ).toBeVisible();
  expect(pageErrors, pageErrors.join('\n')).toEqual([]);
});
