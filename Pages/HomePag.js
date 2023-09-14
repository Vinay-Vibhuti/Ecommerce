import { expect } from "@playwright/test"


exports.HomePage = class HomePage{

    constructor(page){
        this.page=page
    }


    async VisualValidationOn(PageName){
        await this.page.goto("https://colorado.fntic.com/"+PageName)
        await expect(this.page).toHaveScreenshot(PageName+".png", {fullPage : true, mask:[this.page.locator("//div[@class='embed-container']")]})
    }
}