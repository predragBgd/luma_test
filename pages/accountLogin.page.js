"use strict";

const { By } = require("selenium-webdriver");
const AllPage = require("./all.page");

module.exports = class AccountLoginPage extends AllPage {
  #driver;
  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  getLoginEmail() {
    return this.#driver.findElement(By.id("email"));
  }
  getLoginPassword() {
    return this.#driver.findElement(By.id("pass"));
  }
  getLoginBtn() {
    return this.#driver.findElement(By.id("send2"));
  }
};
