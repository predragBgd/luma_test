"use strict";

const { By } = require("selenium-webdriver");
const AllPage = require("./all.page");

module.exports = class ProductPage extends AllPage {
  #driver;
  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  getSizeM() {
    return this.#driver.findElement(By.id("option-label-size-143-item-168"));
  }
  getQty() {
    return this.#driver.findElement(By.id("qty"));
  }
  getAddToCartBtn() {
    return this.#driver.findElement(By.id("product-addtocart-button"));
  }
  getColor1() {
    return this.#driver.findElement(By.id("option-label-color-93-item-50"));
  }
  getColor2() {
    return this.#driver.findElement(By.id("option-label-color-93-item-56"));
  }
  getColor3() {
    return this.#driver.findElement(By.id("option-label-color-93-item-58"));
  }
  getAddToChartMsg() {
    return this.#driver
      .findElement(By.xpath(`//*[@id="maincontent"]/div[1]/div[2]/div/div/div`))
      .getText();
  }
};
