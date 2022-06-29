import { expect, test } from "@playwright/test";


test("contact to exist and have text.", async ({ page }) => {
  await page.goto("/contact");
  expect(await page.textContent("h1")).toBe("Contact");
});

test("projects page expected to have the title text", async ({ page }) => {
  await page.goto("/projects");
  expect(await page.textContent("h1")).toBe("Projects");
});

test("projects page expected to have the torten-xyz card.", async ({
  page,
}) => {
  await page.goto("/projects");

  const card = page.locator(".grid-group .card");
  await expect(card).toBeVisible();
  const title = page.locator(".grid-group .card h1");
  await expect(title).toHaveText("torten.xyz");

  const desc = page.locator(".grid-group .card h3");
  await expect(desc).toHaveText("My personal website for blogs and stuff.");
});
