
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Test draw button to display bot list', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
    const button = await driver.findElement(By.id('choices'))
    const showBots = await button.isDisplayed()
    expect(showBots).toBe(true)
    
})

test('Test add to duo button will add bot to list', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(3000)
    const botButton = await driver.findElement(By.id('player-duo'))
    const showDuoBots = await botButton.isDisplayed()
    expect(showDuoBots).toBe(true)
})