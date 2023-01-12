"use strict";

const { By } = require("selenium-webdriver");
const AllPage = require("./all.page");

module.exports = class HomePage extends AllPage {
  #driver;
  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  getHomePage() {
    this.#driver.get("https://magento.softwaretestingboard.com/");
  }
  getPageTitle() {
    return this.#driver.getTitle();
  }
  getCreateAccountBtn() {
    return this.#driver.findElement(By.linkText("Create an Account"));
  }
  getLogin() {
    return this.#driver.findElement(By.linkText("Sign In"));
  }
  getWelcomeMsg() {
    return this.#driver.findElement(By.linkText(" Sign Out "));
  }
};
