import { test } from '../Fixtures/POMFixtures';
import { LoginPage } from '../pages/LoginPage';
import dotenv from "dotenv"
import { HomePage } from '../pages/HomePage';
import { CreditCardPage } from '../pages/CreditCardPage';

dotenv.config({ path: "./DotEnv/.env" })

test('Credit Card Application', async ({ page, loginPageObj, HomePageObj, CreditCardPageObj }) => {

  
  await loginPageObj.loadPage(process.env.URL as string)
  const logindata=await loginPageObj.readingValuefromCSV("Login.csv")
  await loginPageObj.doLogin(logindata[0].username,logindata[0].password)
  await page.waitForTimeout(5000)
 
  await HomePageObj.clickOnCreditCardApplication()
  await page.waitForTimeout(5000)
  
  //await CreditCardPageObj.fillCreditCardApplicationForm();//passing the values 
  
});

