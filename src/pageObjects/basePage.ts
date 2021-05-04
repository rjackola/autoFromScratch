import { By, until, WebDriver } from "selenium-webdriver";

export class BasePage {
    driver: WebDriver
    url: string
    constructor (driver, url) {
        this.driver = driver
        this.url = url
    }

    async navigate() {
        await this.driver.get(this.url)
    }

    async getElement(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        return element
    }

    async click(elementBy: By) {
        return await (await this.getElement(elementBy)).click()
    }

    async setInput(elementBy: By, typing: string) {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(typing)
    }

    async getText(elementBy: By) {
        return (await this.getElement(elementBy)).getText()
    }

    async getValue(elementBy: By) {
        return (await this.getElement(elementBy)).getAttribute('value')
    }
}