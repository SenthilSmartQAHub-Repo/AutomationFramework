import { expect, Locator, Page } from "@playwright/test";
import { HomePage } from "./HomePage";


export class LoginPage
{

  page:Page;
  private readonly usernameTextbox:Locator;
  private readonly passwordTextbox:Locator;
  private readonly loginButton:Locator;
    constructor(page:Page)
   {
    this.page=page;
    this.usernameTextbox=page.locator("#username")
    this.passwordTextbox=page.getByPlaceholder("Enter your password")
    this.loginButton=page.getByText("Login")
   }

async doLogin(username:string,password:string)
{
    await this.usernameTextbox.fill(username)
    await this.passwordTextbox.fill(password)
    await this.loginButton.click()
    const homepage=new HomePage(this.page)
    expect(homepage.getWelcomeMsg()).toBe("Welcome to SenthilSmartQAHub")
}


}