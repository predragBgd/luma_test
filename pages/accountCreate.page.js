"use strict";

const { By } = require("selenium-webdriver");
const AllPage = require("./all.page");

module.exports = class AccountCreatePage extends AllPage {
  #driver;
  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  getFirstName() {
    return this.#driver.findElement(By.id("firstname"));
  }
  getLastName() {
    return this.#driver.findElement(By.id("lastname"));
  }
  getEmail() {
    return this.#driver.findElement(By.id("email_address"));
  }
  getPassword() {
    return this.#driver.findElement(By.id("password"));
  }
  getPassConfirmation() {
    return this.#driver.findElement(By.id("password-confirmation"));
  }
  getSubmitBtn() {
    return this.#driver.findElement(
      By.xpath(`//button[@class="action submit primary"]`)
    );
  }
};
