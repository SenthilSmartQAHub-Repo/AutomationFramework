import { Locator, Page } from "@playwright/test";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export class CommonLib
{
 
    page:Page

    constructor(page:Page)
    {
       this.page=page;
    }

async loadPage(URL:string)
{
    await this.page.goto(URL)
}

async waitAndClick(element:Locator)
{
    await this.page.waitForLoadState('load')

    await element.click()
}
async refereshPage()
{
    await this.page.reload()
}
async selectOptionFromDropdown(dropdown:Locator,text:string)
{
    await dropdown.selectOption(text)
}
async readingValuefromCSV(FilePath:string):Promise<any[]>
{
const csvData=await parse(fs.readFileSync(path.join("./TestData/",FilePath)), {
    columns: true,
    skip_empty_lines: true
  });
  return csvData;   

}



}