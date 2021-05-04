import { By } from 'selenium-webdriver'
import {BasePage} from './basePage'

export class EmployeePage extends BasePage {
    constructor (driver, url) {
        super(driver, url)
    }
    addEmployee = By.css('li[name="addEmployee"]')
    name = By.css('p[name="employeeName"]')
    nameInput = By.css('input[name="nameEntry"]')
    phoneInput = By.css('input[name="phoneEntry"]')
    emailInput = By.css('input[name="emailEntry"]')
    titleInput = By.css('input[name="titleEntry"]')
    saveButton = By.id('saveBtn')

    async createEmployee() {
        return await this.click(this.addEmployee)
    }
    /**
     * 
     * @param change The name of the employee that you want to edit
     * @param param1 An object with a new name, phone, email and title
     */
    async editEmployee(change, editInfo) {
        await this.clickEmployee(change)

        await this.setInput(this.nameInput, editInfo.name)
        await this.setInput(this.phoneInput, editInfo.phone)
        await this.setInput(this.emailInput, editInfo.email)
        await this.setInput(this.titleInput, editInfo.title)

        await this.click(this.saveButton)

        expect(await this.getText(this.name)).toBe(editInfo.name)
        expect(await this.getValue(this.titleInput)).toBe(editInfo.title)
    }

    async clickEmployee(employeeName){
        await this.getElement(By.xpath(`//*[text()="${employeeName}"]`))
        this.click(By.xpath(`//*[text()="${employeeName}"]`))
    }
}