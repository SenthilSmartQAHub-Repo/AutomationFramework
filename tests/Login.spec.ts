import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import dotenv from "dotenv"


dotenv.config({ path: "./DotEnv/.env" })

test('Login Page', async ({ page }) => {

  const loginPage=test
  await loginPage.loadPage(process.env.URL as string)
  const logindata=await loginPage.readingValuefromCSV("Login.csv")
  await loginPage.doLogin(logindata[0].username,logindata[0].password)
  await page.waitForTimeout(5000)

  
});

