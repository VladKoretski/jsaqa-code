const { chromium } = require("playwright");
const { test, expect } = require("@playwright/test");
const inputData = require("../user");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    //slowMo: 500,
    //devtools: true,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(inputData.login);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(inputData.password);
  await page.getByTestId("login-submit-btn").click();

  const textActual = await page.textContent("h2");
  expect(textActual).toEqual("Моё обучение");

  await browser.close();
})();

(async () => {
  const browser = await chromium.launch({
    headless: false,
    //devtools: true,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("wrong@email.ru");
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill("wrongpassword");
  await page.getByTestId("login-submit-btn").click();

  await expect(
    page.getByText("Вы ввели неправильно логин или пароль")
  ).toBeVisible();

  await browser.close();
})();
