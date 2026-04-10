import { expect, Locator, Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { CommonLib } from "../Utils/CommonPlaywrightWrapper";


export class LoginPage  extends CommonLib
{


  private readonly usernameTextbox:Locator;
  private readonly passwordTextbox:Locator;
  private readonly loginButton:Locator;
    constructor(page:Page)
   {
     super(page)
    this.page=page;
    this.usernameTextbox=page.locator("#username")
    this.passwordTextbox=page.getByPlaceholder("Enter your password")
    this.loginButton=page.getByText("Login",{exact:true})
   }

async doLogin(username:string,password:string)
{
    await this.usernameTextbox.fill(username)
    await this.passwordTextbox.fill(password)
    await this.waitAndClick(this.loginButton)
    const homepage=new HomePage(this.page)
    expect(await homepage.getWelcomeMsg()).toBe("Welcome to SenthilSmartQAHub")
}


}