"use strict";
require("chromedriver");
const webdriver = require("selenium-webdriver");
const { By, Key, until } = require("selenium-webdriver");
const { assert, expect } = require("chai");
const HomePage = require("../pages/home.page");
describe("Luma test", () => {
  let driver;
  let homePage;
  before(() => {
    driver = new webdriver.Builder().forBrowser("chrome").build();
    homePage = new HomePage(driver);
  });
  after(async () => {
    await driver.quit();
  });
  it("Open Luma homepage", async () => {
    await homePage.getHomePage();
    await driver.wait(until.elementLocated(By.xpath(`//title`)));
    expect(await homePage.getPageTitle()).to.contain("Home Page");
  });
  it("Create Account", async () => {
    await homePage.getCreateAccountBtn().click();
    expect(await driver.findElement(By.xpath(`//h1`)).getText()).to.eq(
      "Create New Customer Account"
    );
  });
});
