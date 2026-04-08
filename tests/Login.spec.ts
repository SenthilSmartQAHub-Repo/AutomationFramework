import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login Page', async ({ page }) => {

  await page.goto('https://senthilsmartqahub.blogspot.com/2025/06/banking-application.html');
  
  const loginPage=new LoginPage(page)
  
  loginPage.doLogin("SenthilSmartQAHub","demo")


});

