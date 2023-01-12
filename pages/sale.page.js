"use strict";

const { By } = require("selenium-webdriver");
const AllPage = require("./all.page");

module.exports = class SalePage extends AllPage {
  #driver;
  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  getTeesSaleLink() {
    return this.#driver.findElement(By.xpath(`//a[3]/span[1]/span[2]`));
  }
};
