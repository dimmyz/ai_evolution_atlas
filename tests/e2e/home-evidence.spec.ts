import { expect, test } from '@playwright/test';

test.use({ viewport: { width: 1440, height: 900 } });

test('home editorial shell at 1440x900', async ({ page }) => {
  const pageErrors: string[] = [];
  page.on('pageerror', (error) => {
    pageErrors.push(error.message);
  });

  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'AI Evolution Atlas' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Timeline' })).toBeVisible();
  await page.screenshot({
    path: 'evidence/home-1440x900.png',
    animations: 'disabled',
  });
  await page.getByRole('button', { name: 'Lineage' }).focus();
  await expect(page.getByRole('button', { name: 'Lineage' })).toBeFocused();
  expect(pageErrors, pageErrors.join('\n')).toEqual([]);
});
