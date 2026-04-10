import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import dotenv from "dotenv"
import { HomePage } from '../pages/HomePage';
import { CreditCardPage } from '../pages/CreditCardPage';

dotenv.config({ path: "./DotEnv/.env" })

test('Credit Card Application', async ({ page }) => {

  const loginPage=new LoginPage(page)
  await loginPage.loadPage(process.env.URL as string)
  const logindata=await loginPage.readingValuefromCSV("Login.csv")
  await loginPage.doLogin(logindata[0].username,logindata[0].password)
  await page.waitForTimeout(5000)
  const homePage=new HomePage(page)
  await homePage.clickOnCreditCardApplication()
  await page.waitForTimeout(5000)
  const creditCardPage=new CreditCardPage(page)
  //await creditCardPage.fillCreditCardApplicationForm();//passing the values 
  
});

