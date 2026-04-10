import { Locator, Page } from "@playwright/test";
import { CommonLib } from "../Utils/CommonPlaywrightWrapper";



export class HomePage extends CommonLib
{


    private readonly welcomemsg:Locator
    private readonly CreditCardApplicationLink:Locator
    constructor(page:Page)
    {
        super(page)
        this.welcomemsg=page.locator('#welcomeUser')
        this.CreditCardApplicationLink=page.getByRole('link', { name: 'Credit Card Application' })    
    }

    async getWelcomeMsg()
    {
        console.log(await this.welcomemsg.textContent())
        return this.welcomemsg.textContent()
    }
    async clickOnCreditCardApplication()
    {
        await this.waitAndClick(this.CreditCardApplicationLink)
    }   


}