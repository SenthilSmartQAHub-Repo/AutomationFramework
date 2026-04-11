import { test } from '../Fixtures/POMFixtures';
import { LoginPage } from '../pages/LoginPage';
import dotenv from "dotenv"


dotenv.config({ path: "./DotEnv/.env" })

test('Login Page', async ({ page ,loginPageObj}) => {


  
  await loginPageObj.loadPage(process.env.URL as string)
  const logindata=await loginPageObj.readingValuefromCSV("Login.csv")
  await loginPageObj.doLogin(logindata[0].username,logindata[0].password)
  await page.waitForTimeout(5000)

  
});

