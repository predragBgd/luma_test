"use strict";

const { By } = require("selenium-webdriver");
const AllPage = require("./all.page");

module.exports = class WomanTeesPage extends AllPage {
  #driver;
  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  addItem1() {
    return this.#driver.findElement(By.xpath(`//ol/li[1]`));
  }
  addItem2() {
    return this.#driver.findElement(By.xpath(`//ol/li[6]`));
  }
  addItem3() {
    return this.#driver.findElement(By.xpath(`//ol/li[10]`));
  }
};
