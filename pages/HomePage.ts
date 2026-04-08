import { Locator, Page } from "@playwright/test";



export class HomePage
{


    private readonly welcomemsg:Locator

    constructor(page:Page)
    {

        this.welcomemsg=page.locator('#welcomeUser')

    }

    async getWelcomeMsg()
    {
        return this.welcomemsg.textContent()
    }


}