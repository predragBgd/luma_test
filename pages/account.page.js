"use strict";

const { By } = require("selenium-webdriver");
const AllPage = require("./all.page");

module.exports = class AccountPage extends AllPage {
  #driver;
  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
};
