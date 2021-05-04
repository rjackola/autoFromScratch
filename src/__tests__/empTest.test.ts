import { Builder, Capabilities } from "selenium-webdriver"
const chromedriver = require('chromedriver')
import {EmployeePage} from '../pageObjects/employeePage'

const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myPage = new EmployeePage(myDriver, 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html')
test('Opens Employee Manager', async () => {
    await myPage.navigate()
    await myPage.createEmployee()
    await myPage.editEmployee('New Employee', {name: 'Steve', phone: '1231231234', email: 'dre@gmail.com', title: 'Teacher'})
    await myPage.driver.quit()
})