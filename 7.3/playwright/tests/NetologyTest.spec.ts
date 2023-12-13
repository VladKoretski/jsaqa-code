const { chromium } = require("playwright");
const inputData = require("../user");
import { test, expect } from "@playwright/test";

test("Test 1. Real login and password", async ({ page }) => {
  const browser = await chromium.launch();
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
});

test("Test 2. Wrong login and password", async ({ page }) => {
  const browser = await chromium.launch();
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
});
