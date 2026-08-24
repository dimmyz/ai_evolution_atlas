import { expect, test } from '@playwright/test';

test('integrated slice: select, search, lineage, and source links', async ({ page }) => {
  const pageErrors: string[] = [];
  page.on('pageerror', (error) => {
    pageErrors.push(error.message);
  });

  await page.goto('/');
  await expect(page.getByTestId('atlas-root')).toBeVisible();
  await expect(page.getByTestId('atlas-timeline')).toBeVisible();
  await expect(page.getByTestId('discovery-panel')).toBeVisible();

  await page.getByRole('button', { name: 'Start exploring' }).click();
  await expect(page.getByRole('heading', { name: 'Transformer paper' })).toBeVisible();
  await expect(page.getByTestId('atlas-sources').getByRole('link')).toHaveCount(1);

  await page.getByLabel(/search titles, summaries, and names/i).fill('GPT-4');
  const gpt4Result = page.getByTestId('discovery-panel').getByRole('button', { name: 'GPT-4 technical report' });
  await expect(gpt4Result).toBeVisible();
  await gpt4Result.click();
  await expect(page.getByTestId('atlas-sources').getByRole('link', { name: /GPT-4 Technical Report/i })).toBeVisible();

  await page.getByRole('button', { name: 'Lineage' }).click();
  await expect(page.getByText(/choose an entity/i)).toBeVisible();
  await page.getByTestId('lineage-view').getByRole('button', { name: /OpenAI/ }).click();
  await expect(page.getByTestId('lineage-view')).toBeVisible();
  await expect(page.getByTestId('lineage-view').getByRole('heading', { name: 'OpenAI' })).toBeVisible();
  await expect(page.locator('#atlas-detail-heading')).toHaveText('OpenAI');
  await expect(page.getByTestId('lineage-canvas')).toBeVisible();
  expect(await page.locator('svg marker').count()).toBeGreaterThan(0);
  await expect(page.locator('svg marker').first()).toHaveAttribute('id', /atlas-arrow/);
  await expect(page.locator('[marker-end*="url(#"]').first()).toHaveAttribute(
    'marker-end',
    /url\(#atlas-arrow/,
  );
  await expect(page.getByRole('link', { name: /GPT-4 Technical Report/i }).first()).toBeVisible();

  await page.getByRole('button', { name: 'Timeline' }).click();
  await expect(page.getByTestId('timeline-entity-highlight')).toBeVisible();
  await expect(
    page.getByTestId('atlas-timeline').getByRole('button', { name: /GPT-4 technical report/i }).first(),
  ).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#atlas-detail-heading')).toHaveText('OpenAI');

  expect(pageErrors, pageErrors.join('\n')).toEqual([]);
});
