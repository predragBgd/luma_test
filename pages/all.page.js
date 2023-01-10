"use strict";

const { By } = require("selenium-webdriver");

module.exports = class AllPage {
  #driver;
  constructor(webdriver) {
    this.#driver = webdriver;
  }
  getTextH1() {
    return this.#driver.findElement(By.xpath(`//h1`)).getText();
  }
};
