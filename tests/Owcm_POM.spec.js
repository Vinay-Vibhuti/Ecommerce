import{test, expect} from '@playwright/test'
import { HomePage } from '../Pages/HomePag'


const PageData = require('./test-data.json')
for(const dat of PageData) {
    test(`Visual Validation ${dat.PageName}`,async ({page})=>{
        const NewPage = new HomePage(page)
        await NewPage.VisualValidationOn(dat.PageName)

    })
}
