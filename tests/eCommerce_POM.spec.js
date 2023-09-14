import {test, expect} from '@playwright/test'

test('Practice', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.click("#male")
    await expect.soft(page.locator("#male")).toBeChecked();
    await page.click("#saturday")
    await expect(page.locator("#saturday")).toBeChecked();
    await page.selectOption("//select[@id='country']","India")


    const options =  await page.$$("//select[@id='country']/option")
    for (const op of options)
    {
        console.log(await op.textContent())
    }

    await page.selectOption("#colors",["Red", "Blue"]) 


     page.on("dialog", async dialog=>{
        expect(dialog.message()).toContain("Please enter your name:")
        dialog.accept("Vinay")
    })

    await page.click("//button[normalize-space()='Prompt']")
})


test("Visual Comparison", async ({page})=>{

    await page.goto("https://colorado.fntic.com/")
    await expect(page).toHaveScreenshot("Home_Mask.png" , 
    {fullPage: true, mask:[page.locator("//img[@class='left mt-3 home-bio-img']"), 
    page.locator("//div[@class='col-lg-2 d-none d-lg-block index-employee-info text-right']")],
    maxDiffPixels:380
})
    


})



test.only("Validate Links", async ({page})=>{

    await page.goto("https://colorado.fntic.com/")
    const Menu = await page.$$("//div[@id='mynavbar']")
    for(const Me of Menu)
    {
        console.log(await Me.textContent())
    }
})
