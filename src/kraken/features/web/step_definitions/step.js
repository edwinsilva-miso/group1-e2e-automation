const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("#identification");
  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("#password");
  return await element.setValue(password);
});

When("I click sign in", async function () {
  let element = await this.driver.$("#ember5");
  return await element.click();
});

When("I click members", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(4)"
  );
  return await element.click();
});

When("I enter name {kraken-string}", async function (name) {
  let element = await this.driver.$("#member-name");
  return await element.setValue(name);
});

When("I enter member email {kraken-string}", async function (email) {
  let element = await this.driver.$("#member-email");
  return await element.setValue(email);
});

When("I click save member", async function () {
  let element = await this.driver.$("button[data-test-button='save']");
  return await element.click();
});

When("I click on the user menu", async function () {
  let element = await this.driver.$("div[class='flex-auto flex items-center']");
  return await element.click();
});

When("I click on sign out", async function () {
  let element = await this.driver.$("a[href='#/signout/']");
  return await element.click();
});

When("I click on member dropdown", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > section > div.gh-canvas-header.sticky.gh-member-header > header > section > span"
  );
  return await element.click();
});

When("I click on delete member", async function () {
  let element = await this.driver.$("button[data-test-button='delete-member']");
  return await element.click();
});

When("I click on confirm delete", async function () {
  let element = await this.driver.$(
    "button[class='gh-btn gh-btn-red gh-btn-icon ember-view']"
  );
  return await element.click();
});

Then("I see i was redirected to the members page", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > section > div > header > div > h2"
  );
  expect(element).to.not.equal(null);
  let text = await element.getText();
  expect(text).to.contain("Members");
});

Then("I see that the email is mandatory", async function () {
  let element = await this.driver.$$(
    "body > div.gh-app > div > main > section > div:nth-child(2) > form > div > section > div > div:nth-child(1) > div > div.gh-cp-member-email-name > div.form-group.max-width.error > p"
  );
  expect(element.length).to.equal(1);
});

Then("I see i was redirected to the dashboard", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > section > div > div > header > h2"
  );
  expect(element).to.not.equal(null);
});

Then("I see i was redirected to the sign in page", async function () {
  //Sing in button
  let element = await this.driver.$("#ember5");
  expect(element).to.not.equal(null);
});

Then("I see that i havent filled out the form", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > div.gh-flow > div > section > p"
  );
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain("Please fill out the form to sign in.");
});

Then("I see that the credentials are incorrect", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > div.gh-flow > div > section > p"
  );
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain("Your password is incorrect.");
});

Then(
  "I see that the member was created with the name {kraken-string} and email {kraken-string}",
  async function (name, email) {
    let nameElement = await this.driver.$(
      "body > div.gh-app > div > main > section > div:nth-child(2) > form > div > section > section > div > div.gh-member-details-identity > div > h3"
    );
    let emailElement = await this.driver.$(
      "body > div.gh-app > div > main > section > div:nth-child(2) > form > div > section > section > div > div.gh-member-details-identity > div > p > a"
    );
    let text = await nameElement.getText();
    let emailText = await emailElement.getText();
    expect(nameElement).to.not.equal(null);
    expect(emailElement).to.not.equal(null);
    expect(text).to.contain(name);
    expect(emailText).to.contain(email);
  }
);
