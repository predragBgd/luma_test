"use strict";
require("chromedriver");
const webdriver = require("selenium-webdriver");
const { By, Key, until } = require("selenium-webdriver");
const { assert, expect } = require("chai");
const HomePage = require("../pages/home.page");
const AccountCreatePage = require("../pages/accountCreate.page");
const AccountPage = require("../pages/account.page");
const AccountLoginPage = require("../pages/accountLogin.page");
const SalePage = require("../pages/sale.page");
const WomanTeesPage = require("../pages/womanTees.page");

describe("Luma test", () => {
  let driver;
  let homePage;
  let accountCreatePage;
  let accountPage;
  let accountLoginPage;
  let salePage;
  let womanTeesPage;

  let firstName = "Peter";
  let lastName = "Polip";
  let eMail = "peterpolip@loc.loc";
  let password = "passpeter123!";

  before(() => {
    driver = new webdriver.Builder().forBrowser("chrome").build();
    homePage = new HomePage(driver);
    accountCreatePage = new AccountCreatePage(driver);
    accountPage = new AccountPage(driver);
    accountLoginPage = new AccountLoginPage(driver);
    salePage = new SalePage(driver);
    womanTeesPage = new WomanTeesPage(driver);
  });
  after(async () => {
    await driver.quit();
  });
  it("Open Luma homepage", async () => {
    await homePage.getHomePage();
    await driver.wait(until.elementLocated(By.xpath(`//title`)));
    expect(await homePage.getPageTitle()).to.contain("Home Page");
  });
  it.skip("Create Account", async () => {
    await homePage.getCreateAccountBtn().click();
    expect(await accountCreatePage.getTextH1()).to.eq(
      "Create New Customer Account"
    );
    await accountCreatePage.getFirstName().sendKeys(firstName);
    await accountCreatePage.getLastName().sendKeys(lastName);
    await accountCreatePage.getEmail().sendKeys(eMail);
    await accountCreatePage.getPassword().sendKeys(password);
    await accountCreatePage.getPassConfirmation().sendKeys(password);
    await accountCreatePage.getSubmitBtn().click();
    expect(await accountPage.getTextH1()).to.eq("My Account");
  });
  it("Log in", async () => {
    await homePage.getLogin().click();
    expect(await accountLoginPage.getTextH1()).to.eq("Customer Login");
    await accountLoginPage.getLoginEmail().sendKeys(eMail);
    await accountLoginPage.getLoginPassword().sendKeys(password);
    await accountLoginPage.getLoginBtn().click();
    await driver.wait(until.elementLocated(By.xpath(`//header/div[1]/div/ul`)));

    // Moram da resim ovde asertaciju!

    /*
    console.log((await homePage.getWelcomeMsg().getText()) + "kkkll ");
    expect(await homePage.getWelcomeMsg().getText()).to.eq(
      "Welcome, Peter Polip!"
    );
     */
  });
  it("Shop items on sale", async () => {
    await homePage.getSaleBtn().click();
    expect(await salePage.getTextH1()).to.eq("Sale");
    await salePage.getTeesSaleLink().click();
    expect(await womanTeesPage.getTextH1()).to.eq("Tees");
    await womanTeesPage.addItem1().click();
  });
});
