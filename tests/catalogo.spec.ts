import { test, expect } from '@playwright/test';

test.describe('Júlia Costa Lash Designer — Catálogo', () => {
  test('página principal carrega corretamente', async ({ page }) => {
    await page.goto('/julia-costa-lash-catalogo/');
    await expect(page).toHaveTitle(/Júlia Costa Lash Designer/);
    await expect(page.locator('h1.logo')).toBeVisible();
    await expect(page.locator('.hero h2')).toBeVisible();
  });

  test('cards de serviços estão presentes', async ({ page }) => {
    await page.goto('/julia-costa-lash-catalogo/');
    const cards = page.locator('.card');
    await expect(cards).toHaveCount(4);
  });

  test('navegação para Stories funciona', async ({ page }) => {
    await page.goto('/julia-costa-lash-catalogo/');
    await page.click('nav a[href="stories.html"]');
    await expect(page).toHaveTitle(/Stories/);
  });

  test('página Stories carrega corretamente', async ({ page }) => {
    await page.goto('/julia-costa-lash-catalogo/stories.html');
    await expect(page).toHaveTitle(/Stories/);
    await expect(page.locator('.stories-hero h2')).toBeVisible();
    const storyCards = page.locator('.story-card');
    await expect(storyCards).toHaveCount(4);
  });
});
