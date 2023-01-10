"use strict";

const { By } = require("selenium-webdriver");

module.exports = class HomePage {
  #driver;
  constructor(webdriver) {
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
};
