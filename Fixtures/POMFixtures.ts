import { CreditCardPage } from "../pages/CreditCardPage"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { test as base } from '@playwright/test';


type PomPages={

    loginPageObj:LoginPage;
    HomePageObj:HomePage;
    CreditCardPageObj:CreditCardPage;
}
export const test=base.extend<PomPages>({

    loginPageObj:async({page},use)=>{       
        const loginPage=new LoginPage(page)
        await use(loginPage)    

    },
    HomePageObj:async({page},use)=>{
        const homePage=new HomePage(page)
        await use(homePage)
    },          
    CreditCardPageObj:async({page},use)=>{
        const creditCardPage=new CreditCardPage(page)
        await use(creditCardPage)
    }           

})