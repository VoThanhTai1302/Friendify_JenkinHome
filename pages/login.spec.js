const { test, expect, chromium } = require("@playwright/test");

test("Click button Login to navigation Login screen", async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  //url friendify
  await page.goto("https://friendify.ai/");
  await page.click('//*[@id="__next"]/div/header/div/div[2]/div[1]/p');

  await page.close();
});
